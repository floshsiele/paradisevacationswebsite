import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Payload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  destination: string;
  arrival: string;
  departure?: string;
  groupSize: string;
  services: string[];
  notes?: string;
  attachmentPath?: string;
  attachmentName?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Payload;

    const required = ["name", "email", "destination", "arrival", "groupSize"] as const;
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === "") {
        return new Response(JSON.stringify({ error: `Missing field: ${key}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const groupSize = Number(body.groupSize);
    if (!Number.isFinite(groupSize) || groupSize < 1 || groupSize > 5000) {
      return new Response(JSON.stringify({ error: "Invalid group size" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: inserted, error } = await supabase
      .from("dmc_inquiries")
      .insert({
        name: body.name.slice(0, 100),
        company: body.company?.slice(0, 120) || null,
        email: body.email.slice(0, 255),
        phone: body.phone?.slice(0, 40) || null,
        destination: body.destination.slice(0, 200),
        arrival: body.arrival,
        departure: body.departure || null,
        group_size: Math.round(groupSize),
        services: Array.isArray(body.services) ? body.services.slice(0, 20) : [],
        notes: body.notes?.slice(0, 1500) || null,
        attachment_path: body.attachmentPath || null,
        attachment_name: body.attachmentName || null,
      })
      .select("id")
      .single();

    if (error) throw error;

    let attachmentUrl: string | null = null;
    if (body.attachmentPath) {
      const { data: signed } = await supabase.storage
        .from("dmc-attachments")
        .createSignedUrl(body.attachmentPath, 60 * 60 * 24 * 30);
      attachmentUrl = signed?.signedUrl ?? null;
    }

    await notifyTeam(body, inserted.id, attachmentUrl);

    return new Response(JSON.stringify({ ok: true, id: inserted.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("submit-dmc-inquiry error", err);
    return new Response(JSON.stringify({ error: "Could not submit inquiry" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

async function notifyTeam(body: Payload, id: string, attachmentUrl: string | null) {
  try {
    const mod = await import("../_shared/transactional-email-templates/send-email.ts").catch(
      () => null,
    );
    if (!mod?.sendTemplateEmail) {
      console.log("Email templates not scaffolded yet; inquiry stored only", id);
      return;
    }
    await mod.sendTemplateEmail("dmc-inquiry-notification", "bookings@paradisegrouptravels.com", {
      templateData: {
        name: body.name,
        company: body.company,
        email: body.email,
        phone: body.phone,
        destination: body.destination,
        arrival: body.arrival,
        departure: body.departure,
        groupSize: body.groupSize,
        services: body.services,
        notes: body.notes,
        attachmentName: body.attachmentName,
        attachmentUrl,
      },
      idempotencyKey: `dmc-inquiry-${id}`,
    });
  } catch (err) {
    console.error("DMC notification email failed", err);
  }
}
