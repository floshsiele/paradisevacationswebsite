import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { Seo } from "@/components/Seo";
import { ArrowRight, Ticket, Hotel, Users, Shield, FileCheck, BarChart3, Clock, Briefcase } from "lucide-react";

const pillars = [
  {
    id: "air-ticketing",
    title: "Air Ticketing & Fare Management",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=85",
    icon: Ticket,
    intro:
      "Competitive fares and flexible bookings on all major domestic, regional and international airlines, issued by IATA-trained consultants.",
    body: "We compare fares across carriers and consolidators to find the best combination of price, routing and flexibility for each trip. We issue and reissue tickets, manage schedule changes, negotiate corporate fare agreements and handle group and block-seat bookings — so your travellers keep moving when plans shift.",
    points: [
      "Domestic, regional and international ticketing",
      "Negotiated corporate fares and airline agreements",
      "Group bookings and block seat reservations",
      "Reissues, refunds and schedule-change management",
      "Seat, baggage and special assistance requests",
    ],
  },
  {
    id: "programme",
    title: "Managed Travel Programme",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85",
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
  },
  {
    id: "mice",
    title: "MICE, Incentives & Team Travel",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85",
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

const CorporateTravel = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Corporate Travel Management in Kenya | Paradise Vacations"
        description="Corporate travel management for Kenyan organisations: air ticketing, negotiated hotel rates, travel policy and approvals, MICE and incentives, visas, insurance, spend reporting and 24/7 traveller support."
        path="/corporate-travel"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Corporate Travel Management",
          serviceType: "Corporate travel management",
          areaServed: "Kenya and East Africa",
          url: "/corporate-travel",
          description:
            "Managed corporate travel programmes covering air ticketing, hotels, policy compliance, MICE, duty of care and spend reporting.",
          provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
        }}
      />
      <StaticNav />

      {/* Hero */}
      <section className="relative h-[58vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=85"
          alt="Business travellers in a meeting arranged by Paradise Vacations Kenya"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/55" />
        <div className="relative h-full max-w-6xl mx-auto flex flex-col justify-end px-8 md:px-16 pb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">Corporate Travel</span>
            <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-4 max-w-3xl">
              Business Travel, Managed End to End
            </h1>
            <p className="font-sans text-white/80 max-w-2xl">
              One accountable partner for flights, hotels, policy, approvals, reporting and traveller safety — across Kenya, the region and worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`py-20 px-8 md:px-16 scroll-mt-24 ${index % 2 === 0 ? "bg-sand-dark" : "bg-background"}`}
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
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden ${index % 2 === 0 ? "" : "lg:order-1"}`}
            >
              <img src={pillar.image} alt={pillar.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24 px-8 md:px-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="chapter-title text-xs mb-4 block">Included in Your Account</span>
            <h2 className="font-display text-3xl md:text-4xl">Support Services for Travelling Staff</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {support.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 bg-background p-6 rounded-lg"
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

      <section className="py-20 px-8 md:px-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-6">Talk to Us About Your Travel Programme</h2>
        <p className="font-sans text-muted-foreground max-w-2xl mx-auto mb-8">
          Share your annual travel volumes and policy and we will come back with a proposal, projected savings and a service plan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
          >
            Request a Proposal <ArrowRight size={16} />
          </Link>
          <Link
            to="/dmc"
            className="inline-flex items-center gap-2 px-10 py-4 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/5 transition-all duration-300"
          >
            Our DMC Services
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  </PageTransition>
);

export default CorporateTravel;
