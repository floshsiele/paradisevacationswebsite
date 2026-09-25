-- Target locations are no longer used. Geographic focus now comes from
-- the SEO keyword library and website-content analysis.
ALTER TABLE public.content_automation_settings
DROP COLUMN IF EXISTS target_locations;
