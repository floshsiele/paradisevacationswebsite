import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-automation-secret',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function slugify(s: string) { return s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 90) }
function uniqueSlug(baseSlug: string, existingSlugs: Set<string>) {
  const root = baseSlug || 'travel-guide'
  let slug = root
  let n = 2
  while (existingSlugs.has(slug)) slug = `${root}-${n++}`
  return slug
}
function sanitizeHtml(html: string) {
  return String(html || '').replace(/<(?!\/?(?:p|h2|h3|ul|ol|li|strong|em|a)(?:\s|>))[^>]*>/gi, '')
}
function estimateReadTime(words: number) { return Math.max(3, Math.round(words / 180)) }
function stripCodeFence(s: string) { return s.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```$/i, '').trim() }
function response(body: unknown, status = 200) { return new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } }) }

const CATEGORY_OPTIONS = [
  'Safaris',
  'Beach Holidays',
  'Destinations',
  'Travel Tips',
  'Travel Planning',
  'Corporate Travel',
  'DMC',
  'Immigration',
  'Tea Tourism',
  'Kenya Travel',
] as const

function normalizeCategory(value: unknown, fallback: string) {
  const raw = String(value || '').trim()
  const match = CATEGORY_OPTIONS.find(category => category.toLowerCase() === raw.toLowerCase())
  if (match) return match
  return CATEGORY_OPTIONS.find(category => category.toLowerCase() === String(fallback || '').trim().toLowerCase()) || 'Travel Tips'
}

async function openaiGenerate(prompt: string) {
  const key = Deno.env.get('OPENAI_API_KEY')
  if (!key) throw new Error('OPENAI_API_KEY is not configured')
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 60000)
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      signal: controller.signal,
      body: JSON.stringify({
        model: Deno.env.get('OPENAI_MODEL') || 'gpt-5.6-luna',
        reasoning_effort: 'none',
        response_format: { type: 'json_object' },
        messages: [
          { role: 'developer', content: 'You are an SEO content strategist and travel writer. Return valid JSON only. Do not invent current visa, safety, pricing, legal, or regulatory facts. When facts may change, phrase carefully and recommend checking official sources.' },
          { role: 'user', content: prompt },
        ],
      }),
    })
    if (!res.ok) throw new Error(`OpenAI request failed: ${await res.text()}`)
    const data = await res.json()
    const text = data.choices?.[0]?.message?.content
    if (!text) throw new Error('OpenAI returned no content')
    return JSON.parse(stripCodeFence(text))
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') throw new Error('OpenAI request timed out after 60 seconds')
    throw e
  } finally { clearTimeout(timer) }
}

async function pexelsSearch(query: string) {
  const key = Deno.env.get('PEXELS_API_KEY')
  if (!key) return null
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=8`, { headers: { Authorization: key }, signal: controller.signal })
    if (!response.ok) return null
    const data = await response.json()
    const photo = data.photos?.[0]
    if (!photo) return null
    return { url: photo.src?.large2x || photo.src?.large || photo.src?.original, alt: photo.alt || query, source: `https://www.pexels.com/photo/${photo.id}/`, photographer: photo.photographer, photographer_url: photo.photographer_url }
  } catch { return null } finally { clearTimeout(timer) }
}

async function refreshRun(runId: string) {
  const { error } = await supabase.rpc('refresh_content_generation_run', { p_run_id: runId })
  if (error) console.error('Could not refresh generation run:', error)
}

async function generateOne(settings: any, keyword: any, existingTitles: string[], existingSlugs: Set<string>, priorKeywordTitles: string[]) {
  const prompt = `Create one original SEO travel article for Paradise Vacations Kenya.
Word count target: ${settings.words_per_post} words.
Brand instructions: ${settings.brand_instructions}
Primary target keyword: ${keyword.keyword}
Keyword destination: ${keyword.destination || 'Kenya travel'}
Search intent: ${keyword.search_intent || 'informational'}
Content type: ${keyword.content_type || 'travel guide'}
Keyword usage cycle: ${Number(keyword.times_used || 0) + 1}
Previous articles written for this keyword: ${priorKeywordTitles.slice(0, 20).join(' | ') || 'None'}
Existing titles to avoid: ${existingTitles.slice(0, 100).join(' | ')}
Allowed categories: ${CATEGORY_OPTIONS.join(', ')}
Category rule: After writing the article, assign exactly ONE category from the allowed categories based on the article's actual subject and the majority of its content. Do not choose a category merely because a target keyword or location appears in the article. Use Safaris for wildlife/safari trip content, Beach Holidays for coast/beach/island holidays, Destinations for destination-specific guides, Travel Tips for practical general travel advice, Travel Planning for itineraries/budgets/when-to-go/planning guides, Corporate Travel for business travel, DMC for destination management/ground handling, Immigration for visas/entry/immigration topics, Tea Tourism for tea-related tourism, and Kenya Travel for broad Kenya travel content that does not fit a narrower category.
Return JSON with exactly these keys: title, slug, excerpt, meta_title, meta_description, focus_keyword, category, tags, content_html, image_query.
The focus_keyword must be the supplied Primary target keyword. On later cycles, create a substantially different angle from the previous articles for this keyword; do not simply rewrite an earlier article.
Use HTML in content_html with <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, and <a> only. Do not include <html>, <head>, <body>, scripts, or markdown. Include a useful FAQ section when appropriate. Avoid keyword stuffing and generic filler. Make the article genuinely useful for a traveller.`
  const article = await openaiGenerate(prompt)
  article.content_html = sanitizeHtml(article.content_html)
  const image = await pexelsSearch(article.image_query || article.title)
  const words = String(article.content_html || '').replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length
  let slug = uniqueSlug(slugify(article.slug || article.title), existingSlugs)
  return {
    title: article.title,
    slug,
    excerpt: article.excerpt,
    content_html: article.content_html,
    category: normalizeCategory(article.category, settings.default_category),
    tags: Array.isArray(article.tags) ? article.tags : [],
    focus_keyword: article.focus_keyword || null,
    meta_title: article.meta_title || article.title,
    meta_description: article.meta_description || article.excerpt,
    featured_image_url: image?.url || null,
    featured_image_alt: image?.alt || article.title,
    image_source: image?.source || null,
    image_photographer: image?.photographer || null,
    image_photographer_url: image?.photographer_url || null,
    status: settings.auto_publish ? 'published' : 'draft',
    published_at: settings.auto_publish ? new Date().toISOString() : null,
    read_time_minutes: estimateReadTime(words),
    author_name: 'Paradise Vacations Kenya',
    ai_generated: true,
    generation_model: Deno.env.get('OPENAI_MODEL') || 'gpt-5.6-luna',
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  const secret = Deno.env.get('CONTENT_AUTOMATION_SECRET')
  if (!secret || req.headers.get('x-automation-secret') !== secret) return response({ error: 'Unauthorized' }, 401)

  let jobId = ''
  try {
    const body = await req.json().catch(() => ({}))
    jobId = String(body.job_id || '')
    if (!jobId) return response({ error: 'job_id is required' }, 400)

    const { data: job, error: jobError } = await supabase.from('content_generation_jobs').select('*').eq('id', jobId).maybeSingle()
    if (jobError || !job) return response({ error: jobError?.message || 'Job not found' }, 404)
    if (job.status === 'completed') return response({ ok: true, skipped: true, reason: 'Already completed' })
    if (job.status === 'processing' && job.started_at && Date.now() - new Date(job.started_at).getTime() < 10 * 60 * 1000) return response({ ok: true, skipped: true, reason: 'Already processing' })

    const { data: claimed, error: claimError } = await supabase.from('content_generation_jobs').update({ status: 'processing', attempts: (job.attempts || 0) + 1, started_at: new Date().toISOString(), error_message: null }).eq('id', jobId).in('status', ['pending', 'processing']).select().maybeSingle()
    if (claimError || !claimed) return response({ error: claimError?.message || 'Job was already claimed' }, 409)

    const { data: settings, error: settingsError } = await supabase.from('content_automation_settings').select('*').single()
    if (settingsError || !settings) throw new Error(settingsError?.message || 'Content settings not found')

    const { data: keyword, error: keywordError } = await supabase.rpc('claim_content_keyword', { p_job_id: jobId })
    if (keywordError || !keyword) throw new Error(keywordError?.message || 'Could not claim an SEO keyword')
    await supabase.from('content_generation_jobs').update({ keyword_id: keyword.id, keyword_cycle: Number(keyword.times_used || 0) + 1 }).eq('id', jobId)

    const { data: prior } = await supabase.from('blog_posts').select('title,slug,keyword_cycle').eq('target_keyword_id', keyword.id).order('created_at', { ascending: false }).limit(20)
    const priorKeywordTitles = (prior || []).map((p: any) => p.title)
    const { data: existing } = await supabase.from('blog_posts').select('title,slug').order('created_at', { ascending: false }).limit(1000)
    const titles = (existing || []).map((p: any) => p.title)
    const slugs = new Set((existing || []).map((p: any) => p.slug))
    const post = await generateOne(settings, keyword, titles, slugs, priorKeywordTitles)
    post.target_keyword_id = keyword.id
    post.keyword_cycle = Number(keyword.times_used || 0) + 1

    let inserted: any = null
    let lastInsertError = ''
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data, error } = await supabase.from('blog_posts').insert(post).select().single()
      if (!error) { inserted = data; break }
      lastInsertError = error.message
      if (String(error.code || '').includes('23505') || /duplicate key|unique/i.test(error.message)) {
        post.slug = post.slug + '-' + crypto.randomUUID().slice(0, 6)
        continue
      }
      throw error
    }
    if (!inserted) throw new Error(lastInsertError || 'Could not save generated article')

    await supabase.rpc('complete_content_keyword', { p_job_id: jobId, p_keyword_id: keyword.id })
    await supabase.from('content_generation_jobs').update({ status: 'completed', blog_post_id: inserted.id, keyword_id: keyword.id, keyword_cycle: Number(keyword.times_used || 0) + 1, completed_at: new Date().toISOString(), error_message: null }).eq('id', jobId)
    await refreshRun(job.run_id)
    return response({ ok: true, job_id: jobId, article_id: inserted.id, title: inserted.title })
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    console.error(`Generation job ${jobId} failed:`, message)
    if (jobId) {
      const { data: failedJob } = await supabase.from('content_generation_jobs').select('run_id,attempts,keyword_id').eq('id', jobId).maybeSingle()
      if (failedJob) {
        if (failedJob.keyword_id) await supabase.rpc('release_content_keyword', { p_job_id: jobId, p_keyword_id: failedJob.keyword_id })
        await supabase.from('content_generation_jobs').update({ status: 'failed', error_message: message, completed_at: new Date().toISOString() }).eq('id', jobId)
        await refreshRun(failedJob.run_id)
      }
    }
    return response({ error: message, job_id: jobId }, 500)
  }
})
