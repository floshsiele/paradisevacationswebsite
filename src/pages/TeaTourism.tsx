import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { StickyCta } from "@/components/StickyCta";
import { TeaBuyerForm } from "@/components/TeaBuyerForm";
import { Seo } from "@/components/Seo";
import { agritourismPackages } from "@/data/packages";
import { Stamp, Plane, Bus, Handshake, Users, CalendarCheck, Palmtree, Check, Leaf, Ship } from "lucide-react";
import teaGardens from "@/assets/tea-gardens-kericho.jpg";
import teaFactory from "@/assets/tea-factory-tour.jpg";
import teaCupping from "@/assets/tea-cupping-session.jpg";

const support = [
  { icon: CalendarCheck, title: "Appointment scheduling", text: "Every meeting, factory slot and cupping session is confirmed before you land." },
  { icon: Stamp, title: "Visa processing", text: "We handle your Kenya entry visa application and documentation." },
  { icon: Plane, title: "International & domestic flights", text: "We book your air tickets into Kenya and any domestic flights to tea regions." },
  { icon: Bus, title: "Factory-to-factory transport", text: "Private ground transport between accommodation and 10+ partner factories." },
  { icon: Users, title: "Direct introductions", text: "Meet production managers, sales teams and agronomists who control quality and pricing." },
  { icon: Ship, title: "Meet the export team", text: "Understand shipping timelines, documentation and logistics before you commit." },
  { icon: Handshake, title: "Negotiation support", text: "Local context and relationships to help you negotiate with confidence." },
  { icon: Palmtree, title: "Optional 2-day reward getaway", text: "Add a Maasai Mara or Kenyan Coast extension before you fly home." },
];

const includes = [
  "Visa processing and travel documentation support",
  "International and domestic flight bookings",
  "Access to 10+ partner tea factories across Kericho, Nandi, Bomet, Murang'a and the Rift Valley",
  "Factory floor tours, tea cupping and tasting sessions",
  "Meet-the-producer and export-team introductions",
  "Pre-confirmed appointment scheduling",
  "Private ground transport and comfortable accommodation",
  "Optional add-ons: 2-day Maasai Mara or coast getaway, wildlife excursions and Nairobi city tours",
];

const regions = [
  { name: "Kericho", text: "Kenya's tea heartland — large estates and world-class processing infrastructure." },
  { name: "Nandi", text: "High-altitude gardens producing bright, brisk liquors prized by blenders." },
  { name: "Bomet", text: "Fertile highland zone with fast-growing smallholder factories and competitive black CTC." },
  { name: "Murang'a", text: "Rich volcanic soils and cooperative-run factories with excellent traceability." },
  { name: "Rift Valley", text: "Diverse elevations offering everything from orthodox specialty to purple tea." },
];

const TeaTourism = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Kenya Tea Tourism | Tea Buyer Tours & Factory Visits – Paradise Vacations Kenya"
        description="Exclusive Kenya tea tourism for international buyers — visa processing, flights, factory access to 10+ partner factories, negotiation support, and an optional Maasai Mara or coast getaway."
        path="/tea-tourism"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Kenya Tea Tourism — Tea Buyer Tours",
            serviceType: "Tea sourcing tours and factory visits for international buyers",
            areaServed: "Kenya",
            url: "/tea-tourism",
            description:
              "Curated tea buyer tours in Kenya with visa processing, flights, private transport, access to 10+ partner tea factories, cupping sessions, negotiation support and an optional 2-day Maasai Mara or coast getaway.",
            provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
            audience: { "@type": "BusinessAudience", name: "Tea buyers, importers and distributors" },
          },
        ]}
      />
      <StaticNav />

      <PageHero
        eyebrow="Tea Tourism"
        badge="Exclusive access to 10+ partner tea factories"
        title={<>Source Kenya's Finest Tea, Straight from the Source</>}
        subtitle="Curated, end-to-end sourcing journeys for international tea buyers, importers and distributors — see, smell, taste and select Kenyan tea before you buy."
        image={teaGardens}
        imageAlt="Tea pluckers harvesting leaf on a Kenyan highland tea estate at sunrise"
        primaryLabel="Book an exclusive tea buyer tour"
        primaryTo="/tea-tourism#tea-enquiry"
        secondaryLabel="Enquire about factory partnerships"
        secondaryTo="/tea-tourism#tea-enquiry"
        microcopy="Visa · Flights · Factory access · Negotiation support · Optional 2-day getaway"
        stats={[
          { value: "10+", label: "Partner factories" },
          { value: "5", label: "Tea regions" },
          { value: "14 yrs", label: "In operation" },
          { value: "2 days", label: "Optional getaway" },
        ]}
      />

      {/* Magazine layout: read left column top-to-bottom, then right column top-to-bottom */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Buyer Support &amp; Regions</span>
            <h2 className="font-display text-3xl md:text-4xl mb-3">We handle everything but the tasting</h2>
            <p className="font-sans text-muted-foreground">
              From visa to factory floor, across five Kenyan tea regions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT COLUMN — top to bottom */}
            <div className="space-y-10">
              {/* Farm to Cup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-soft"
              >
                <span className="chapter-title text-xs mb-4 block">Farm to Cup</span>
                <h3 className="font-display text-2xl md:text-3xl mb-5 leading-tight">
                  Doors that are normally closed to the public
                </h3>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Kenya is one of the world's leading tea producers. Our Tea Tourism experiences give international buyers,
                    importers and distributors direct, curated access to the source.
                  </p>
                  <p>
                    Through partnerships with 10+ tea factories across Kericho, Nandi, Bomet, Murang'a and the Rift Valley,
                    you get behind-the-scenes access to production floors, expert-led cupping sessions, and direct conversations
                    with factory management, agronomists and the export team who will handle your shipment.
                  </p>
                </div>
              </motion.div>

              {/* Support list */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-soft"
              >
                <h3 className="font-display text-xl mb-5">True end-to-end support</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {support.map((s) => (
                    <div key={s.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <s.icon className="w-4 h-4 text-primary" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h4 className="font-display text-sm">{s.title}</h4>
                        <p className="font-sans text-xs text-muted-foreground leading-snug">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What's included */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-soft"
              >
                <span className="chapter-title text-xs mb-4 block">What's Included</span>
                <h3 className="font-display text-2xl md:text-3xl mb-5 leading-tight">Everything in one costed programme</h3>
                <ul className="space-y-2.5">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="font-sans text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* RIGHT COLUMN — top to bottom */}
            <div className="space-y-10">
              {/* Factory image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated"
              >
                <img
                  src={teaFactory}
                  alt="International tea buyers touring a Kenyan tea factory production floor"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Regions list */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-soft"
              >
                <h3 className="font-display text-xl mb-5">Where we take buyers</h3>
                <ul className="space-y-3">
                  {regions.map((r) => (
                    <li key={r.name} className="flex items-start gap-3">
                      <Leaf className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.6} />
                      <div>
                        <span className="font-display text-sm">{r.name}</span>
                        <span className="font-sans text-xs text-muted-foreground leading-snug block">{r.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Cupping image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated"
              >
                <img
                  src={teaCupping}
                  alt="Professional tea cupping session evaluating different grades of Kenyan tea"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tea, coffee & sugar tour packages */}
      <section id="tea-packages" className="py-20 px-6 md:px-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Tea, Coffee &amp; Sugar Tours</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Ready-made agritourism packages</h2>
            <p className="font-sans text-muted-foreground text-lg">
              Prefer a set itinerary? These fully costed tours run through Limuru, Kiambu and the Kericho highlands — and can be tailored to your dates and group size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agritourismPackages.map((pkg, index) => (
              <motion.article
                key={pkg.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-soft flex flex-col"
              >
                <Link to={`/packages/${pkg.slug}`} className="block aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {pkg.duration} · {pkg.destination}
                  </p>
                  <h3 className="font-display text-xl mb-3">
                    <Link to={`/packages/${pkg.slug}`} className="hover:text-primary transition-colors">
                      {pkg.name}
                    </Link>
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{pkg.summary}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-display text-primary">{pkg.priceFrom}</span>
                    <Link
                      to={`/packages/${pkg.slug}`}
                      className="font-sans text-sm text-primary underline underline-offset-4"
                    >
                      View itinerary
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="tea-enquiry" className="py-20 px-6 md:px-16 bg-ocean-light scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="chapter-title text-xs mb-4 block">Buyer Enquiry</span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Book an exclusive tea buyer tour</h2>
          <p className="font-sans text-muted-foreground text-lg">
            Tell us your company, the tea you're looking for and your sourcing volume. Our tea desk replies within 24 hours with a draft buyer itinerary.
          </p>
        </div>
        <TeaBuyerForm />
      </section>


      <CtaBand
        eyebrow="Factory Partnerships"
        heading="Are you a tea factory or estate? Let's talk."
        text="We're always expanding our network of partner factories across Kenya's tea-growing regions. If you'd like qualified international buyers on your production floor, get in touch with our tea desk."
        primaryLabel="Enquire about factory partnerships"
        primaryTo="/tea-tourism#tea-enquiry"
        secondary={{ label: "Talk to our team", to: "/contact" }}
        tone="dark"
      />

      <SiteFooter />
      <StickyCta />
    </div>
  </PageTransition>
);

export default TeaTourism;
