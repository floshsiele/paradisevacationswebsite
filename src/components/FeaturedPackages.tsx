import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Flame } from "lucide-react";
import { packages } from "@/data/packages";

const featuredSlugs = ["masai-mara-safari", "dubai-city-break", "diani-beach-escape", "uk-educational-trip"];

export function FeaturedPackages() {
  const featured = featuredSlugs
    .map((slug) => packages.find((p) => p.slug === slug))
    .filter(Boolean) as typeof packages;

  return (
    <section className="py-20 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="chapter-title text-xs mb-4 block">Most Booked This Season</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Journeys people book twice</h2>
            <p className="font-sans text-muted-foreground text-lg">
              Fixed departures with published prices, full itineraries and no hidden extras.
            </p>
          </div>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-primary link-underline shrink-0"
          >
            View all packages <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, index) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <Link to={`/packages/${p.slug}`} className="block h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-accent text-accent-foreground text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {index === 0 ? <Flame size={12} /> : null}
                    {index === 0 ? "Bestseller" : p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans mb-4">
                    <span className="inline-flex items-center gap-1"><Clock size={13} /> {p.duration}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={13} /> {p.location}</span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                    {p.summary}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">From</div>
                      <div className="font-display text-lg text-primary">{p.priceFrom}</div>
                    </div>
                    <ArrowRight size={18} className="text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
