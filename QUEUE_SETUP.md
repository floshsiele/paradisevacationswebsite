# Queue-based AI content generation

The AI content system now creates one `content_generation_jobs` row per article and sends each job to the `generate-content-worker` Edge Function. The main `generate-content` function returns quickly instead of waiting for all articles to finish.

## Deploy

1. Apply the new migration:

```bash
npx supabase db push
```

2. Deploy the dispatcher:

```bash
npx supabase functions deploy generate-content
```

3. Deploy the worker:

```bash
npx supabase functions deploy generate-content-worker
```

4. Deploy the scheduled automation function:

```bash
npx supabase functions deploy run-content-automation
```

5. In Supabase Edge Function Secrets make sure these are present:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional; defaults to `gpt-5.6-luna`)
- `PEXELS_API_KEY` (optional; articles still generate without it)
- `CONTENT_AUTOMATION_SECRET` (required for worker dispatch and scheduled automation)

The Supabase runtime automatically provides `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to Edge Functions.

## Behaviour

Clicking **Generate 10 posts now** creates 10 jobs and immediately returns. Each worker generates one article, saves it, and updates the run counters. The dashboard polls active runs and shows progress such as `5/10 generated` while the remaining jobs are still processing.

A failed job is isolated from the other jobs. It cannot cause the entire run to time out.
