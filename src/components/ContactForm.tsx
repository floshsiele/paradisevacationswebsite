import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll be in touch soon.",
    });

    setFormData({ name: "", email: "", weddingDate: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="chapter-title text-xs block">
            Your Name
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-serif text-lg focus-visible:ring-0 focus-visible:border-accent transition-colors"
            placeholder="How should I address you?"
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
            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-serif text-lg focus-visible:ring-0 focus-visible:border-accent transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="weddingDate" className="chapter-title text-xs block">
            Wedding Date (if known)
          </label>
          <Input
            id="weddingDate"
            type="text"
            value={formData.weddingDate}
            onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-serif text-lg focus-visible:ring-0 focus-visible:border-accent transition-colors"
            placeholder="Month, Year or exact date"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="chapter-title text-xs block">
            Your Story
          </label>
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 font-serif text-lg focus-visible:ring-0 focus-visible:border-accent transition-colors resize-none min-h-[120px]"
            placeholder="Tell me a little about yourselves and your vision for the day..."
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-transparent hover:bg-accent/10 text-foreground border border-foreground/20 hover:border-accent rounded-none py-6 font-display text-sm tracking-widest uppercase transition-all duration-300"
      >
        {isSubmitting ? "Sending..." : "Begin the Conversation"}
      </Button>
    </motion.form>
  );
}