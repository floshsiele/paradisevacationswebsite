import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqBlock, faqPageJsonLd, type Faq } from "@/components/FaqBlock";
import { StickyCta } from "@/components/StickyCta";
import { TeaBuyerForm } from "@/components/TeaBuyerForm";
import { Seo } from "@/components/Seo";
import { agritourismPackages } from "@/data/packages";
import { Stamp, Plane, Bus, Handshake, Users, CalendarCheck, Palmtree, Check, Leaf, Ship } from "lucide-react";
import teaGardens from "@/assets/tea-gardens-kericho.jpg";
import teaFactory from "@/assets/tea-factory-tour.jpg";
import teaCupping from "@/assets/tea-cupping-session.jpg";

const support = [
  { icon: Stamp, title: "Visa processing", text: "We handle your Kenya entry visa application and documentation." },
  { icon: Plane, title: "International & domestic flights", text: "We book your air tickets into Kenya and any domestic flights to tea regions." },
  { icon: Bus, title: "Factory-to-factory transport", text: "Private ground transport between accommodation and 10+ partner factories." },
  { icon: Users, title: "Direct introductions", text: "Meet production managers, sales teams and agronomists who control quality and pricing." },
  { icon: CalendarCheck, title: "Appointment scheduling", text: "Every meeting, factory slot and cupping session is confirmed before you land." },
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

const faqs: Faq[] = [
  {
    question: "Who are Kenya tea tourism trips designed for?",
    answer:
      "International tea buyers, importers, distributors, blenders and serious enthusiasts who want to inspect, cup and select Kenyan tea at source before committing to a purchase.",
  },
  {
    question: "How many tea factories will I visit?",
    answer:
      "We partner with 10+ factories across Kericho, Nandi, Bomet, Murang'a and the Rift Valley. Most buyers visit three to six factories in a single trip.",
  },
  {
    question: "Do you handle my visa and flights?",
    answer:
      "Yes. We prepare your Kenya entry visa, book international and domestic flights, and arrange private ground transport.",
  },
  {
    question: "Can you help with price negotiation?",
    answer:
      "We facilitate introductions, provide local market context and support price and supply discussions. The contract remains between you and the factory.",
  },
  {
    question: "Will I meet the team responsible for exporting my tea?",
    answer:
      "Yes. We arrange time with the factory's export and logistics team so you understand documentation, shipping timelines and customs processes.",
  },
  {
    question: "Can I add a Maasai Mara or coast getaway?",
    answer:
      "Yes — add an optional two-day Maasai Mara or Kenyan Coast vacation before your departure flight.",
  },
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
          faqPageJsonLd(faqs),
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

      {/* What it is + support */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-title text-xs mb-4 block">Farm to Cup</span>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Doors that are normally closed to the public
            </h2>
            <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated"
          >
            <img
              src={teaFactory}
              alt="International tea buyers touring a Kenyan tea factory production floor"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* End-to-end support */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">True End-to-End Buyer Support</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">We handle everything but the tasting</h2>
            <p className="font-sans text-muted-foreground text-lg">
              From visa to factory floor, our team becomes your on-ground partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-background rounded-xl p-6 border border-border shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated order-2 lg:order-1"
          >
            <img
              src={teaCupping}
              alt="Professional tea cupping session evaluating different grades of Kenyan tea"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="chapter-title text-xs mb-4 block">What's Included</span>
            <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">Everything in one costed programme</h2>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 px-6 md:px-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Tea Regions</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Where we take buyers</h2>
            <p className="font-sans text-muted-foreground text-lg">
              Five premier tea-growing regions, each with its own character, grades and processing strengths.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r, index) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-background rounded-xl p-6 border border-border shadow-soft"
              >
                <Leaf className="w-5 h-5 text-primary mb-3" strokeWidth={1.6} />
                <h3 className="font-display text-lg mb-2">{r.name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
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

      <FaqBlock faqs={faqs} eyebrow="Tea Tourism FAQs" heading="What buyers ask before they travel" tone="plain" />

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
