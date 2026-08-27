import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials({
  heading = "What Our Clients Say",
  eyebrow = "Social Proof",
  intro = "Corporates, schools and families who came once — and kept coming back.",
  limit = 6,
}: {
  heading?: string;
  eyebrow?: string;
  intro?: string;
  limit?: number;
}) {
  return (
    <section className="py-20 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="chapter-title text-xs mb-4 block">{eyebrow}</span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">{heading}</h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">{intro}</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-sans text-sm text-muted-foreground">
              4.9/5 average from 600+ trips arranged
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, limit).map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative bg-card border border-border rounded-xl p-7 shadow-soft hover:shadow-elevated transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <blockquote className="font-sans text-sm text-foreground/90 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-sans text-sm font-semibold">{t.name}</div>
                <div className="font-sans text-xs text-muted-foreground">
                  {t.role} · {t.location}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
