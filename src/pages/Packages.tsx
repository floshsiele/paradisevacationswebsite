import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { packages, type TravelPackage } from "@/data/packages";
import { Seo } from "@/components/Seo";
import { ArrowRight, Clock, MapPin } from "lucide-react";

type Filter = "All" | TravelPackage["category"];

const filters: { key: Filter; label: string }[] = [
  { key: "All", label: "All Packages" },
  { key: "Inbound", label: "Inbound Tours" },
  { key: "Outbound", label: "Outbound Tours" },
  { key: "Educational", label: "Educational Trips" },
  { key: "Corporate", label: "Corporate" },
];

const categoryBlurbs: { key: TravelPackage["category"]; title: string; text: string; image: string }[] = [
  {
    key: "Inbound",
    title: "Inbound Tours",
    text: "Safaris, beach holidays and cultural journeys inside Kenya and East Africa for visitors and residents — Masai Mara, Amboseli, Diani and beyond, with licensed guides and 4x4 safari vehicles.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=85",
  },
  {
    key: "Outbound",
    title: "Outbound Tours",
    text: "Holidays abroad for Kenyan travellers — Dubai, Zanzibar, Mauritius, Europe and Asia — with flights, visas, hotels and transfers arranged end to end.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
  },
  {
    key: "Educational",
    title: "International Educational Trips",
    text: "Supervised study tours for schools, colleges and universities: campus visits, museum and STEM workshops, cultural immersion, full risk assessment and teacher support throughout.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=85",
  },
];

const Packages = () => {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Seo
          title="Travel Packages — Inbound, Outbound & Educational Trips | Paradise Vacations"
          description="Kenya safari and beach inbound tours, outbound holidays to Dubai and Zanzibar, and international educational trips for schools — day-by-day itineraries, inclusions and prices."
          path="/packages"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Travel packages",
            itemListElement: packages.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `/packages/${p.slug}`,
            })),
          }}
        />
        <StaticNav />

        <section className="pt-32 pb-12 px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="chapter-title text-xs mb-4 block">Packages</span>
            <h1 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Inbound Tours, Outbound Tours &amp; Educational Trips
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              Ready-made itineraries with clear pricing and day-by-day detail — every package can be tailored to your dates, group size and budget.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-6 py-2 rounded-full border font-sans text-sm tracking-widest uppercase transition-colors ${
                  active === f.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:text-primary hover:border-primary/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Category overview */}
        <section className="pb-16 px-8 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryBlurbs.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className="group text-left rounded-lg overflow-hidden border border-border/60 bg-background hover:shadow-lg transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.title} with Paradise Vacations Kenya`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">{c.title}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
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
                <Link to={`/packages/${pkg.slug}`} className="relative aspect-[16/10] overflow-hidden">
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
                  <h3 className="font-display text-xl mb-2">
                    <Link to={`/packages/${pkg.slug}`} className="hover:text-primary transition-colors">
                      {pkg.name}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-4 text-muted-foreground font-sans text-xs mb-4">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {pkg.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {pkg.destination.split(",")[0]}</span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{pkg.summary}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-sans text-sm text-foreground">
                      From <strong>{pkg.priceFrom.replace(" per person", "").replace(" per delegate", "").replace(" per student", "")}</strong>
                    </span>
                    <Link
                      to={`/packages/${pkg.slug}`}
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
