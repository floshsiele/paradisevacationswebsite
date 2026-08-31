import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { whatsAppLink } from "@/components/WhatsAppButton";
import { trackFormSubmit, trackCta } from "@/lib/analytics";
import { MessageCircle, Send } from "lucide-react";

const TEAM_EMAIL = "tours@paradisegrouptravels.com";

const TEA_TYPES = [
  "Black CTC",
  "Black orthodox",
  "Green tea",
  "Purple tea",
  "White / specialty",
  "Single-estate selections",
  "Organic / certified",
  "Not sure yet — advise me",
];

const schema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  company: z.string().trim().nonempty({ message: "Please enter your company name" }).max(120),
  country: z.string().trim().nonempty({ message: "Which country are you travelling from?" }).max(80),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z.string().trim().max(40).optional(),
  volume: z.string().trim().nonempty({ message: "Tell us your sourcing volume or intent" }).max(160),
  travelWindow: z.string().trim().max(80).optional(),
  visitors: z.string().trim().max(20).optional(),
  notes: z.string().trim().max(1500).optional(),
  teaTypes: z.array(z.string()).min(1, { message: "Select at least one tea type of interest" }),
});

const initial = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  volume: "",
  travelWindow: "",
  visitors: "",
  notes: "",
};

type Data = z.infer<typeof schema>;

const buildMessage = (d: Data) =>
  [
    "Hello Paradise Vacations, I'd like to arrange a Kenya tea buyer tour.",
    `Name: ${d.name}`,
    `Company: ${d.company}`,
    `Country: ${d.country}`,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : "",
    `Tea types of interest: ${d.teaTypes.join(", ")}`,
    `Sourcing volume / intent: ${d.volume}`,
    d.travelWindow ? `Preferred travel window: ${d.travelWindow}` : "",
    d.visitors ? `Number of travellers: ${d.visitors}` : "",
    d.notes ? `Notes: ${d.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

export function TeaBuyerForm() {
  const [form, setForm] = useState(initial);
  const [teaTypes, setTeaTypes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const set = (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleType = (type: string, checked: boolean) =>
    setTeaTypes((prev) => (checked ? [...prev, type] : prev.filter((t) => t !== type)));

  const validate = (): Data | null => {
    const result = schema.safeParse({ ...form, teaTypes });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    const subject = `Tea buyer tour enquiry — ${data.company} (${data.country})`;
    window.location.href = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildMessage(data),
    )}`;

    trackFormSubmit("tea_buyer_enquiry", {
      country: data.country,
      tea_types: data.teaTypes.join("|"),
      volume: data.volume,
    });

    toast({
      title: "Enquiry ready to send",
      description: `Your email to ${TEAM_EMAIL} is prefilled — send it and our tea desk replies within 24 hours.`,
    });
  };

  const handleWhatsApp = () => {
    const data = validate();
    if (!data) return;
    trackCta("Tea buyer enquiry via WhatsApp", { cta_location: "tea_buyer_form" });
    window.open(whatsAppLink(buildMessage(data)), "_blank", "noopener,noreferrer");
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
        {field("company", "Company name", { required: true, placeholder: "Your company / brand" })}
        {field("email", "Business email", { type: "email", required: true, placeholder: "you@company.com" })}
        {field("phone", "Phone / WhatsApp", { type: "tel", placeholder: "+1 555 000 0000" })}
        {field("country", "Country you're travelling from", { required: true, placeholder: "e.g. United Arab Emirates" })}
        {field("travelWindow", "Preferred travel window", { placeholder: "e.g. March 2027" })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {field("volume", "Sourcing volume / intent", {
          required: true,
          placeholder: "e.g. 2 containers per quarter, or exploratory",
        })}
        {field("visitors", "Number of travellers", { type: "number", min: 1, placeholder: "2" })}
      </div>

      <div className="space-y-3">
        <span className="chapter-title text-xs block">Tea type of interest</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TEA_TYPES.map((type) => (
            <label
              key={type}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 cursor-pointer hover:border-primary/50 transition-colors"
            >
              <Checkbox
                checked={teaTypes.includes(type)}
                onCheckedChange={(checked) => toggleType(type, checked === true)}
                className="mt-0.5"
              />
              <span className="font-sans text-sm text-foreground leading-snug">{type}</span>
            </label>
          ))}
        </div>
        {errors.teaTypes && <p className="font-sans text-xs text-destructive">{errors.teaTypes}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="chapter-title text-xs block">
          Tell us about your sourcing goals (optional)
        </label>
        <Textarea
          id="notes"
          value={form.notes}
          onChange={set("notes")}
          placeholder="Regions you'd like to visit, grades and certifications required, packaging needs, whether you'd like the 2-day Maasai Mara or coast getaway..."
          className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary resize-none min-h-[130px]"
        />
        {errors.notes && <p className="font-sans text-xs text-destructive">{errors.notes}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md py-6 font-sans text-sm tracking-widest uppercase"
        >
          <Send className="w-4 h-4 mr-2" /> Send buyer enquiry
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
        Enquiries reach our tea desk at {TEAM_EMAIL}. We reply within 24 hours with a draft buyer itinerary.
      </p>
    </motion.form>
  );
}
