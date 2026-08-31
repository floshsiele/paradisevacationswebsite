import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { DmcInquiryForm } from "@/components/DmcInquiryForm";
import { FaqBlock, faqPageJsonLd, type Faq } from "@/components/FaqBlock";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { PlaneLanding, CalendarCheck, Bus, LifeBuoy, Binoculars, Check, Handshake, Percent, MapPinned } from "lucide-react";
import { photos } from "@/assets/photos";

const audiences = [
  {
    icon: Handshake,
    title: "Overseas tour operators",
    text: "Net rates, ready-to-sell programme copy and imagery, plus a local operator who protects your client relationship and never sells around you.",
  },
  {
    icon: CalendarCheck,
    title: "Conference & event organisers",
    text: "Venue sourcing, delegate registration, room blocks, transfers and on-site coordinators for programmes from 20 to 400+ delegates.",
  },
  {
    icon: MapPinned,
    title: "Corporates & incentive houses",
    text: "Team retreats, incentive circuits, CSR and conservation days, spouse programmes and executive handling with full duty-of-care cover.",
  },
];

const services = [
  {
    id: "arrival",
    label: "Arrivals",
    title: "Arrival, Transfers & VIP Handling",
    image: photos.airportDeparture,
    icon: PlaneLanding,
    intro:
      "Your guests are met the moment they land at JKIA, Moi International or any regional airport, and handed over to a named coordinator.",
    body: "We provide meet-and-greet at the aircraft door or arrivals hall, immigration and ETA guidance, luggage assistance, fast-track where available, and chauffeur transfers in air-conditioned vehicles. Arrival manifests are tracked flight by flight so late or diverted guests are still collected.",
    points: [
      "Airport meet-and-greet and fast-track handling",
      "Chauffeur and shuttle transfers, single or fleet",
      "Flight-by-flight arrival manifest tracking",
      "Welcome packs, SIM cards and currency assistance",
      "VIP and delegation protocol support",
    ],
    outcome: "No guest has ever been left standing at arrivals.",
  },
  {
    id: "events",
    label: "Events",
    title: "Venue Sourcing & Event Logistics",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85",
    icon: CalendarCheck,
    intro:
      "Conferences, product launches, incentive programmes and gala dinners — sourced, contracted and delivered on the ground.",
    body: "We shortlist and inspect venues, negotiate rates and contracts, and manage room blocks, catering, AV, staging, décor, permits and licences. Our coordinators run the event on site with contingency plans for weather, power and transport, and a full post-event report and reconciliation afterwards.",
    points: [
      "Venue shortlists, site inspections and contracting",
      "Room blocks, rooming lists and delegate registration",
      "AV, staging, décor and production management",
      "County permits, filming and event licensing",
      "On-site coordination and post-event reporting",
    ],
    outcome: "Contingency plans for weather, power and transport, always.",
  },
  {
    id: "ground",
    label: "Ground Ops",
    title: "Ground Operations & Fleet",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&q=85",
    icon: Bus,
    intro:
      "A managed fleet and licensed guide network covering Nairobi, the coast, the Rift Valley and the northern circuit.",
    body: "We operate 4x4 pop-top land cruisers, safari vans, executive sedans and coaches, all serviced, insured and tracked. Drivers and guides are KPSGA-rated or licensed, briefed on your itinerary, and supported by a dispatch desk that reroutes vehicles when schedules move.",
    points: [
      "4x4 safari vehicles, vans, sedans and coaches",
      "Licensed, briefed driver-guides and tour leaders",
      "Multi-city and multi-park routing and dispatch",
      "Park fees, conservancy permits and lodge liaison",
      "Vehicle tracking and daily condition checks",
    ],
    outcome: "Our own assets — not a chain of subcontractors.",
  },
  {
    id: "programmes",
    label: "Programmes",
    title: "Tailor-Made Programmes & Excursions",
    image: photos.safariElephant,
    icon: Binoculars,
    intro:
      "Bespoke itineraries for overseas tour operators, corporate groups and luxury travellers, built around your clients' interests.",
    body: "We design and cost full programmes — safari circuits, beach extensions, cultural and community visits, hot-air balloon rides, conservation experiences and team-building days — and supply rates, imagery and copy your own sales team can sell from.",
    points: [
      "Costed programme proposals with net rates",
      "Safari, beach, culture and adventure modules",
      "Community, conservation and CSR experiences",
      "Spouse and pre/post-conference tour programmes",
      "Imagery and itinerary copy for partner marketing",
    ],
    outcome: "Sales-ready material your team can quote from same day.",
  },
  {
    id: "support",
    label: "24/7 Support",
    title: "24/7 On-Ground Support",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85",
    icon: LifeBuoy,
    intro:
      "One accountable local contact from arrival to departure, reachable at any hour of the day or night.",
    body: "Every programme is assigned a duty coordinator with a direct line. We handle medical referrals, evacuations, lost documents, itinerary changes and supplier issues in real time, and keep your head office informed with daily operations updates.",
    points: [
      "Named duty coordinator with a direct line",
      "Medical referral and evacuation coordination",
      "Lost documents and emergency travel support",
      "Real-time itinerary changes and supplier escalation",
      "Daily operations updates to your head office",
    ],
    outcome: "A direct line to a human being, all night, every night.",
  },
];

const process = [
  { n: "01", title: "Send the brief", text: "Dates, pax numbers, budget band and objectives. A programme designer is assigned the same day." },
  { n: "02", title: "Costed proposal in 48 hours", text: "Full ground programme with vehicles, guides, venues and net rates — priced line by line." },
  { n: "03", title: "Confirm and contract", text: "We lock suppliers, issue permits and build the operations manual for your programme." },
  { n: "04", title: "We run it on the ground", text: "Named duty coordinator, live tracking, daily updates and a post-programme report with reconciliation." },
];

const faqs: Faq[] = [
  {
    question: "What exactly does a DMC do?",
    answer:
      "A destination management company is the local operator behind your programme. We hold the supplier relationships, the fleet, the guides and the permits, and we take responsibility for every movement between arrival and departure — so your team sells and hosts while we deliver.",
  },
  {
    question: "Do you offer net rates to overseas operators?",
    answer:
      "Yes. Trade partners receive confidential net rates with a clear commission structure, plus imagery and itinerary copy your own sales team can market from. We never sell around a partner's client.",
  },
  {
    question: "Which destinations do you cover?",
    answer:
      "Kenya end to end — Nairobi, Masai Mara, Amboseli, Samburu, Lake Nakuru, Naivasha, Tsavo, Diani, Watamu and Lamu — plus cross-border programmes into Tanzania, Uganda and Rwanda through vetted partners.",
  },
  {
    question: "What size of group can you handle?",
    answer:
      "From a two-person luxury circuit to conferences of 400+ delegates. Fleet, guides, rooming and registration scale with the brief, and coordinator numbers are set by group size rather than by budget.",
  },
  {
    question: "How fast is a ground quote?",
    answer:
      "Standard programmes are costed within 48 hours. Complex multi-country or large-conference briefs typically take three to five working days including venue inspections.",
  },
  {
    question: "Are your vehicles and guides licensed and insured?",
    answer:
      "Yes. Vehicles are serviced, insured, tracked and checked daily. Driver-guides are licensed and KPSGA-standard, briefed on your specific itinerary before departure.",
  },
];

const DMC = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="DMC Kenya | Destination Management Company for Kenya & East Africa – Paradise Vacations Kenya"
        description="Paradise Vacations Kenya is a leading Destination Management Company (DMC) offering ground handling, event logistics, and bespoke travel solutions for tour operators and agencies across Kenya and East Africa."
        path="/dmc"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Destination Management (DMC)",
            serviceType: "Destination management company",
            areaServed: "Kenya and East Africa",
            url: "/dmc",
            description:
              "Full destination management services in Kenya and East Africa: arrivals and transfers, event logistics, ground operations, tailor-made programmes and 24/7 support.",
            provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
          },
          faqPageJsonLd(faqs),
        ]}
      />
      <StaticNav />

      <PageHero
        eyebrow="Destination Management Company"
        badge="14 years on the ground · Fully licensed & accredited"
        title={<>DMC Services — Your Local Experts for Kenya &amp; East Africa</>}
        subtitle="Global tour operators, travel agencies and event planners need a partner on the ground they can trust. With 14 years of destination management experience, we provide the local expertise, infrastructure and network that turn ambitious travel plans into flawless, on-the-ground realities — across Kenya, Tanzania, Uganda, Rwanda and beyond."
        primaryLabel="Partner with our DMC team"
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=85"
        imageAlt="Safari vehicle crossing the Kenyan savannah managed by Paradise Vacations DMC"
        secondaryLabel="View sample programmes"
        secondaryTo="/packages"
        microcopy="Net rates for trade partners · Confidential · No obligation"
        stats={[
          { value: "14 yrs", label: "DMC experience" },
          { value: "48 hrs", label: "Quote turnaround" },
          { value: "400+", label: "Delegates handled" },
          { value: "24/7", label: "Duty coordinator" },
        ]}
      />

      <TrustBar />

      {/* Who we work with */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Who We Work With</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Three kinds of partner, one standard</h2>
            <p className="font-sans text-muted-foreground text-lg">
              Whatever the brief, you get one contact who is answerable for the entire ground programme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a, index) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <a.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl mb-3">{a.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-5 py-2 rounded-full border border-border bg-background font-sans text-xs tracking-widest uppercase text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 px-6 md:px-16 scroll-mt-24 ${index % 2 === 0 ? "bg-background" : "bg-ocean-light"}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={index % 2 === 0 ? "" : "lg:order-2"}
            >
              <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h2 className="font-display text-3xl md:text-4xl mb-5 leading-tight">{service.title}</h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-4">{service.intro}</p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">{service.body}</p>
              <ul className="space-y-3 mb-7">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 font-sans text-sm text-primary">
                {service.outcome}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated ${index % 2 === 0 ? "" : "lg:order-1"}`}
            >
              <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">How We Engage</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">From brief to delivered programme</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((s, index) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="font-display text-4xl text-primary/25 mb-4">{s.n}</div>
                <h3 className="font-display text-lg mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto flex items-start gap-4 bg-background rounded-xl border border-border p-7 shadow-soft">
            <Percent className="w-7 h-7 text-primary shrink-0" strokeWidth={1.6} />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Trade partners:</span> confidential net rates, clear
              commission structure, and marketing-ready imagery and itinerary copy supplied with every proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-16 bg-background">
        <p className="max-w-3xl mx-auto text-center font-sans text-muted-foreground">
          Looking to combine business with discovery?{" "}
          <Link to="/tea-tourism" className="text-primary underline underline-offset-4">
            Explore our exclusive Tea Tourism experiences
          </Link>{" "}
          — end-to-end sourcing journeys for international tea buyers, with factory access, negotiation support and a
          2-day Maasai Mara or coast getaway.
        </p>
      </section>

      <Testimonials
        eyebrow="Ground Programmes"
        heading="What organisers say after the last delegate leaves"
        intro="Conference convenors, operators and group leaders we have delivered for."
        limit={3}
      />

      <section id="dmc-inquiry" className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="chapter-title text-xs mb-3 block">DMC Inquiry</span>
          <h2 className="font-display text-3xl md:text-4xl mb-4">Tell us about your group</h2>
          <p className="font-sans text-muted-foreground">
            Share the destination, dates, group size and services you need. Our ground operations team replies with
            a costed programme within 48 hours.
          </p>
        </div>
        <DmcInquiryForm />
      </section>

      <FaqBlock faqs={faqs} eyebrow="DMC FAQs" heading="What partners ask before appointing us" tone="plain" />

      <CtaBand
        eyebrow="Ground Quote"
        heading="Send the brief. Get a costed ground programme in 48 hours."
        text="Dates, group size and objectives are enough to start. We come back with vehicles, guides, venues and net rates priced line by line."
        primaryLabel="Request a ground quote"
        secondary={{ label: "Corporate travel management", to: "/corporate-travel" }}
        tone="dark"
      />

      <SiteFooter />
      <StickyCta />
    </div>
  </PageTransition>
);

export default DMC;
