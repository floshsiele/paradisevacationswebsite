import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
function response(body: unknown, status = 200) { return new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } }) }
function normalizeUrl(value: string) { const url = new URL(value); if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Only HTTP and HTTPS website URLs are supported'); url.hash = ''; return url.toString().replace(/\/$/, '') }
function sameOrigin(a: string, b: string) { return new URL(a).origin === new URL(b).origin }
function decodeEntities(value: string) { return value.replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'").replace(/&nbsp;/gi, ' ') }
function cleanText(html: string) { return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ').replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'").replace(/\s+/g, ' ').trim() }
function extract(html: string, pageUrl: string) {
  const title = decodeEntities((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').trim())
  const description = decodeEntities((html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] || '').trim())
  const headings = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)].map(m => cleanText(m[1])).filter(Boolean).slice(0, 80)
  const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]).flatMap(href => { try { return [new URL(href, pageUrl).toString()] } catch { return [] } }).filter(url => /^https?:/i.test(url) && sameOrigin(url, pageUrl) && !/\.(pdf|jpg|jpeg|png|webp|gif|svg|mp4|zip)$/i.test(url))
  return { url: pageUrl, title, description, headings, text: cleanText(html).slice(0, 18000), links: [...new Set(links)].slice(0, 100) }
}
async function fetchPage(url: string) {
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 12000)
  try { const res = await fetch(url, { headers: { 'User-Agent': 'ParadiseVacations-SEO-Analyzer/1.0' }, signal: controller.signal }); if (!res.ok) throw new Error(`HTTP ${res.status}`); return extract(await res.text(), url) }
  finally { clearTimeout(timer) }
}
async function sitemapUrls(siteUrl: string) {
  const origin = new URL(siteUrl).origin
  const candidates = [`${origin}/sitemap.xml`, `${origin}/sitemap_index.xml`]
  const seenSitemaps = new Set<string>()
  const urls = new Set<string>()

  async function readSitemap(sitemapUrl: string, depth = 0) {
    if (depth > 3 || seenSitemaps.has(sitemapUrl)) return
    seenSitemaps.add(sitemapUrl)
    try {
      const res = await fetch(sitemapUrl, { headers: { 'User-Agent': 'ParadiseVacations-SEO-Analyzer/2.0' } })
      if (!res.ok) return
      const xml = await res.text()
      const locs = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map(m => m[1].trim())
      const isIndex = /<sitemapindex[\s>]/i.test(xml)
      if (isIndex) {
        for (const loc of locs) await readSitemap(loc, depth + 1)
      } else {
        for (const loc of locs) {
          try {
            const normalized = normalizeUrl(loc)
            if (sameOrigin(normalized, siteUrl) && !/\.(pdf|jpg|jpeg|png|webp|gif|svg|mp4|zip|xml)$/i.test(normalized)) urls.add(normalized)
          } catch { }
        }
      }
    } catch { }
  }

  for (const candidate of candidates) await readSitemap(candidate)
  return [...urls]
}

async function fetchPages(urls: string[], maxPages: number) {
  const results: any[] = []
  const concurrency = 8
  for (let i = 0; i < Math.min(urls.length, maxPages); i += concurrency) {
    const batch = urls.slice(i, i + concurrency)
    const fetched = await Promise.all(batch.map(async url => { try { return await fetchPage(url) } catch { return null } }))
    results.push(...fetched.filter(Boolean))
  }
  return results
}

async function generateKeywords(summary: string, existingKeywords: string[], count: number) {
  const key = Deno.env.get('OPENAI_API_KEY'); if (!key) throw new Error('OPENAI_API_KEY is not configured')
  const prompt = `Analyze the supplied WEBSITE CONTENT BATCH and build an SEO keyword opportunity list specifically for this business. Every keyword must be grounded in the pages supplied. Cover as many distinct content areas represented in this batch as possible: services, destinations, tours/products, travel styles, audiences, planning topics, costs, itineraries, FAQs, and supporting informational topics. Do not invent services, destinations, products, or topics that are not supported by the supplied pages. Generate ${count} distinct keyword ideas. Avoid near-duplicates and generic keywords. For each keyword return keyword, destination, search_intent (informational/commercial/navigational/transactional), content_type (destination guide/service guide/itinerary/travel guide/comparison/FAQ/cost guide/other), priority (1-3), rationale. Return JSON only as {"keywords":[...]}. Do not include search-volume claims. Existing keywords to avoid duplicating: ${existingKeywords.join(' | ')}\n\nWEBSITE CONTENT BATCH:\n${summary}`
  const res = await fetch('https://api.openai.com/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body: JSON.stringify({ model: Deno.env.get('OPENAI_MODEL') || 'gpt-5.6-luna', reasoning_effort: 'none', response_format: { type: 'json_object' }, messages: [{ role: 'developer', content: 'You are an SEO strategist. Use only information supported by the supplied website content. Return valid JSON only.' }, { role: 'user', content: prompt }] }) })
  if (!res.ok) throw new Error(`OpenAI request failed: ${await res.text()}`)
  const data = await res.json(); const text = data.choices?.[0]?.message?.content; if (!text) throw new Error('OpenAI returned no content'); return JSON.parse(text)?.keywords || []
}
Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  try {
    const auth = req.headers.get('Authorization'); if (!auth) return response({ error: 'Unauthorized' }, 401)
    const token = auth.replace('Bearer ', '')
    const userClient = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: `Bearer ${token}` } } })
    const { data: { user } } = await userClient.auth.getUser(); if (!user) return response({ error: 'Unauthorized' }, 401)
    const { data: admin } = await supabase.from('content_admins').select('user_id').eq('user_id', user.id).maybeSingle(); if (!admin) return response({ error: 'Content admin access required' }, 403)
    const body = await req.json().catch(() => ({})); const siteUrl = normalizeUrl(String(body.url || 'https://paradisevacationswebsite.lovable.app')); const requestedCount = Math.min(Math.max(Number(body.count) || 100, 10), 250)

    // Build a complete URL inventory from nested sitemaps first. If a sitemap is unavailable,
    // recursively discover internal links from the homepage and the pages found along the way.
    let urls = await sitemapUrls(siteUrl)
    if (!urls.length) urls = [siteUrl]
    urls = [...new Set([siteUrl, ...urls])].filter(u => sameOrigin(u, siteUrl))

    const pages = await fetchPages(urls, 250)
    const seen = new Set(pages.map(p => p.url))

    // Continue crawling internal links so pages omitted from the sitemap are still analyzed.
    let frontier = pages.flatMap(p => p.links || []).filter((u: string) => sameOrigin(u, siteUrl) && !seen.has(u))
    for (let round = 0; round < 4 && pages.length < 250 && frontier.length; round++) {
      const nextUrls = [...new Set(frontier)].slice(0, 80)
      nextUrls.forEach(u => seen.add(u))
      const discoveredPages = await fetchPages(nextUrls, Math.min(250 - pages.length, nextUrls.length))
      pages.push(...discoveredPages)
      frontier = discoveredPages.flatMap(p => p.links || []).filter((u: string) => sameOrigin(u, siteUrl) && !seen.has(u))
    }
    if (!pages.length) throw new Error('Could not fetch any pages from the supplied website URL')

    const existingKeywords: string[] = []
    const pageSize = 1000
    for (let offset = 0; ; offset += pageSize) {
      const { data: batch, error: batchError } = await supabase.from('content_keywords').select('keyword').range(offset, offset + pageSize - 1)
      if (batchError) throw batchError
      if (!batch?.length) break
      existingKeywords.push(...batch.map((x: any) => String(x.keyword || '').trim().toLowerCase()).filter(Boolean))
      if (batch.length < pageSize) break
    }

    // Analyze the whole crawl in manageable batches instead of truncating the site to one 150k-character prompt.
    // This prevents large sites from losing entire service/destination/content areas.
    const normalizedExisting = new Set(existingKeywords)
    const generated: any[] = []
    const batchSize = 20
    const keywordsPerBatch = Math.max(10, Math.ceil(requestedCount / Math.ceil(pages.length / batchSize)))
    for (let i = 0; i < pages.length && generated.length < requestedCount; i += batchSize) {
      const batchPages = pages.slice(i, i + batchSize)
      const summary = batchPages.map(p => `PAGE: ${p.url}\nTITLE: ${p.title}\nMETA: ${p.description}\nHEADINGS: ${p.headings.join(' | ')}\nCONTENT: ${p.text.slice(0, 9000)}`).join('\n\n')
      try {
        const batchKeywords = await generateKeywords(summary, [...normalizedExisting].slice(0, 3000), Math.min(keywordsPerBatch, requestedCount - generated.length))
        for (const item of batchKeywords) {
          const keyword = String(item.keyword || '').trim().replace(/\s+/g, ' ')
          const normalized = keyword.toLowerCase()
          if (!keyword || normalizedExisting.has(normalized)) continue
          normalizedExisting.add(normalized)
          generated.push({ ...item, keyword })
          if (generated.length >= requestedCount) break
        }
      } catch (error) {
        console.error('Keyword batch failed', i, error)
      }
    }

    let inserted = 0
    for (const item of generated) {
      const keyword = String(item.keyword || '').trim().replace(/\s+/g, ' '); if (!keyword) continue
      const { error } = await supabase.from('content_keywords').upsert({ keyword, destination: item.destination || null, search_intent: item.search_intent || 'informational', content_type: item.content_type || 'travel guide', priority: Math.min(Math.max(Number(item.priority) || 2, 1), 3), source_type: 'website_analysis', source_url: siteUrl, source_rationale: item.rationale || null, updated_at: new Date().toISOString() }, { onConflict: 'keyword', ignoreDuplicates: true }); if (!error) inserted++
    }
    return response({ ok: true, site_url: siteUrl, pages_analyzed: pages.length, sitemap_urls_found: urls.length, keywords_generated: generated.length, keywords_added: inserted })
  } catch (e) { return response({ error: e instanceof Error ? e.message : String(e) }, 400) }
})
