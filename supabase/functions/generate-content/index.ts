import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-automation-secret',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  try {
    const internalSecret = Deno.env.get('CONTENT_AUTOMATION_SECRET')
    const isInternal = !!internalSecret && req.headers.get('x-automation-secret') === internalSecret

    if (!isInternal) {
      const auth = req.headers.get('Authorization')
      if (!auth) return json({ error: 'Unauthorized' }, 401)
      const token = auth.replace('Bearer ', '')
      const userClient = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
        global: { headers: { Authorization: `Bearer ${token}` } },
      })
      const { data: { user } } = await userClient.auth.getUser()
      if (!user) return json({ error: 'Unauthorized' }, 401)
      const { data: admin } = await supabase.from('content_admins').select('user_id').eq('user_id', user.id).maybeSingle()
      if (!admin) return json({ error: 'Content admin access required' }, 403)
    }

    const { count = 1 } = await req.json().catch(() => ({}))
    const requested = Math.min(Math.max(Number(count) || 1, 1), 50)
    const { data: settings, error: settingsError } = await supabase.from('content_automation_settings').select('*').single()
    if (settingsError || !settings) throw new Error(settingsError?.message || 'Content settings not found')

    const { data: run, error: runError } = await supabase.from('content_generation_runs').insert({
      requested_count: requested,
      status: 'running',
    }).select().single()
    if (runError || !run) throw new Error(runError?.message || 'Could not create generation run')

    const jobs = Array.from({ length: requested }, (_, i) => ({
      run_id: run.id,
      job_index: i + 1,
      status: 'pending',
    }))
    const { data: insertedJobs, error: jobsError } = await supabase.from('content_generation_jobs').insert(jobs).select('id,job_index')
    if (jobsError) {
      await supabase.from('content_generation_runs').update({ status: 'failed', error_message: jobsError.message, completed_at: new Date().toISOString() }).eq('id', run.id)
      throw new Error(jobsError.message)
    }

    const workerSecret = Deno.env.get('CONTENT_AUTOMATION_SECRET')
    if (!workerSecret) {
      const message = 'CONTENT_AUTOMATION_SECRET is required for queue workers. Add this Supabase secret before generating content.'
      await supabase.from('content_generation_runs').update({ status: 'failed', error_message: message, failed_count: requested, completed_at: new Date().toISOString() }).eq('id', run.id)
      return json({ error: message, run_id: run.id }, 500)
    }

    const workerUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/generate-content-worker`
    // The worker is an internal function. Send the service-role JWT as well as
    // the automation secret so the Supabase Functions gateway can authorize
    // the internal request before the worker checks the shared secret.
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const workerCalls = (insertedJobs || []).map((job: any) => fetch(workerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${serviceRoleKey}`,
        'x-automation-secret': workerSecret,
      },
      body: JSON.stringify({ job_id: job.id }),
    }).then(async (response) => {
      if (!response.ok) console.error(`Worker dispatch ${job.job_index} returned ${response.status}:`, await response.text())
      else console.log(`Worker dispatch ${job.job_index} accepted.`)
    }).catch((error) => console.error(`Worker dispatch ${job.job_index} failed:`, error)))

    const runtime = (globalThis as any).EdgeRuntime
    if (runtime?.waitUntil) {
      runtime.waitUntil(Promise.allSettled(workerCalls))
    } else {
      // Local/runtime fallback. In production EdgeRuntime.waitUntil keeps the
      // background fan-out alive after the dispatcher response is returned.
      await Promise.allSettled(workerCalls)
    }

    return json({
      queued: requested,
      run_id: run.id,
      jobs: insertedJobs || [],
      message: `${requested} article generation jobs queued.`,
    })
  } catch (e) {
    console.error('generate-content dispatcher error', e)
    return json({ error: e instanceof Error ? e.message : String(e) }, 400)
  }
})
