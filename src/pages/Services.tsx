import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { ArrowRight, Binoculars, Map, Ticket, Hotel, Users, Shield, FileCheck, Briefcase } from "lucide-react";
import { Seo } from "@/components/Seo";

const detailedServices = [
  {
    id: "safari",
    label: "Safari",
    title: "Safari & Holiday Packages",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1400&q=85",
    icon: Binoculars,
    intro:
      "Step into the wild with curated safari experiences across Kenya's iconic landscapes — the Masai Mara, Amboseli, Samburu, Tsavo, Lake Nakuru and beyond.",
    body: "From short weekend escapes to extended photographic expeditions, every safari is planned around your pace, budget and interests. We work with trusted camps and lodges, licensed driver-guides, and well-maintained 4x4 pop-top vehicles, so the only thing you need to think about is the view outside the window.",
    points: [
      "Private and group game drives with professional guides",
      "Lodge, tented camp and luxury camp options",
      "Great Migration and calving season itineraries",
      "Beach-and-bush combinations with the Kenyan coast",
      "Family safaris, honeymoons and photographic tours",
    ],
  },
  {
    id: "dmc",
    label: "DMC",
    title: "Destination Management (DMC)",
    image: "https://images.unsplash.com/photo-1523805009345-7448843a9fbc?w=1400&q=85",
    icon: Map,
    intro:
      "As your trusted Destination Management Company, we provide in-depth local expertise and customized on-ground support across Kenya and East Africa.",
    body: "Whether you're planning corporate events, incentive travel, luxury holidays or large group tours, we handle every detail from arrival to departure. Our ground operations team manages transport, accommodation, permits, venues, guides and contingency planning — giving overseas partners and corporate clients a single, accountable point of contact in the region.",
    points: [
      "Meet-and-greet, airport transfers and VIP handling",
      "Venue sourcing, event logistics and conference support",
      "Incentive programmes and team-building experiences",
      "Group transport fleet management and licensed guides",
      "24/7 on-ground emergency support",
    ],
  },
  {
    id: "air-ticketing",
    label: "Air Ticketing",
    title: "Air Ticketing",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=85",
    icon: Ticket,
    intro:
      "Competitive fares and flexible bookings on all major domestic, regional and international airlines.",
    body: "Our IATA-trained consultants compare fares across carriers and consolidators to find the best combination of price, routing and flexibility. We issue and reissue tickets, manage schedule changes, handle group fares and corporate agreements, and keep your travellers moving when plans shift unexpectedly.",
    points: [
      "Domestic, regional and international ticketing",
      "Corporate fare agreements and negotiated rates",
      "Group bookings and block seat reservations",
      "Reissues, refunds and schedule-change management",
      "Seat, baggage and special assistance requests",
    ],
  },
  {
    id: "corporate-travel",
    label: "Corporate Travel",
    title: "Corporate Travel Management",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85",
    icon: Briefcase,
    intro:
      "A managed travel programme for organisations in Kenya and the region — policy, bookings, cost control and 24/7 traveller support in one account.",
    body: "We act as an extension of your admin and finance teams: booking flights, hotels and ground transport within your travel policy, negotiating corporate rates with airlines and hotels, consolidating invoicing, and reporting on spend so you can see exactly where the travel budget goes. Duty-of-care sits at the centre — travellers reach a real person any time a flight cancels, a visa stalls or plans change mid-trip.",
    points: [
      "Travel policy design and approval workflows",
      "Negotiated corporate airline and hotel rates",
      "Consolidated invoicing and monthly spend reporting",
      "Visa, ETA and travel insurance handling for staff",
      "MICE, conferences and incentive travel for teams",
      "24/7 emergency support for travelling staff",
    ],
  },
];

const supportServices = [
  { icon: Hotel, title: "Hotel Booking", description: "Hand-picked stays from city hotels to safari lodges and beach resorts, at negotiated rates." },
  { icon: Users, title: "MICE", description: "Meetings, incentives, conferences and exhibitions planned and delivered end to end." },
  { icon: Shield, title: "Travel Insurance", description: "Comprehensive medical and trip coverage so you travel with total peace of mind." },
  { icon: FileCheck, title: "Visa Assistance", description: "Guided visa application support and documentation review for major destinations." },
  { icon: Ticket, title: "Electronic Travel Authorization", description: "Fast, reliable ETA processing for Kenya and other eligible destinations." },
];

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Seo
          title="Safari, DMC & Corporate Travel Services | Paradise Vacations Kenya"
          description="Safari and holiday packages, destination management (DMC) in Kenya and East Africa, air ticketing, corporate travel management, MICE, visas, ETA and travel insurance."
          path="/services"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Travel services by Paradise Vacations Kenya",
            itemListElement: detailedServices.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.intro,
                serviceType: s.label,
                areaServed: "Kenya and East Africa",
                url: `/services#${s.id}`,
                provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
              },
            })),
          }}
        />
        <StaticNav />

        <section className="pt-32 pb-16 px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="chapter-title text-xs mb-4 block">Our Services</span>
              <h1 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
                Everything You Need, Handled in One Place
              </h1>
              <p className="font-sans text-lg text-muted-foreground">
                Safaris, destination management and air ticketing sit at the heart of what we do — supported by a full suite of travel services for individuals, groups and organizations.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {detailedServices.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-6 py-2 rounded-full border border-border font-sans text-sm tracking-widest uppercase text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {detailedServices.map((service, index) => (
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
                <ul className="space-y-3 mb-8">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
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

        {/* Support services */}
        <section className="py-24 px-8 md:px-16 bg-ocean-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="chapter-title text-xs mb-4 block">Also Available</span>
              <h2 className="font-display text-3xl md:text-4xl">Supporting Travel Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportServices.map((item, index) => (
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
          <h2 className="font-display text-3xl md:text-4xl mb-6">Browse Our Travel Packages</h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready-made safari, beach and outbound itineraries you can book as they are or tailor to your dates.
          </p>
          <Link
            to="/safari-journeys"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
          >
            View Packages <ArrowRight size={16} />
          </Link>
        </section>

        <SiteFooter />
      </div>
    </PageTransition>
  );
};

export default Services;
