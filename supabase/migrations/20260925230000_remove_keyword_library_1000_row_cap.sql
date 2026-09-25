-- Remove the effective 1,000-row API limitation from keyword library reporting and analysis.
-- Supabase/PostgREST commonly caps a single response at 1,000 rows; aggregate stats
-- and paged server-side reads let the library grow beyond that safely.

CREATE OR REPLACE FUNCTION public.get_content_keyword_stats()
RETURNS TABLE (
  total_keywords BIGINT,
  used_keywords BIGINT,
  remaining_this_cycle BIGINT,
  current_cycle BIGINT
)
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  WITH stats AS (
    SELECT
      COUNT(*)::BIGINT AS total_keywords,
      COUNT(*) FILTER (WHERE times_used > 0)::BIGINT AS used_keywords,
      COALESCE(MIN(times_used), 0)::BIGINT AS min_uses
    FROM public.content_keywords
  )
  SELECT
    total_keywords,
    used_keywords,
    (SELECT COUNT(*)::BIGINT FROM public.content_keywords ck WHERE ck.times_used = stats.min_uses) AS remaining_this_cycle,
    (min_uses + 1)::BIGINT AS current_cycle
  FROM stats;
$$;

REVOKE ALL ON FUNCTION public.get_content_keyword_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_content_keyword_stats() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_content_keyword_stats() TO service_role;
