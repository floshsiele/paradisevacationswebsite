-- Randomize keyword selection while preserving keyword usage cycles.
-- The generator still finishes the current cycle before reusing keywords,
-- but keywords within the least-used group are selected randomly.

CREATE OR REPLACE FUNCTION public.claim_content_keyword(p_job_id UUID)
RETURNS public.content_keywords
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE result public.content_keywords;
BEGIN
  UPDATE public.content_keywords
  SET locked_by_job_id = p_job_id,
      locked_until = now() + interval '15 minutes',
      updated_at = now()
  WHERE id = (
    SELECT id
    FROM public.content_keywords
    WHERE (locked_until IS NULL OR locked_until < now())
    ORDER BY times_used ASC, random()
    FOR UPDATE SKIP LOCKED
    LIMIT 1
  )
  RETURNING * INTO result;

  IF result.id IS NULL THEN
    RAISE EXCEPTION 'No content keywords are currently available';
  END IF;

  RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.claim_content_keyword(UUID) TO service_role;
