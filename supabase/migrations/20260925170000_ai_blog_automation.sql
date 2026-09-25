-- AI SEO blog automation
CREATE TABLE IF NOT EXISTS public.content_admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.is_content_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.content_admins WHERE user_id = auth.uid()
  );
$$;

CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content_html TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Travel Guides',
  tags TEXT[] NOT NULL DEFAULT '{}',
  focus_keyword TEXT,
  meta_title TEXT,
  meta_description TEXT,
  featured_image_url TEXT,
  featured_image_alt TEXT,
  image_source TEXT,
  image_photographer TEXT,
  image_photographer_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','scheduled','published','failed')),
  scheduled_for TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  read_time_minutes INTEGER NOT NULL DEFAULT 6,
  author_name TEXT NOT NULL DEFAULT 'Paradise Vacations Kenya',
  ai_generated BOOLEAN NOT NULL DEFAULT false,
  generation_model TEXT,
  generation_cost_usd NUMERIC(12,6),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS blog_posts_status_published_idx ON public.blog_posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON public.blog_posts(category);

CREATE TABLE IF NOT EXISTS public.content_automation_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enabled BOOLEAN NOT NULL DEFAULT false,
  posts_per_day INTEGER NOT NULL DEFAULT 10 CHECK (posts_per_day BETWEEN 1 AND 50),
  words_per_post INTEGER NOT NULL DEFAULT 1000 CHECK (words_per_post BETWEEN 500 AND 3000),
  auto_publish BOOLEAN NOT NULL DEFAULT false,
  image_provider TEXT NOT NULL DEFAULT 'pexels',
  default_category TEXT NOT NULL DEFAULT 'Travel Guides',
  brand_instructions TEXT NOT NULL DEFAULT 'Write for Paradise Vacations Kenya, a professional Kenya travel and destination management company. Use practical, accurate, helpful language and avoid generic filler.',
  target_locations TEXT[] NOT NULL DEFAULT ARRAY['Kenya','Nairobi','Maasai Mara','Mombasa','Diani','Watamu','Lamu','East Africa'],
  target_keywords TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.content_automation_settings (id)
SELECT gen_random_uuid()
WHERE NOT EXISTS (SELECT 1 FROM public.content_automation_settings);

CREATE TABLE IF NOT EXISTS public.content_generation_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requested_count INTEGER NOT NULL DEFAULT 10,
  generated_count INTEGER NOT NULL DEFAULT 0,
  published_count INTEGER NOT NULL DEFAULT 0,
  failed_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'running' CHECK (status IN ('running','completed','failed')),
  error_message TEXT,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

ALTER TABLE public.content_admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_automation_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_generation_runs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can view own admin record" ON public.content_admins;
CREATE POLICY "Admins can view own admin record" ON public.content_admins FOR SELECT TO authenticated USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Public can read published posts" ON public.blog_posts;
CREATE POLICY "Public can read published posts" ON public.blog_posts FOR SELECT TO anon, authenticated USING (status = 'published' AND published_at IS NOT NULL AND published_at <= now());
DROP POLICY IF EXISTS "Content admins manage posts" ON public.blog_posts;
CREATE POLICY "Content admins manage posts" ON public.blog_posts FOR ALL TO authenticated USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());

DROP POLICY IF EXISTS "Content admins manage settings" ON public.content_automation_settings;
CREATE POLICY "Content admins manage settings" ON public.content_automation_settings FOR ALL TO authenticated USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());
DROP POLICY IF EXISTS "Content admins manage runs" ON public.content_generation_runs;
CREATE POLICY "Content admins manage runs" ON public.content_generation_runs FOR ALL TO authenticated USING (public.is_content_admin()) WITH CHECK (public.is_content_admin());

CREATE OR REPLACE FUNCTION public.set_blog_posts_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
DROP TRIGGER IF EXISTS blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.set_blog_posts_updated_at();

CREATE OR REPLACE FUNCTION public.set_content_settings_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
DROP TRIGGER IF EXISTS content_settings_updated_at ON public.content_automation_settings;
CREATE TRIGGER content_settings_updated_at BEFORE UPDATE ON public.content_automation_settings FOR EACH ROW EXECUTE FUNCTION public.set_content_settings_updated_at();

GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT ALL ON public.blog_posts, public.content_admins, public.content_automation_settings, public.content_generation_runs TO authenticated;

