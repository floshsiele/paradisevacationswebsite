CREATE TABLE public.dmc_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  destination TEXT NOT NULL,
  arrival DATE NOT NULL,
  departure DATE,
  group_size INTEGER NOT NULL,
  services TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  attachment_path TEXT,
  attachment_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.dmc_inquiries TO service_role;

ALTER TABLE public.dmc_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public read of dmc inquiries"
ON public.dmc_inquiries FOR SELECT TO anon, authenticated USING (false);

CREATE POLICY "Anyone can upload a DMC attachment"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'dmc-attachments');