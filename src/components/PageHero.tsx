import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { trackCta } from "@/lib/analytics";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  badge?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  microcopy?: string;
  stats?: { value: string; label: string }[];
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  badge,
  primaryLabel = "Get a free quote in 24 hrs",
  primaryTo = "/packages#book",
  secondaryLabel,
  secondaryTo,
  microcopy = "No planning fees · No obligation · Itemised pricing",
  stats,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden flex items-end">
      <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-16 pt-36 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {badge && (
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="font-sans text-xs tracking-wider text-white/90">{badge}</span>
            </span>
          )}
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">{eyebrow}</span>
          <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">{title}</h1>
          <p className="font-sans text-lg text-white/90 max-w-2xl leading-relaxed">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              to={primaryTo}
              className="btn-primary-cta"
              onClick={() => trackCta(primaryLabel, { cta_location: "page_hero", destination: primaryTo })}
            >
              {primaryLabel} <ArrowRight size={16} />
            </Link>
            {secondaryLabel && secondaryTo ? (
              <Link
                to={secondaryTo}
                className="btn-ghost-cta"
                onClick={() => trackCta(secondaryLabel, { cta_location: "page_hero_secondary", destination: secondaryTo })}
              >
                {secondaryLabel}
              </Link>
            ) : (
              <a href="tel:+254726927081" className="btn-ghost-cta">
                <Phone size={16} /> Talk to a consultant
              </a>
            )}
          </div>

          <p className="font-sans text-xs text-white/70 mt-5">{microcopy}</p>

          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20 max-w-3xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl md:text-3xl text-white">{s.value}</div>
                  <div className="font-sans text-[11px] uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
