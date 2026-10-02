-- SEO performance and ranking data for the admin SEO dashboard.
CREATE TABLE IF NOT EXISTS public.seo_keyword_rankings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  position NUMERIC(8,2),
  previous_position NUMERIC(8,2),
  clicks INTEGER NOT NULL DEFAULT 0,
  impressions INTEGER NOT NULL DEFAULT 0,
  ctr NUMERIC(8,4),
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS seo_keyword_rankings_keyword_idx ON public.seo_keyword_rankings(keyword);
CREATE INDEX IF NOT EXISTS seo_keyword_rankings_post_idx ON public.seo_keyword_rankings(post_id);
CREATE INDEX IF NOT EXISTS seo_keyword_rankings_recorded_idx ON public.seo_keyword_rankings(recorded_at DESC);

CREATE OR REPLACE VIEW public.seo_latest_keyword_rankings AS
WITH ranked AS (
  SELECT
    id,
    post_id,
    keyword,
    position,
    previous_position,
    clicks,
    impressions,
    ctr,
    recorded_at,
    ROW_NUMBER() OVER (
      PARTITION BY keyword, post_id
      ORDER BY recorded_at DESC, id DESC
    ) AS row_num
  FROM public.seo_keyword_rankings
)
SELECT
  id,
  post_id,
  keyword,
  position,
  previous_position,
  clicks,
  impressions,
  ctr,
  recorded_at
FROM ranked
WHERE row_num = 1;

CREATE TABLE IF NOT EXISTS public.seo_daily_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_date DATE NOT NULL UNIQUE,
  clicks INTEGER NOT NULL DEFAULT 0,
  impressions INTEGER NOT NULL DEFAULT 0,
  ctr NUMERIC(8,4),
  average_position NUMERIC(8,2),
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS seo_daily_metrics_date_idx ON public.seo_daily_metrics(metric_date DESC);

ALTER TABLE public.seo_keyword_rankings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_daily_metrics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Content admins manage SEO rankings" ON public.seo_keyword_rankings;
CREATE POLICY "Content admins manage SEO rankings" ON public.seo_keyword_rankings
  FOR ALL TO authenticated
  USING (public.is_content_admin())
  WITH CHECK (public.is_content_admin());

DROP POLICY IF EXISTS "Content admins manage SEO daily metrics" ON public.seo_daily_metrics;
CREATE POLICY "Content admins manage SEO daily metrics" ON public.seo_daily_metrics
  FOR ALL TO authenticated
  USING (public.is_content_admin())
  WITH CHECK (public.is_content_admin());

GRANT ALL ON public.seo_keyword_rankings, public.seo_daily_metrics TO authenticated;
GRANT SELECT ON public.seo_latest_keyword_rankings TO authenticated;
