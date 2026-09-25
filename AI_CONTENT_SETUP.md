# Paradise Vacations AI SEO Content Automation

This implementation adds a database-driven blog, an authenticated content manager, OpenAI article generation, Pexels featured images, and a Supabase Edge Function for daily automation.

## 1. Apply the database migration

Run the migration in `supabase/migrations/20260925170000_ai_blog_automation.sql` against the Paradise Vacations Supabase project.

## 2. Configure Supabase secrets

Set these Edge Function secrets:

- `OPENAI_API_KEY` — OpenAI API key
- `OPENAI_MODEL` — API model to use (the code defaults to `gpt-5.6-luna`; change it if your API account uses a different model identifier)
- `PEXELS_API_KEY` — Pexels API key
- `CONTENT_AUTOMATION_SECRET` — long random secret used by the scheduled automation endpoint

## 3. Deploy Edge Functions

Deploy:

- `supabase/functions/generate-content`
- `supabase/functions/run-content-automation`

The generator is protected by Supabase authentication for manual dashboard use. The scheduled function uses `CONTENT_AUTOMATION_SECRET`.

## 4. Create the content admin

Create an administrator account in Supabase Authentication, then add that user's UUID to `content_admins`:

```sql
insert into public.content_admins (user_id)
values ('YOUR_AUTH_USER_UUID');
```

Then visit:

`/admin/login`

## 5. Configure the dashboard

The content manager is available at:

`/admin/content`

Default settings are:

- 10 posts per day
- 1,000 words per post
- Pexels featured image
- Draft mode by default
- Paradise Vacations Kenya travel brand instructions

Turn on **Auto-publish** only after reviewing the generated articles and confirming your site's content workflow.

## 6. Daily automation

`run-content-automation` is designed to be called once per day by a scheduler. It checks whether automation is enabled, reads the configured posts-per-day value, and invokes the generator.

A production scheduler can call:

```text
POST https://YOUR_PROJECT.supabase.co/functions/v1/run-content-automation
x-automation-secret: YOUR_CONTENT_AUTOMATION_SECRET
```

For Supabase-hosted scheduling, configure an appropriate scheduled invocation in your Supabase project. Do not put `SUPABASE_SERVICE_ROLE_KEY`, OpenAI keys, Pexels keys, or the automation secret in the Vite frontend `.env` file.

## 7. Blog behavior

The public `/blog` and `/blog/:slug` pages now read published database articles first. Existing static articles remain as a fallback, so the current site continues to work while the new database is empty.

Generated articles contain:

- title and slug
- excerpt
- SEO title and description
- focus keyword
- category and tags
- structured HTML content
- Pexels featured image and attribution metadata
- publication status and timestamp
- estimated reading time
- AI generation metadata

## 8. Important SEO deployment note

The current site is a Vite/React single-page application. The new article data and metadata work correctly in the client, but for maximum search-engine performance, the production deployment should also use SSR or prerendering for `/blog/:slug`, and the sitemap should include generated article URLs. This is a separate deployment/SEO hardening step and should be completed before scaling to hundreds of posts.

## Daily automation

The `run-content-automation` Edge Function is intended to be called once per day by a scheduler. Configure a Supabase scheduled job (or an external scheduler) to POST to:

`/functions/v1/run-content-automation`

with the `x-automation-secret` header set to the same `CONTENT_AUTOMATION_SECRET` used by the functions. Start with `auto_publish=false`, test generated drafts, then enable auto-publishing when the content quality is acceptable.

## Production SEO note

The current application is a Vite/React client-rendered site. The blog database integration works with the existing `/blog` and `/blog/:slug` routes, but for maximum search-engine discoverability at scale, migrate blog rendering to SSR/prerendering and generate a dynamic XML sitemap from the published `blog_posts` table before publishing hundreds of articles.


### Generation performance
The `generate-content` function processes articles in batches of up to 5 concurrently. This avoids the long sequential execution that can cause a 10-article request to be interrupted by the Supabase Edge Function request/runtime limits.

## Keyword cycles

The project includes a master keyword library seeded from the supplied Kenya travel keyword list. Workers claim the least-used available keyword atomically. A keyword's `times_used` is incremented only after its article is successfully saved. This means every keyword is used once before any keyword is selected for a second cycle. On later cycles the worker passes previous article titles for that keyword to the AI and requires a substantially different angle.

Migration: `20260925200000_keyword_cycles.sql`. Deploy it with `npx supabase db push`, then deploy `generate-content-worker`.
