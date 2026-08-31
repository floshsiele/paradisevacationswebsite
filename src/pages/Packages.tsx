import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trackPackageCta } from "@/lib/analytics";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { QuoteSection } from "@/components/QuoteSection";
import { StickyCta } from "@/components/StickyCta";
import { mainPackages as packages, type TravelPackage } from "@/data/packages";
import { Seo } from "@/components/Seo";
import { ArrowRight, Clock, MapPin, Flame, ShieldCheck, CreditCard, Users } from "lucide-react";
import { photos } from "@/assets/photos";

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
    title: "Inbound Tours — Discover the Magic of Kenya",
    text: "From the Great Migration in the Maasai Mara to the white-sand beaches of Diani and Watamu, Amboseli's elephants beneath Kilimanjaro and the Great Rift Valley's lakes — park permits, licensed guides, curated itineraries and accommodation from budget camps to luxury lodges, all handled for you.",
    image: photos.safariConvoy,
  },
  {
    key: "Outbound",
    title: "Outbound Tours — Kenya to the World",
    text: "Dreaming of Dubai, Bali, Thailand, Europe or the Caribbean? Fully managed international holidays — flights, visas, accommodation, guided excursions and travel insurance wrapped into one seamless package for honeymoons, group getaways and solo bucket-list adventures.",
    image: photos.tripPlanning,
  },
  {
    key: "Educational",
    title: "International School Trips — Learning Beyond the Classroom",
    text: "Safe, enriching and expertly supervised trips for schools and universities — from wildlife conservation education in the Maasai Mara to international exchange tours — with safety protocols, group discounts, parental communication and 24/7 chaperone support.",
    image: photos.groupPlanning,
  },
];

const assurances = [
  { icon: ShieldCheck, title: "Fully licensed & accredited operator", text: "14 years in business, fully licensed and bonded. Your booking, payments and travel documents are handled by certified travel professionals." },
  { icon: CreditCard, title: "Deposit now, pay in instalments", text: "Secure your dates with a deposit and settle the balance in scheduled instalments before departure." },
  { icon: Users, title: "Any package, tailored free", text: "Change the dates, the lodge, the group size or the route. Redesign and requoting costs you nothing." },
];

const Packages = () => {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Seo
          title="Tour Packages Kenya | Inbound, Outbound & School Trips – Paradise Vacations Kenya"
          description="Discover unforgettable tour packages with Paradise Vacations Kenya — Kenya safaris, inbound and outbound tours, and international school trips designed for adventure, education, and discovery."
          path="/packages"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Travel packages",
              itemListElement: packages.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.name,
                url: `/packages/${p.slug}`,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [...homeFaqs, ...safariFaqs].map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]}
        />
        <StaticNav />

        <PageHero
          eyebrow="Tour Packages"
          badge="14 years of trusted, fully accredited service"
          title={<>Tour Packages — Experience the World, Starting with Kenya</>}
          subtitle="We don't just book trips — we design experiences. Inbound safaris and beach escapes, outbound holidays and international school trips, each with a day-by-day itinerary, honest inclusions and a from-price you can budget against."
          image={photos.dunesLamu}
          imageAlt="Elephants on the Kenyan plains with Mount Kilimanjaro behind"
          primaryLabel="Get a tailored quote"
          secondaryLabel="Corporate & group travel"
          secondaryTo="/corporate-travel"
          microcopy="Deposit to secure · Instalments available · Free redesign"
          stats={[
            { value: "14 yrs", label: "In operation" },
            { value: "4.9/5", label: "Client rating" },
            { value: "60%+", label: "Repeat travellers" },
            { value: "24/7", label: "On-trip support" },
          ]}
        />

        <TrustBar />

        {/* Category overview */}
        <section className="py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="chapter-title text-xs mb-4 block">Choose Your Style</span>
              <h2 className="font-display text-3xl md:text-5xl mb-4">Three ways people travel with us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categoryBlurbs.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className="group text-left rounded-xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
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
                    <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{c.text}</p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-primary">
                      Show these trips <ArrowRight size={14} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-center font-sans text-sm text-muted-foreground mt-10 max-w-3xl mx-auto">
              Curious about Kenya's tea country? Our{" "}
              <Link to="/tea-tourism" className="text-primary underline underline-offset-4">
                Tea Tourism experiences
              </Link>{" "}
              take you into the highland estates and factories of Kericho, Nandi and beyond — for buyers and curious
              travellers alike.
            </p>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="pb-20 px-6 md:px-16 bg-sand-dark pt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`px-6 py-2 rounded-full border font-sans text-sm tracking-widest uppercase transition-colors ${
                    active === f.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border bg-background text-foreground/70 hover:text-primary hover:border-primary/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((pkg, index) => (
                <motion.article
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group flex flex-col rounded-xl overflow-hidden border border-border bg-background shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
                >
                  <Link
                    to={`/packages/${pkg.slug}`}
                    onClick={() => trackPackageCta(pkg.slug, pkg.name, { cta_label: "Card image", cta_location: "packages_grid" })}
                    className="relative aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 font-sans text-xs tracking-widest uppercase text-primary">
                      {pkg.category}
                    </span>
                    {index === 0 && active === "All" && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground font-sans text-[11px] tracking-widest uppercase">
                        <Flame size={12} /> Bestseller
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-xl mb-2">
                      <Link
                        to={`/packages/${pkg.slug}`}
                        onClick={() => trackPackageCta(pkg.slug, pkg.name, { cta_label: "Card title", cta_location: "packages_grid" })}
                        className="hover:text-primary transition-colors"
                      >
                        {pkg.name}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground font-sans text-xs mb-4">
                      <span className="flex items-center gap-1.5"><Clock size={13} /> {pkg.duration}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={13} /> {pkg.destination.split(",")[0]}</span>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{pkg.summary}</p>
                    <div className="mt-auto pt-5 border-t border-border flex items-end justify-between">
                      <div>
                        <div className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">From</div>
                        <div className="font-display text-lg text-primary">
                          {pkg.priceFrom.replace(" per person", "").replace(" per delegate", "").replace(" per student", "")}
                        </div>
                      </div>
                      <Link
                        to={`/packages/${pkg.slug}`}
                        onClick={() => trackPackageCta(pkg.slug, pkg.name, { cta_label: "View trip", cta_location: "packages_grid" })}
                        className="inline-flex items-center gap-1.5 font-sans text-sm tracking-widest uppercase text-primary hover:gap-3 transition-all"
                      >
                        View trip <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Assurances */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="chapter-title text-xs mb-4 block">Book With Confidence</span>
              <h2 className="font-display text-3xl md:text-5xl">The small print, said out loud</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {assurances.map((a, index) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-card border border-border rounded-xl p-7 shadow-soft"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <a.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-xl mb-3">{a.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials
          eyebrow="Traveller Reviews"
          heading="They booked once. Then they booked again."
          intro="Families, honeymooners, schools and corporate groups on our packages."
        />

        <QuoteSection />


        <SiteFooter />
        <StickyCta />
      </div>
    </PageTransition>
  );
};

export default Packages;
