import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-automation-secret', 'Access-Control-Allow-Methods': 'POST, OPTIONS' }
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  const secret = Deno.env.get('CONTENT_AUTOMATION_SECRET')
  if (!secret || req.headers.get('x-automation-secret') !== secret) return new Response('Unauthorized', { status: 401, headers: cors })
  try {
    const { data: settings } = await supabase.from('content_automation_settings').select('*').single()
    if (!settings?.enabled) return new Response(JSON.stringify({ skipped: true, reason: 'Automation disabled' }), { headers: { ...cors, 'Content-Type': 'application/json' } })
    const response = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/generate-content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-automation-secret': secret },
      body: JSON.stringify({ count: settings.posts_per_day }),
    })
    const body = await response.text()
    return new Response(body, { status: response.status, headers: { ...cors, 'Content-Type': 'application/json' } })
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } })
  }
})
