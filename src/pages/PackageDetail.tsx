import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { getPackage, packages } from "@/data/safari-journeys";
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
              <ArrowLeft size={16} /> All Packages
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

              <h2 className="font-display text-2xl mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6 mb-12">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-primary/30 pl-6 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                    <span className="font-sans text-xs tracking-widest uppercase text-primary">{day.day}</span>
                    <h3 className="font-display text-lg mt-1 mb-2">{day.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {pkg.includes.map((i) => (
                      <li key={i} className="flex items-start gap-2 font-sans text-sm text-muted-foreground">
                        <Check size={15} className="text-primary mt-0.5 flex-shrink-0" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {pkg.excludes.map((i) => (
                      <li key={i} className="flex items-start gap-2 font-sans text-sm text-muted-foreground">
                        <X size={15} className="text-muted-foreground/60 mt-0.5 flex-shrink-0" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="font-display text-2xl md:text-3xl mb-10 text-center">Other Packages You May Like</h2>
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
                <ArrowLeft size={14} /> All Packages
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
