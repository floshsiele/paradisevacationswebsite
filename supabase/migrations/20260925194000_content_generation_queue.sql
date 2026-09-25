-- Queue-based AI content generation. Each article gets an independent Edge Function job.
CREATE TABLE IF NOT EXISTS public.content_generation_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  run_id UUID NOT NULL REFERENCES public.content_generation_runs(id) ON DELETE CASCADE,
  job_index INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processing','completed','failed')),
  blog_post_id UUID REFERENCES public.blog_posts(id) ON DELETE SET NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  UNIQUE(run_id, job_index)
);

CREATE INDEX IF NOT EXISTS content_generation_jobs_run_idx
  ON public.content_generation_jobs(run_id, status, job_index);

ALTER TABLE public.content_generation_jobs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Content admins manage generation jobs" ON public.content_generation_jobs;
CREATE POLICY "Content admins manage generation jobs"
  ON public.content_generation_jobs
  FOR ALL TO authenticated
  USING (public.is_content_admin())
  WITH CHECK (public.is_content_admin());

GRANT ALL ON public.content_generation_jobs TO authenticated;

CREATE OR REPLACE FUNCTION public.refresh_content_generation_run(p_run_id UUID)
RETURNS public.content_generation_runs
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result public.content_generation_runs;
  requested INTEGER;
  generated INTEGER;
  published INTEGER;
  failed INTEGER;
  completed_jobs INTEGER;
  first_error TEXT;
BEGIN
  SELECT requested_count INTO requested
  FROM public.content_generation_runs
  WHERE id = p_run_id
  FOR UPDATE;

  IF requested IS NULL THEN
    RAISE EXCEPTION 'Generation run not found';
  END IF;

  SELECT
    COUNT(*) FILTER (WHERE status = 'completed')::INTEGER,
    COUNT(*) FILTER (WHERE status = 'failed')::INTEGER,
    MIN(error_message) FILTER (WHERE status = 'failed' AND error_message IS NOT NULL)
  INTO generated, failed, first_error
  FROM public.content_generation_jobs
  WHERE run_id = p_run_id;

  SELECT COUNT(*)::INTEGER INTO published
  FROM public.content_generation_jobs j
  JOIN public.blog_posts p ON p.id = j.blog_post_id
  WHERE j.run_id = p_run_id
    AND j.status = 'completed'
    AND p.status = 'published';

  completed_jobs := generated + failed;

  UPDATE public.content_generation_runs
  SET generated_count = generated,
      published_count = published,
      failed_count = failed,
      status = CASE
        WHEN completed_jobs >= requested AND failed = requested THEN 'failed'
        WHEN completed_jobs >= requested THEN 'completed'
        ELSE 'running'
      END,
      error_message = first_error,
      completed_at = CASE WHEN completed_jobs >= requested THEN COALESCE(completed_at, now()) ELSE NULL END
  WHERE id = p_run_id
  RETURNING * INTO result;

  RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.refresh_content_generation_run(UUID) TO service_role;
