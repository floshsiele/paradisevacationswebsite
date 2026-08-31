import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit } from "@/lib/analytics";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    trackFormSubmit("quote_request", {
      destination: formData.destination,
      travel_date: formData.travelDate,
    });

    toast({
      title: "Quote request received",
      description: "Thank you for reaching out. Our travel consultants will be in touch soon.",
    });

    setFormData({ name: "", email: "", phone: "", destination: "", travelDate: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="chapter-title text-xs block">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="chapter-title text-xs block">
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="chapter-title text-xs block">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary"
            placeholder="+254 700 000 000"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="destination" className="chapter-title text-xs block">
            Destination
          </label>
          <Input
            id="destination"
            type="text"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary"
            placeholder="Where would you like to go?"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="travelDate" className="chapter-title text-xs block">
          Preferred Travel Date
        </label>
        <Input
          id="travelDate"
          type="text"
          value={formData.travelDate}
          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
          className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary"
          placeholder="Month, Year or exact date"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="chapter-title text-xs block">
          Your Travel Request
        </label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-background border-border rounded-md px-4 py-3 font-sans focus-visible:ring-primary resize-none min-h-[140px]"
          placeholder="Tell us about your trip, number of travelers, interests..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md py-6 font-sans text-sm tracking-widest uppercase transition-all duration-300"
      >
        {isSubmitting ? "Sending..." : "Request Your Quote"}
      </Button>
    </motion.form>
  );
}
