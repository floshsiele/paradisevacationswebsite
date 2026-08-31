import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { photos } from "@/assets/photos";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { FaqBlock, faqPageJsonLd, type Faq } from "@/components/FaqBlock";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import {
  ArrowRight,
  Ticket,
  Hotel,
  Users,
  Shield,
  FileCheck,
  BarChart3,
  Clock,
  Briefcase,
  TrendingDown,
  AlarmClock,
  ClipboardList,
  Wallet,
  Check,
} from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    problem: "Nobody knows what travel actually costs you",
    solution:
      "Monthly spend reporting by department, route, traveller and supplier — plus a fare audit that shows what you paid versus the best available fare.",
  },
  {
    icon: AlarmClock,
    problem: "Approvals take days and fares expire",
    solution:
      "A booking desk that holds fares while your approval workflow runs, and issues the moment sign-off lands. Urgent tickets inside the hour.",
  },
  {
    icon: ClipboardList,
    problem: "Policy exists on paper, not in practice",
    solution:
      "Every request checked against your written policy before ticketing, with out-of-policy requests flagged to your approver rather than quietly booked.",
  },
  {
    icon: Wallet,
    problem: "Invoices arrive from ten different suppliers",
    solution:
      "One consolidated monthly invoice, reconciled to your cost centres, with credit terms for approved accounts.",
  },
];

const pillars = [
  {
    id: "air-ticketing",
    title: "Air Ticketing & Fare Management",
    image: photos.airportDeparture,
    icon: Ticket,
    intro:
      "Competitive fares and flexible bookings on all major domestic, regional and international airlines, issued by accredited consultants with 14 years of ticketing experience.",
    body: "As a fully accredited travel agency, we compare fares across carriers and consolidators to find the best combination of price, routing and flexibility for each trip. We issue and reissue tickets, manage schedule changes, negotiate corporate fare agreements and handle group and block-seat bookings — so your travellers keep moving when plans shift.",
    points: [
      "Accredited ticketing desk",
      "Domestic, regional and international fares",
      "Negotiated corporate fares and airline agreements",
      "Group bookings and block seat reservations",
      "Reissues, refunds and schedule-change management",
      "Seat, baggage and special assistance requests",
    ],
    outcome: "Most clients see 20–30% off their previous air spend in year one.",
  },
  {
    id: "programme",
    title: "Managed Travel Programme",
    image: photos.corporateLounge,
    icon: BarChart3,
    intro:
      "We act as an extension of your admin and finance teams, running bookings inside your travel policy with consolidated invoicing and clear reporting.",
    body: "Every booking is checked against your policy and approval workflow before it is issued. We consolidate invoicing into a single monthly account, reconcile it against your cost centres, and report on spend by department, route and supplier so you can see exactly where the travel budget goes and where to negotiate next.",
    points: [
      "Travel policy design and approval workflows",
      "Dedicated account manager and booking desk",
      "Consolidated invoicing and credit facilities",
      "Monthly spend reporting by department and route",
      "Supplier negotiation and cost-saving reviews",
    ],
    outcome: "One invoice, one account manager, zero chasing.",
  },
  {
    id: "mice",
    title: "MICE, Incentives & Team Travel",
    image: photos.groupPlanning,
    icon: Users,
    intro:
      "Meetings, incentives, conferences and exhibitions planned and delivered end to end, in Kenya and abroad.",
    body: "From a 20-person strategy retreat in Naivasha to a 400-delegate conference in Mombasa or an incentive trip to Dubai, we handle venue sourcing, delegate registration, room blocks, transfers, AV, team-building activities and on-site coordination with our own staff present throughout.",
    points: [
      "Venue sourcing, site inspections and contracting",
      "Delegate registration and rooming lists",
      "Group flights, transfers and fleet management",
      "Team-building and incentive experiences",
      "On-site event coordination and reporting",
    ],
    outcome: "Our coordinators are physically on site, start to finish.",
  },
];

const support = [
  { icon: Hotel, title: "Corporate Hotel Rates", description: "Negotiated rates at city hotels, serviced apartments and lodges your staff use most." },
  { icon: FileCheck, title: "Visa & ETA Processing", description: "Documentation review, appointment booking and ETA processing for travelling staff." },
  { icon: Shield, title: "Travel Insurance", description: "Corporate medical and trip cover arranged per traveller or as an annual policy." },
  { icon: Clock, title: "24/7 Traveller Support", description: "A real person on the phone for cancellations, missed connections and emergencies." },
  { icon: Briefcase, title: "Airport Meet & Assist", description: "VIP handling, fast-track and chauffeur transfers for executives and visiting partners." },
  { icon: BarChart3, title: "Duty of Care Tracking", description: "Know where your travellers are, with itineraries and alerts shared with your team." },
];

const onboarding = [
  { n: "01", title: "Travel audit", text: "Share 12 months of travel spend. We analyse routes, carriers, class mix and leakage — free and confidential." },
  { n: "02", title: "Savings proposal", text: "You receive a written proposal with projected savings, service levels and a policy draft within five working days." },
  { n: "03", title: "Go live in 2 weeks", text: "Account setup, traveller profiles, approver matrix and credit terms configured. No system for your team to learn." },
  { n: "04", title: "Quarterly review", text: "We report on savings delivered, policy compliance and supplier performance, then renegotiate where volumes justify it." },
];

const faqs: Faq[] = [
  {
    question: "How much does corporate travel management cost us?",
    answer:
      "There is no subscription or platform fee for standard managed accounts. We are remunerated through supplier arrangements and, where applicable, a transparent transaction fee agreed in your service contract before you sign. Every quote you receive is itemised.",
  },
  {
    question: "How quickly can you issue an urgent ticket?",
    answer:
      "Within the hour during business hours, and any time of night through the 24/7 duty desk for accounts with emergency authorisation on file. We can hold fares while your internal approval runs.",
  },
  {
    question: "Do we have to change our travel policy or systems?",
    answer:
      "No. We work inside your existing policy and approval chain, and we can help redraft it if you want. There is no software for your staff to learn — they email or call the desk and we handle the rest.",
  },
  {
    question: "Can you offer credit terms and consolidated invoicing?",
    answer:
      "Yes. Approved corporate accounts are set up with credit terms and a single monthly invoice reconciled to your cost centres, replacing dozens of individual supplier receipts.",
  },
  {
    question: "How do you handle duty of care?",
    answer:
      "We maintain live traveller itineraries, share them with your nominated safety contact, and coordinate medical referrals, evacuations and emergency rerouting through our duty desk.",
  },
  {
    question: "What happens when a trip goes wrong at 2am?",
    answer:
      "You call the emergency line and a consultant re-routes or re-issues the ticket, rebooks affected hotels and transfers, and informs your office. There is no agency penalty for disruption rebooking.",
  },
];

const CorporateTravel = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Corporate Travel Management Kenya | Business Travel Solutions – Paradise Vacations Kenya"
        description="Streamline your company's business travel with Paradise Vacations Kenya's corporate travel management services — flight bookings, accommodation, MICE, and 24/7 travel support across Kenya and East Africa."
        path="/corporate-travel"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Corporate Travel Management",
            serviceType: "Corporate travel management",
            areaServed: "Kenya and East Africa",
            url: "/corporate-travel",
            description:
              "Managed corporate travel programmes covering air ticketing, hotels, policy compliance, MICE, duty of care and spend reporting.",
            provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
          },
          faqPageJsonLd(faqs),
        ]}
      />
      <StaticNav />

      <PageHero
        eyebrow="Corporate Travel Management"
        badge="14 years · Trusted by Kenyan corporates"
        title={<>Corporate Travel Management in Kenya — Travel Smarter, Not Harder</>}
        subtitle="Time is money, and every business trip should move your company forward. With 14 years of experience, we manage the full travel lifecycle for businesses, NGOs and government institutions — flights, hotels, transfers, visas, MICE logistics and real-time 24/7 traveller assistance."
        image={photos.corporateConfidence}
        imageAlt="Corporate traveller walking through an airport terminal on a trip managed by Paradise Vacations Kenya"
        primaryLabel="Request a corporate travel consultation"
        microcopy="No obligation · Confidential · Written savings projection"
        stats={[
          { value: "20–30%", label: "Typical spend saving" },
          { value: "<1 hr", label: "Urgent ticketing" },
          { value: "1", label: "Monthly invoice" },
          { value: "24/7", label: "Duty desk" },
        ]}
      />

      <TrustBar />

      {/* Pain / solution */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">The Problem We Solve</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Four things every finance team tells us</h2>
            <p className="font-sans text-muted-foreground text-lg">
              If two or more of these sound familiar, an audit will pay for itself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p, index) => (
              <motion.div
                key={p.problem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-3">“{p.problem}”</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{p.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section
          key={pillar.id}
          id={pillar.id}
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
              <pillar.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h2 className="font-display text-3xl md:text-4xl mb-5 leading-tight">{pillar.title}</h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-4">{pillar.intro}</p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">{pillar.body}</p>
              <ul className="space-y-3 mb-7">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 font-sans text-sm text-primary">
                {pillar.outcome}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated ${index % 2 === 0 ? "" : "lg:order-1"}`}
            >
              <img src={pillar.image} alt={pillar.imageAlt ?? pillar.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Support services */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="chapter-title text-xs mb-4 block">Included in Your Account</span>
            <h2 className="font-display text-3xl md:text-5xl">Support services for travelling staff</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 bg-background p-6 rounded-xl border border-border shadow-soft"
              >
                <item.icon className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg mb-1">{item.title}</h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Switching Is Easy</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Live in two weeks, savings in the first quarter</h2>
            <p className="font-sans text-muted-foreground text-lg">
              No systems to install, no disruption to your travellers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboarding.map((s, index) => (
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

      <Testimonials
        eyebrow="Corporate Clients"
        heading="What travel managers say"
        intro="Finance teams, admin heads and frequent-flying executives across Kenya."
        limit={3}
      />

      <FaqBlock faqs={faqs} eyebrow="Corporate Travel FAQs" heading="What procurement teams ask us" />

      <CtaBand
        eyebrow="Free Spend Audit"
        heading="Show us last year's travel spend. We'll show you the savings."
        text="Send 12 months of travel data and receive a confidential written proposal with projected savings, service levels and a draft travel policy within five working days."
        primaryLabel="Request a proposal"
        secondary={{ label: "Our DMC services", to: "/dmc" }}
        tone="dark"
      />

      <section className="py-14 px-6 md:px-16 text-center bg-background">
        <p className="font-sans text-muted-foreground mb-5">Prefer to talk it through first?</p>
        <Link to="/packages" className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-primary hover:gap-3 transition-all">
          Browse group and incentive packages <ArrowRight size={15} />
        </Link>
      </section>

      <SiteFooter />
      <StickyCta />
    </div>
  </PageTransition>
);

export default CorporateTravel;
