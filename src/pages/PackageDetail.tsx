import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { getPackage, packages } from "@/data/packages";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, MapPin, Tag, X } from "lucide-react";

const PackageDetail = () => {
  const { slug } = useParams();
  const pkg = getPackage(slug);

  if (!pkg) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background flex flex-col">
          <StaticNav />
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <h1 className="font-display text-3xl mb-4">Package not found</h1>
            <p className="font-sans text-muted-foreground mb-8">This itinerary may have been renamed or retired.</p>
            <Link to="/safari-journeys" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md">
              <ArrowLeft size={16} /> All Journeys
            </Link>
          </div>
          <SiteFooter />
        </div>
      </PageTransition>
    );
  }

  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img src={pkg.image} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
          <div className="relative h-full max-w-6xl mx-auto flex flex-col justify-end px-8 md:px-16 pb-14">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">{pkg.category}</span>
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-5">{pkg.name}</h1>
              <div className="flex flex-wrap gap-6 text-white/80 font-sans text-sm">
                <span className="flex items-center gap-2"><Clock size={15} /> {pkg.duration}</span>
                <span className="flex items-center gap-2"><MapPin size={15} /> {pkg.destination}</span>
                <span className="flex items-center gap-2"><Tag size={15} /> From {pkg.priceFrom}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-10">{pkg.summary}</p>

              <h2 className="font-display text-2xl mb-5">Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" /> {h}
                  </li>
                ))}
              </ul>

              <div id="itinerary" className="scroll-mt-28 mb-14">
                <div className="flex items-baseline justify-between mb-6">
                  <h2 className="font-display text-2xl md:text-3xl">Day-by-Day Itinerary</h2>
                  <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{pkg.itinerary.length} days</span>
                </div>

                <div className="relative border border-border/60 rounded-lg overflow-hidden">
                  {pkg.itinerary.map((day, i) => (
                    <div
                      key={day.day}
                      className={`flex gap-5 p-6 ${i % 2 === 1 ? "bg-sand-dark/40" : "bg-background"} ${
                        i !== pkg.itinerary.length - 1 ? "border-b border-border/60" : ""
                      }`}
                    >
                      <div className="flex flex-col items-center flex-shrink-0">
                        <span className="w-11 h-11 rounded-full bg-primary text-primary-foreground font-display text-lg flex items-center justify-center">
                          {i + 1}
                        </span>
                        {i !== pkg.itinerary.length - 1 && <span className="flex-1 w-px bg-border mt-3" />}
                      </div>
                      <div className="pt-1">
                        <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary">{day.day}</span>
                        <h3 className="font-display text-xl mt-1 mb-2">{day.title}</h3>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Clock size={15} className="text-primary" /> {pkg.duration}</span>
                  <span className="flex items-center gap-2"><MapPin size={15} className="text-primary" /> {pkg.destination}</span>
                  <span className="flex items-center gap-2"><Calendar size={15} className="text-primary" /> Best time: {pkg.bestTime}</span>
                </div>
              </div>

              <div id="inclusions" className="scroll-mt-28">
                <h2 className="font-display text-2xl md:text-3xl mb-6">Inclusions &amp; Exclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border border-primary/25 bg-primary/5 p-6">
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <Check size={18} className="text-primary" /> What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-sm text-muted-foreground">
                          <Check size={15} className="text-primary mt-0.5 flex-shrink-0" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-muted/40 p-6">
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <X size={18} className="text-muted-foreground" /> Not Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.excludes.map((i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-sm text-muted-foreground">
                          <X size={15} className="text-muted-foreground/60 mt-0.5 flex-shrink-0" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="font-sans text-xs text-muted-foreground mt-4">
                  Itineraries are flexible — days, lodges and inclusions can be tailored to your dates and group size.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 h-fit bg-sand-dark rounded-lg p-8">
              <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Price from</span>
              <div className="font-display text-3xl mb-6">{pkg.priceFrom}</div>

              <div className="space-y-4 mb-8 font-sans text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><Clock size={15} className="text-primary mt-0.5" /> {pkg.duration}</p>
                <p className="flex items-start gap-2"><MapPin size={15} className="text-primary mt-0.5" /> {pkg.destination}</p>
                <p className="flex items-start gap-2"><Calendar size={15} className="text-primary mt-0.5" /> {pkg.bestTime}</p>
              </div>

              <Link
                to="/book"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300 mb-3"
              >
                Get Your Quote <ArrowRight size={16} />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=254723045625"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/5 transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </aside>
          </div>
        </section>

        {/* Related */}
        <section className="py-20 px-8 md:px-16 bg-ocean-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl mb-10 text-center">Other Journeys You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/safari-journeys/${p.slug}`}
                  className="group rounded-lg overflow-hidden bg-background border border-border/60 hover:shadow-lg transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="font-sans text-xs text-muted-foreground">{p.duration} · From {p.priceFrom}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/safari-journeys" className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-primary">
                <ArrowLeft size={14} /> All Journeys
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </PageTransition>
  );
};

export default PackageDetail;
