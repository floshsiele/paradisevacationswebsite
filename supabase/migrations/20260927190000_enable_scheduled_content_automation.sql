-- Enable real scheduled execution for AI content automation.
-- The schedule runs daily at 21:05 UTC (00:05 East Africa Time).

ALTER TABLE public.content_automation_settings
  ADD COLUMN IF NOT EXISTS automation_secret TEXT;

-- Make sure existing rows have a secret even if the column was added to an older database.
UPDATE public.content_automation_settings
SET automation_secret = md5(random()::text || clock_timestamp()::text || random()::text) || md5(random()::text || clock_timestamp()::text || random()::text)
WHERE automation_secret IS NULL OR automation_secret = '';

ALTER TABLE public.content_automation_settings
  ALTER COLUMN automation_secret SET NOT NULL;

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

SELECT cron.unschedule('daily-content-automation')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'daily-content-automation'
);

SELECT cron.schedule(
  'daily-content-automation',
  '5 21 * * *',
  $$
  SELECT net.http_post(
    url := 'https://ceswismuktigjbzzirpw.supabase.co/functions/v1/run-content-automation',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-automation-secret', (SELECT automation_secret FROM public.content_automation_settings LIMIT 1)
    ),
    body := '{}'::jsonb
  );
  $$
);
