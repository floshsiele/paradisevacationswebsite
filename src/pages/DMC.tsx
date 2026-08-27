import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { Seo } from "@/components/Seo";
import { ArrowRight, Map, PlaneLanding, CalendarCheck, Bus, LifeBuoy, Binoculars } from "lucide-react";

const services = [
  {
    id: "arrival",
    title: "Arrival, Transfers & VIP Handling",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=85",
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
  },
  {
    id: "events",
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
  },
  {
    id: "ground",
    title: "Ground Operations & Fleet",
    image: "https://images.unsplash.com/photo-1523805009345-7448843a9fbc?w=1400&q=85",
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
  },
  {
    id: "programmes",
    title: "Tailor-Made Programmes & Excursions",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1400&q=85",
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
  },
  {
    id: "support",
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
  },
];

const DMC = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Destination Management Company (DMC) Kenya & East Africa | Paradise Vacations"
        description="Paradise Vacations is a Kenyan DMC providing airport meet-and-greet, venue sourcing and event logistics, ground transport and licensed guides, tailor-made programmes and 24/7 on-ground support for overseas operators and corporate groups."
        path="/dmc"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Destination Management (DMC)",
          serviceType: "Destination management company",
          areaServed: "Kenya and East Africa",
          url: "/dmc",
          description:
            "Full destination management services in Kenya and East Africa: arrivals and transfers, event logistics, ground operations, tailor-made programmes and 24/7 support.",
          provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
        }}
      />
      <StaticNav />

      <section className="relative h-[58vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448843a9fbc?w=1800&q=85"
          alt="Kenyan landscape managed by Paradise Vacations destination management team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/55" />
        <div className="relative h-full max-w-6xl mx-auto flex flex-col justify-end px-8 md:px-16 pb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">Destination Management</span>
            <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-4 max-w-3xl">
              Your DMC in Kenya &amp; East Africa
            </h1>
            <p className="font-sans text-white/80 max-w-2xl">
              Local expertise, an owned ground operation and a single accountable contact for overseas operators, corporates and event organisers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="chapter-title text-xs mb-4 block">What a DMC Does</span>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">Everything on the Ground, Handled Locally</h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            As a Destination Management Company we are the local operator behind your programme: we hold the supplier
            relationships, the fleet, the guides and the permits, and we take responsibility for every movement between
            arrival and departure — so your team sells and hosts while we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-5 py-2 rounded-full border border-border font-sans text-xs tracking-widest uppercase text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors"
              >
                {s.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
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
              <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h2 className="font-display text-3xl md:text-4xl mb-5 leading-tight">{service.title}</h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-4">{service.intro}</p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">{service.body}</p>
              <ul className="space-y-3">
                {service.points.map((point) => (
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
              <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20 px-8 md:px-16 text-center bg-ocean-light">
        <Map className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.5} />
        <h2 className="font-display text-3xl md:text-4xl mb-6">Planning a Group or Programme in Kenya?</h2>
        <p className="font-sans text-muted-foreground max-w-2xl mx-auto mb-8">
          Send us your dates, group size and objectives and we will return a costed ground programme with vehicles, guides and venues confirmed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
          >
            Request a Ground Quote <ArrowRight size={16} />
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-10 py-4 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/5 transition-all duration-300"
          >
            View Packages
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  </PageTransition>
);

export default DMC;
