import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { packages } from "@/data/safari-journeys";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const filters = ["All", "Safari", "Beach", "Outbound", "Corporate"] as const;

const Packages = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />

        <section className="pt-32 pb-12 px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="chapter-title text-xs mb-4 block">Travel Packages</span>
            <h1 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Itineraries Ready When You Are
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              Hand-built safari, beach and outbound packages with clear pricing and day-by-day detail. Every itinerary can be tailored to your dates and group size.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-2 rounded-full border font-sans text-sm tracking-widest uppercase transition-colors ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:text-primary hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <section className="pb-24 px-8 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((pkg, index) => (
              <motion.article
                key={pkg.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group flex flex-col rounded-lg overflow-hidden border border-border/60 bg-background hover:shadow-lg transition-all duration-500"
              >
                <Link to={`/safari-journeys/${pkg.slug}`} className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 font-sans text-xs tracking-widest uppercase text-primary">
                    {pkg.category}
                  </span>
                </Link>

                <div className="flex flex-col flex-1 p-6">
                  <h2 className="font-display text-xl mb-2">
                    <Link to={`/safari-journeys/${pkg.slug}`} className="hover:text-primary transition-colors">
                      {pkg.name}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap gap-4 text-muted-foreground font-sans text-xs mb-4">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {pkg.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {pkg.destination.split(",")[0]}</span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{pkg.summary}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-sans text-sm text-foreground">From <strong>{pkg.priceFrom.replace(" per person", "").replace(" per delegate", "")}</strong></span>
                    <Link
                      to={`/safari-journeys/${pkg.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-sm tracking-widest uppercase text-primary hover:gap-3 transition-all"
                    >
                      Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </PageTransition>
  );
};

export default Packages;
