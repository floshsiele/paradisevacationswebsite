ALTER TABLE public.content_keywords ADD COLUMN IF NOT EXISTS source_type TEXT NOT NULL DEFAULT 'master_library';
ALTER TABLE public.content_keywords ADD COLUMN IF NOT EXISTS source_url TEXT;
ALTER TABLE public.content_keywords ADD COLUMN IF NOT EXISTS source_rationale TEXT;
CREATE INDEX IF NOT EXISTS content_keywords_source_idx ON public.content_keywords(source_type);
