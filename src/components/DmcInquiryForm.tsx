import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { whatsAppLink } from "@/components/WhatsAppButton";
import { supabase } from "@/integrations/supabase/client";
import { buildDmcMessage, setDmcDraft } from "@/lib/dmcDraft";
import { trackCta, trackFormSubmit } from "@/lib/analytics";
import { MessageCircle, Paperclip, Send, X } from "lucide-react";

const TEAM_EMAIL = "bookings@paradisegrouptravels.com";
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ACCEPTED =
  ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.jpg,.jpeg,.png,.heic";

const SERVICE_OPTIONS = [
  "Airport meet & greet / transfers",
  "Accommodation & lodge contracting",
  "Safari programme & guides",
  "Conference / event logistics",
  "Ground transport fleet",
  "VIP & protocol handling",
  "Excursions & activities",
  "Full turnkey ground programme",
];

const schema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z.string().trim().max(40).optional(),
  destination: z.string().trim().nonempty({ message: "Tell us the destination(s)" }).max(200),
  arrival: z.string().trim().nonempty({ message: "Add an arrival date" }).max(40),
  departure: z.string().trim().max(40).optional(),
  groupSize: z
    .string()
    .trim()
    .nonempty({ message: "Add the group size" })
    .refine((v) => Number(v) > 0 && Number(v) <= 5000, { message: "Enter a group size between 1 and 5000" }),
  services: z.array(z.string()).min(1, { message: "Select at least one required service" }),
  notes: z.string().trim().max(1500).optional(),
});

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  destination: "",
  arrival: "",
  departure: "",
  groupSize: "",
  notes: "",
};

export function DmcInquiryForm() {
  const [form, setForm] = useState(initial);
  const [services, setServices] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Keep the floating WhatsApp CTA in sync with what the visitor has typed.
  useEffect(() => {
    setDmcDraft({ ...form, services, attachmentName: file?.name });
  }, [form, services, file]);

  useEffect(() => () => setDmcDraft({}), []);

  const set = (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleService = (service: string, checked: boolean) =>
    setServices((prev) => (checked ? [...prev, service] : prev.filter((s) => s !== service)));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected && selected.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({ ...prev, file: "File must be 10MB or smaller" }));
      e.target.value = "";
      return;
    }
    setErrors((prev) => ({ ...prev, file: "" }));
    setFile(selected);
  };

  const clearFile = () => {
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const validate = () => {
    const result = schema.safeParse({ ...form, services });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return null;
    }
    setErrors({});
    return result.data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    setSending(true);

    try {
      let attachmentPath: string | undefined;
      if (file) {
        const safeName = file.name.replace(/[^\w.\-]+/g, "_").slice(-80);
        const path = `${crypto.randomUUID()}-${safeName}`;
        const { error: uploadError } = await supabase.storage
          .from("dmc-attachments")
          .upload(path, file, { contentType: file.type || "application/octet-stream" });
        if (uploadError) throw uploadError;
        attachmentPath = path;
      }

      const { error } = await supabase.functions.invoke("submit-dmc-inquiry", {
        body: { ...data, attachmentPath, attachmentName: file?.name },
      });
      if (error) throw error;

      trackFormSubmit("dmc_inquiry", {
        destination: data.destination,
        group_size: data.groupSize ?? "",
        services_count: services.length,
        has_attachment: Boolean(file),
      });

      toast({
        title: "Inquiry received",
        description: `Thank you ${data.name} — your brief is with our DMC team. We respond with a costed ground programme within 48 hours.`,
      });
      setForm(initial);
      setServices([]);
      clearFile();
    } catch (err) {
      console.error(err);
      toast({
        title: "We couldn't send that",
        description: `Please try again, or email us directly at ${TEAM_EMAIL}.`,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const handleWhatsApp = () => {
    const data = validate();
    if (!data) return;
    window.open(
      whatsAppLink(buildDmcMessage({ ...data, attachmentName: file?.name })),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const field = (
    id: keyof typeof initial,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div className="space-y-2">
      <label htmlFor={id} className="chapter-title text-xs block">
        {label}
      </label>
      <Input
        id={id}
        value={form[id]}
        onChange={set(id)}
        className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary"
        {...props}
      />
      {errors[id] && <p className="font-sans text-xs text-destructive">{errors[id]}</p>}
    </div>
  );

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 bg-background border border-border rounded-2xl p-6 md:p-10 shadow-soft"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {field("name", "Full name", { required: true, placeholder: "Your name" })}
        {field("company", "Company / agency", { placeholder: "Optional" })}
        {field("email", "Email", { type: "email", required: true, placeholder: "you@company.com" })}
        {field("phone", "Phone / WhatsApp", { type: "tel", placeholder: "+254 700 000 000" })}
      </div>

      {field("destination", "Destination(s)", {
        required: true,
        placeholder: "e.g. Maasai Mara, Nairobi, Zanzibar",
      })}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {field("arrival", "Arrival date", { type: "date", required: true })}
        {field("departure", "Departure date", { type: "date" })}
        {field("groupSize", "Group size (pax)", { type: "number", min: 1, required: true, placeholder: "24" })}
      </div>

      <div className="space-y-3">
        <span className="chapter-title text-xs block">Services required</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((service) => (
            <label
              key={service}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 cursor-pointer hover:border-primary/50 transition-colors"
            >
              <Checkbox
                checked={services.includes(service)}
                onCheckedChange={(checked) => toggleService(service, checked === true)}
                className="mt-0.5"
              />
              <span className="font-sans text-sm text-foreground leading-snug">{service}</span>
            </label>
          ))}
        </div>
        {errors.services && <p className="font-sans text-xs text-destructive">{errors.services}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="chapter-title text-xs block">
          Brief / additional notes
        </label>
        <Textarea
          id="notes"
          value={form.notes}
          onChange={set("notes")}
          placeholder="Programme objectives, budget guidance, accommodation level, special requirements..."
          className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary resize-none min-h-[130px]"
        />
        {errors.notes && <p className="font-sans text-xs text-destructive">{errors.notes}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="attachment" className="chapter-title text-xs block">
          Attach itinerary or requirements (optional)
        </label>
        <input
          ref={fileRef}
          id="attachment"
          type="file"
          accept={ACCEPTED}
          onChange={handleFile}
          className="block w-full font-sans text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:font-sans file:text-sm file:text-secondary-foreground hover:file:bg-secondary/80 cursor-pointer"
        />
        {file && (
          <div className="flex items-center gap-2 font-sans text-xs text-foreground">
            <Paperclip className="w-3.5 h-3.5 text-primary" />
            <span className="truncate">{file.name}</span>
            <button
              type="button"
              onClick={clearFile}
              aria-label="Remove attachment"
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        <p className="font-sans text-xs text-muted-foreground">
          PDF, Word, Excel, PowerPoint or image — up to 10MB.
        </p>
        {errors.file && <p className="font-sans text-xs text-destructive">{errors.file}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          disabled={sending}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md py-6 font-sans text-sm tracking-widest uppercase"
        >
          <Send className="w-4 h-4 mr-2" /> {sending ? "Sending..." : "Send inquiry to our team"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleWhatsApp}
          className="flex-1 rounded-md py-6 font-sans text-sm tracking-widest uppercase"
        >
          <MessageCircle className="w-4 h-4 mr-2" /> Send via WhatsApp
        </Button>
      </div>
      <p className="font-sans text-xs text-muted-foreground text-center">
        Your brief goes straight to {TEAM_EMAIL}. We respond with a costed ground programme within 48 hours.
      </p>
    </motion.form>
  );
}
