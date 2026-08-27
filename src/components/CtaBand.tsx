import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBand({
  eyebrow = "Start Here",
  heading,
  text,
  primaryLabel = "Request my free quote",
  primaryTo = "/book",
  secondary,
  tone = "light",
}: {
  eyebrow?: string;
  heading: string;
  text: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondary?: { label: string; to: string };
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section className={`py-20 px-6 md:px-16 ${dark ? "bg-foreground text-background" : "bg-ocean-light"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={`chapter-title text-xs mb-4 block ${dark ? "text-accent" : ""}`}>{eyebrow}</span>
          <h2 className="font-display text-3xl md:text-5xl mb-5">{heading}</h2>
          <p className={`font-sans text-lg mb-9 ${dark ? "text-background/70" : "text-muted-foreground"}`}>{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryTo} className="btn-primary-cta">
              {primaryLabel} <ArrowRight size={16} />
            </Link>
            {secondary ? (
              <Link
                to={secondary.to}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border font-sans text-sm tracking-widest uppercase transition-colors ${
                  dark
                    ? "border-background/40 text-background hover:bg-background/10"
                    : "border-primary/30 text-primary hover:bg-primary/5"
                }`}
              >
                {secondary.label}
              </Link>
            ) : (
              <a
                href="tel:+254726927081"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border font-sans text-sm tracking-widest uppercase transition-colors ${
                  dark
                    ? "border-background/40 text-background hover:bg-background/10"
                    : "border-primary/30 text-primary hover:bg-primary/5"
                }`}
              >
                <Phone size={16} /> 0726 927 081
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
