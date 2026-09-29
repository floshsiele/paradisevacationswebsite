import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-automation-secret', 'Access-Control-Allow-Methods': 'POST, OPTIONS' }
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  try {
    const { data: settings } = await supabase.from('content_automation_settings').select('*').single()
    const envSecret = Deno.env.get('CONTENT_AUTOMATION_SECRET')
    const requestSecret = req.headers.get('x-automation-secret')
    const validSecret = (envSecret && requestSecret === envSecret) || (settings?.automation_secret && requestSecret === settings.automation_secret)
    if (!validSecret) return new Response('Unauthorized', { status: 401, headers: cors })
    if (!settings?.enabled) return new Response(JSON.stringify({ skipped: true, reason: 'Automation disabled' }), { headers: { ...cors, 'Content-Type': 'application/json' } })

    const { data: activeRun } = await supabase.from('content_generation_runs')
      .select('id,started_at')
      .eq('status', 'running')
      .order('started_at', { ascending: false })
      .limit(1)
      .maybeSingle()
    if (activeRun) {
      const started = new Date(activeRun.started_at).getTime()
      const sixHours = 6 * 60 * 60 * 1000
      if (Date.now() - started < sixHours) {
        return new Response(JSON.stringify({ skipped: true, reason: 'A content generation run is already in progress', run_id: activeRun.id }), { headers: { ...cors, 'Content-Type': 'application/json' } })
      }
    }

    const secret = envSecret || settings.automation_secret
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!serviceRoleKey) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not configured')

    // generate-content has JWT verification enabled at the Supabase Functions gateway.
    // The scheduler must therefore send the service-role JWT as Authorization in
    // addition to the automation secret checked by the function itself.
    const response = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/generate-content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${serviceRoleKey}`,
        'x-automation-secret': secret,
      },
      body: JSON.stringify({ count: settings.posts_per_day }),
    })
    const body = await response.text()
    return new Response(body, { status: response.status, headers: { ...cors, 'Content-Type': 'application/json' } })
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } })
  }
})
