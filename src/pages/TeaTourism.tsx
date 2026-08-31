import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { CtaBand } from "@/components/CtaBand";
import { FaqBlock, faqPageJsonLd, type Faq } from "@/components/FaqBlock";
import { StickyCta } from "@/components/StickyCta";
import { TeaBuyerForm } from "@/components/TeaBuyerForm";
import { Seo } from "@/components/Seo";
import {
  Stamp,
  Plane,
  Bus,
  Handshake,
  Users,
  CalendarCheck,
  Palmtree,
  Check,
  Factory,
  Leaf,
  BadgeCheck,
  Ship,
} from "lucide-react";
import teaGardens from "@/assets/tea-gardens-kericho.jpg";
import teaFactory from "@/assets/tea-factory-tour.jpg";
import teaCupping from "@/assets/tea-cupping-session.jpg";

const support = [
  {
    icon: Stamp,
    title: "Visa processing",
    text: "We handle your Kenya entry visa application and documentation, so you arrive without delays or paperwork stress.",
  },
  {
    icon: Plane,
    title: "International & domestic flights",
    text: "We book your air tickets into Kenya, plus any domestic flights needed to reach tea-growing regions quickly and comfortably.",
  },
  {
    icon: Bus,
    title: "Factory-to-factory transport",
    text: "Private, reliable ground transport between your accommodation and each of our 10+ partner tea factories, across Kericho, Nandi, Bomet, Murang'a and the Rift Valley.",
  },
  {
    icon: Users,
    title: "Direct introductions to decision-makers",
    text: "You meet the right people at each factory: production managers, sales teams and agronomists who can walk you through quality, volumes and pricing.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment scheduling, confirmed before you land",
    text: "Introductions are only the start — we book and confirm every meeting time, factory slot and cupping session in advance, so your entire buyer schedule is locked in before you board your flight.",
  },
  {
    icon: Ship,
    title: "Meet the export team",
    text: "We also ensure you meet the team from the tea factories that will be handling the export of your tea — so you understand the process, timelines and documentation before you commit.",
  },
  {
    icon: Handshake,
    title: "Negotiation support",
    text: "We facilitate price discussions and sourcing conversations between you and factory representatives, giving you the local context and relationships to negotiate with confidence.",
  },
  {
    icon: Palmtree,
    title: "Optional 2-day reward getaway",
    text: "Before you fly home, add on a 2-day vacation to either the Maasai Mara or the Kenyan Coast, fully arranged by our team.",
  },
];

const includes = [
  "Visa processing and travel documentation support",
  "International and domestic flight bookings",
  "Exclusive access to 10+ partner tea factories across Kenya's top tea-growing regions",
  "Guided factory floor tours — from leaf to finished product",
  "Professional tea cupping and tasting sessions with different grades and selections",
  "Meet-the-producer sessions with factory management and tea agronomists",
  "Facilitated introductions and negotiation support for tea pricing and supply deals",
  "Pre-confirmed appointment scheduling — every factory visit, meeting and cupping session booked before you arrive",
  "Private ground transport between all factories and accommodation",
  "Comfortable accommodation throughout your stay",
  "Optional add-ons: a 2-day Maasai Mara or Kenyan Coast getaway, extended wildlife excursions, cultural experiences and Nairobi city tours",
];

const whyUs = [
  {
    icon: BadgeCheck,
    title: "A genuine door-to-door service",
    text: "From your home country's visa application to your final departure flight — one team, one point of contact, every logistic handled.",
  },
  {
    icon: Factory,
    title: "Access most buyers can't get",
    text: "Direct factory access and decision-maker introductions, built on established relationships across 10+ tea factories and estates.",
  },
  {
    icon: Handshake,
    title: "Hands-on negotiation support",
    text: "Local context, relationships and presence in the room — so you secure better terms with confidence.",
  },
  {
    icon: Leaf,
    title: "An itinerary built on your tea",
    text: "Tailored around your preferences — black, green, purple, orthodox, CTC or specialty — not a fixed group tour.",
  },
];

const regions = [
  { name: "Kericho", text: "Kenya's tea heartland — large estates, consistent CTC volumes and world-class processing infrastructure." },
  { name: "Nandi", text: "High-altitude gardens producing bright, brisk liquors prized by blenders and single-origin buyers." },
  { name: "Bomet", text: "Fertile highland zone with fast-growing smallholder factories and competitively priced, well-graded black CTC." },
  { name: "Murang'a", text: "Rich volcanic soils and cooperative-run factories with excellent traceability." },
  { name: "Rift Valley", text: "Diverse elevations and estates offering everything from orthodox specialty to purple tea." },
];

const steps = [
  { n: "01", title: "Tell us your sourcing goals", text: "Grades, volumes, certifications and budget. We map the regions and factories that fit." },
  { n: "02", title: "We build your buyer itinerary", text: "Factory schedule, cupping sessions, meetings, transport, accommodation, flights and visa — costed and confirmed." },
  { n: "03", title: "You travel and source", text: "Factory floors, gardens, cupping tables and negotiation rooms, with our team beside you throughout." },
  { n: "04", title: "Unwind, then fly home", text: "Add on an optional 2-day Maasai Mara or coast getaway before departure — and receive follow-up support on your supply conversations." },
];

const faqs: Faq[] = [
  {
    question: "Who are Kenya tea tourism trips designed for?",
    answer:
      "International tea buyers, importers, distributors, blenders and serious tea enthusiasts who want to inspect, cup and select Kenyan tea at source before committing to a purchase. It is a B2B sourcing experience rather than a leisure tour, although we can extend it into a holiday.",
  },
  {
    question: "How many tea factories will I visit?",
    answer:
      "We hold relationships with over 10 partner tea factories across Kericho, Nandi, Bomet, Murang'a and the Rift Valley. Your itinerary is built around your grades and volumes — most buyers visit three to six factories in a single trip.",
  },
  {
    question: "Do you handle my visa and flights?",
    answer:
      "Yes. We prepare and lodge your Kenya entry visa application, book your international and domestic flights, and arrange private ground transport between every factory and your accommodation.",
  },
  {
    question: "Can you help with price negotiation?",
    answer:
      "We facilitate the conversation. We introduce you to production managers, sales teams and agronomists, provide local market context, and support price and supply discussions — the contract remains between you and the factory.",
  },
  {
    question: "What tea types can I source in Kenya?",
    answer:
      "Black CTC and orthodox, green tea, Kenya's distinctive purple tea, white and specialty selections, plus certified and single-estate options. Tell us what you're after and we'll route you to the factories that produce it.",
  },
  {
    question: "Can I add a Maasai Mara or coast getaway to the trip?",
    answer:
      "Yes — you can add an optional two-day vacation to either the Maasai Mara or the Kenyan Coast before your departure flight. It's a popular add-on for buyers who want to experience Kenya beyond the factory floor.",
  },
];

const TeaTourism = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Kenya Tea Tourism | Tea Buyer Tours & Factory Visits – Paradise Vacations Kenya"
        description="Experience exclusive Kenya tea tourism with Paradise Vacations Kenya — end-to-end buyer support including visa processing, flights, factory access to 10+ partner factories, price negotiation, and an optional Maasai Mara or coast getaway."
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
              "Curated tea buyer tours in Kenya with visa processing, flights, private transport, access to 10+ partner tea factories in Kericho, Nandi, Bomet, Murang'a and the Rift Valley, cupping sessions, negotiation support and an optional 2-day Maasai Mara or coast getaway.",
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
        title={<>Tea Tourism — Source Kenya's Finest Tea, Straight from the Source</>}
        subtitle="Curated, end-to-end sourcing journeys for international tea buyers, importers and distributors — see, smell, taste and select Kenyan tea before you buy, straight from the estates and factories that produce it."
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

      <TrustBar />

      {/* Intro */}
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
                Kenya is one of the world's leading tea producers — and Paradise Vacations Kenya offers something no
                ordinary tour can: direct, curated access to the source. Our exclusive Tea Tourism experiences are
                designed specifically for international tea buyers, importers, distributors and tea enthusiasts.
              </p>
              <p>
                Through exclusive partnerships with over 10 tea factories across Kenya's premier tea-growing regions —
                including the highlands of Kericho, Nandi, Bomet, Murang'a and the Rift Valley — you get behind-the-scenes
                access to production floors, plucking demonstrations in the gardens, expert-led cupping and tasting
                sessions, and direct conversations with factory management and agronomists.
              </p>
              <p>
                Whether you're a boutique importer looking for a signature single-estate blend, a distributor scouting new
                supply partnerships, or a connoisseur wanting an authentic origin experience, we build a tailored
                itinerary around your sourcing goals — and manage your entire journey from your home country to the
                negotiating table and back.
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
              alt="International tea buyers touring a Kenyan tea factory production floor with the factory manager"
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
              From the moment you decide to source tea from Kenya, our team becomes your on-ground partner for every step
              of the journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
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
            <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">
              Everything in one costed programme
            </h2>
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
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <Leaf className="w-6 h-6 text-primary mb-4" strokeWidth={1.6} />
                <h3 className="font-display text-xl mb-2">{r.name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">How It Works</span>
            <h2 className="font-display text-3xl md:text-5xl">From first enquiry to signed supply</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, index) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="font-display text-4xl text-primary/25 mb-4">{s.n}</div>
                <h3 className="font-display text-lg mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why buyers choose us */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Why Buyers Choose Us</span>
            <h2 className="font-display text-3xl md:text-5xl">Sourcing with certainty, not guesswork</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, index) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background border border-border rounded-xl p-7 shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <w.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl mb-3">{w.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="font-sans text-sm text-muted-foreground text-center max-w-3xl mx-auto mt-10">
            Combining business with discovery? Our{" "}
            <Link to="/dmc" className="text-primary underline underline-offset-4">
              destination management team
            </Link>{" "}
            handles the ground logistics, and our{" "}
            <Link to="/immigration-services" className="text-primary underline underline-offset-4">
              immigration desk
            </Link>{" "}
            takes care of your visa and travel documentation.
          </p>
        </div>
      </section>

      {/* Buyer enquiry form */}
      <section id="tea-enquiry" className="py-20 px-6 md:px-16 bg-ocean-light scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="chapter-title text-xs mb-4 block">Buyer Enquiry</span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Book an exclusive tea buyer tour</h2>
          <p className="font-sans text-muted-foreground text-lg">
            Tell us your company, the tea you're looking for and your sourcing volume. Our tea desk replies within 24
            hours with a draft buyer itinerary — factories, cupping sessions, flights, visa and your 2-day getaway.
          </p>
        </div>
        <TeaBuyerForm />
      </section>

      <FaqBlock
        faqs={faqs}
        eyebrow="Tea Tourism FAQs"
        heading="What buyers ask before they travel"
        tone="plain"
      />

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
