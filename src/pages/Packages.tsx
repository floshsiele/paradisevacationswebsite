import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { FaqBlock, faqPageJsonLd, type Faq } from "@/components/FaqBlock";
import { StickyCta } from "@/components/StickyCta";
import { packages, type TravelPackage } from "@/data/packages";
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
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
  },
  {
    key: "Educational",
    title: "International School Trips — Learning Beyond the Classroom",
    text: "Safe, enriching and expertly supervised trips for schools and universities — from wildlife conservation education in the Maasai Mara to international exchange tours — with safety protocols, group discounts, parental communication and 24/7 chaperone support.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=85",
  },
];

const assurances = [
  { icon: ShieldCheck, title: "IATA & KATA certified operator", text: "14 years in business, fully licensed and bonded. Your booking, payments and travel documents are handled by accredited professionals." },
  { icon: CreditCard, title: "Deposit now, pay in instalments", text: "Secure your dates with a deposit and settle the balance in scheduled instalments before departure." },
  { icon: Users, title: "Any package, tailored free", text: "Change the dates, the lodge, the group size or the route. Redesign and requoting costs you nothing." },
];

const faqs: Faq[] = [
  {
    question: "Can I change a package to suit my dates or budget?",
    answer:
      "Yes — every listed itinerary is a starting point. We routinely change lodges, extend or shorten nights, add beach extensions and rebuild routes around your dates and budget, and redesigning a package costs nothing.",
  },
  {
    question: "What is normally included in the price?",
    answer:
      "Each package page lists inclusions and exclusions in full. Typically the price covers accommodation, listed meals, park or entrance fees, transport with a driver-guide, and applicable taxes. International flights, visas, insurance, tips and personal spending are usually excluded unless stated.",
  },
  {
    question: "How do I secure a booking and can I pay in instalments?",
    answer:
      "A deposit confirms your dates and holds accommodation. The balance can be paid in scheduled instalments before departure, and corporate accounts can be invoiced on approved credit terms.",
  },
  {
    question: "Do you organise flights and visas as well?",
    answer:
      "Yes. We ticket domestic, regional and international flights, prepare and lodge visa applications, arrange travel insurance, and advise on entry and vaccination requirements for every destination we sell.",
  },
  {
    question: "What group sizes do you handle?",
    answer:
      "From solo travellers and honeymoon couples to families, 40-student school groups and corporate parties of several hundred. Vehicles, guides and coordinators scale with the group.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms depend on the suppliers in your itinerary and are stated in writing on your quotation before you pay anything. We will always tell you the deadlines that matter before you commit.",
  },
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
            faqPageJsonLd(faqs),
          ]}
        />
        <StaticNav />

        <PageHero
          eyebrow="Tour Packages"
          badge="IATA · KATA · TRA · TOSK certified · 14 years of trusted service"
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
                    {index === 0 && active === "All" && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground font-sans text-[11px] tracking-widest uppercase">
                        <Flame size={12} /> Bestseller
                      </span>
                    )}
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
                    <div className="mt-auto pt-5 border-t border-border flex items-end justify-between">
                      <div>
                        <div className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">From</div>
                        <div className="font-display text-lg text-primary">
                          {pkg.priceFrom.replace(" per person", "").replace(" per delegate", "").replace(" per student", "")}
                        </div>
                      </div>
                      <Link
                        to={`/packages/${pkg.slug}`}
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

        <FaqBlock faqs={faqs} eyebrow="Package FAQs" heading="Everything you'd ask before booking" />

        <CtaBand
          eyebrow="Tailored Trips"
          heading="Not seeing your exact trip? That's normal."
          text="Most of what we sell never appears on this page. Tell us the destination, dates, budget and group and we'll design something and price it within 24 hours."
          primaryLabel="Request a custom quote"
        />

        <SiteFooter />
        <StickyCta />
      </div>
    </PageTransition>
  );
};

export default Packages;
