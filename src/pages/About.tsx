import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { FaqBlock, faqPageJsonLd, type Faq } from "@/components/FaqBlock";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { Globe, Shield, HeartHandshake, Award, Users, Phone } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Global reach, local roots",
    description:
      "Kenyan-owned with our own ground operation in Nairobi, the Rift Valley and the coast, plus partner DMCs across Europe, the Gulf, Asia and the Americas.",
  },
  {
    icon: Shield,
    title: "Reliability before revenue",
    description:
      "Every booking is double-checked before ticketing, and every traveller has a 24/7 number that reaches a real consultant, not a call queue.",
  },
  {
    icon: HeartHandshake,
    title: "One consultant, always yours",
    description:
      "You are not passed around a pool. A named travel manager learns your policy, your preferences and your seat, and stays with your account.",
  },
  {
    icon: Award,
    title: "Priced honestly",
    description:
      "Itemised quotes, no hidden service loading, and a written cost breakdown before you commit a single shilling.",
  },
];

const milestones = [
  { year: "Founded", title: "Built by travel people", text: "Started in Nairobi by consultants who had already spent years ticketing, guiding and running ground operations." },
  { year: "Corporate", title: "Managed travel programmes", text: "Kenyan SACCOs, NGOs, agri-businesses and professional firms moved their staff travel onto our desks." },
  { year: "Groups", title: "Schools and conferences", text: "Educational study tours abroad and multi-hundred delegate conferences on the ground in Kenya." },
  { year: "Today", title: "Full-service travel house", text: "Corporate travel management, inbound and outbound tours, educational trips and full destination management under one roof." },
];

const team = [
  {
    name: "Corporate desk",
    role: "Managed travel & ticketing",
    text: "IATA-trained consultants issuing, reissuing and auditing fares against your travel policy every working day.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85",
  },
  {
    name: "Tours & safari team",
    role: "Inbound, outbound & educational",
    text: "Itinerary designers and KPSGA-standard guides who have driven the routes they sell you.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=85",
  },
  {
    name: "Operations & duty desk",
    role: "24/7 traveller care",
    text: "The people who answer at 2am when a flight is cancelled and rebook you before the airline desk opens.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
  },
];

const faqs: Faq[] = [
  {
    question: "Who is Paradise Vacations Kenya?",
    answer:
      "We are a Nairobi-based, Kenyan-owned travel house offering corporate travel management, inbound safaris and beach holidays, outbound tours, international educational trips and destination management services for visiting operators and organisers.",
  },
  {
    question: "Where are you based and can I visit you?",
    answer:
      "Our office is at Occidental Plaza, 3rd floor, Muthithi Road, Westlands, Nairobi. Walk-ins are welcome during business hours, and we are happy to come to your offices for corporate programme reviews.",
  },
  {
    question: "What makes you different from booking online myself?",
    answer:
      "Online tools sell you a seat. We manage the whole trip: negotiated fares, policy compliance, visas, insurance, ground logistics, and a human being who fixes it when something goes wrong at midnight in another time zone.",
  },
  {
    question: "Are you licensed and accredited?",
    answer:
      "Yes. We are a registered Kenyan travel agency operating to industry standards and working with recognised airline, hotel and tourism partners across Kenya and internationally.",
  },
];

const About = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="About Paradise Vacations Kenya | Nairobi Travel Management Experts"
        description="Kenyan-owned Nairobi travel house delivering corporate travel management, safaris, outbound tours, educational trips and destination management — with named consultants and 24/7 support."
        path="/about"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Paradise Vacations Kenya",
            url: "/about",
            about: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
          },
          faqPageJsonLd(faqs),
        ]}
      />
      <StaticNav />

      <PageHero
        eyebrow="About Us"
        badge="Kenyan-owned · Nairobi-based · Serving clients worldwide"
        title={<>Travel people, not a booking form</>}
        subtitle="We are the team Kenyan companies, schools and families call when a trip absolutely has to work — because we own the ground operation, the supplier relationships and the outcome."
        image="https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1800&q=85"
        imageAlt="Acacia tree on the Kenyan savannah at golden hour"
        primaryLabel="Plan a trip with us"
        secondaryLabel="See our packages"
        secondaryTo="/packages"
        stats={[
          { value: "1,000+", label: "Trips arranged" },
          { value: "98%", label: "Client satisfaction" },
          { value: "60%+", label: "Repeat clients" },
          { value: "24/7", label: "Support" },
        ]}
      />

      <TrustBar />

      {/* Story */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=85"
                alt="Safari guide and guests on a Kenyan game drive"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 border-2 border-primary/30 rounded-xl hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-title text-xs mb-5 block">Our Story</span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              We built the agency we wished existed
            </h2>
            <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
              <p>
                Too many travellers had the same story: a cheap fare, a silent agent, and nobody answering
                when the connection was missed. So we built the opposite — a travel house where a named
                consultant owns your trip from first enquiry to safe return.
              </p>
              <p>
                Today that means running managed travel programmes for Kenyan organisations, designing
                safaris and beach escapes that families come back for year after year, taking students
                safely to campuses abroad, and handling ground operations for visiting operators and
                conference organisers.
              </p>
              <p className="text-foreground font-medium">
                More than six in ten of our bookings come from clients who have already travelled with us.
                That number is the only marketing metric we really care about.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="chapter-title text-xs mb-8 block">Our Promise</span>
            <blockquote className="quote-text text-2xl md:text-4xl text-foreground mb-8">
              "Quote it honestly. Plan it properly. Answer the phone when it matters."
            </blockquote>
            <p className="font-sans text-muted-foreground">— The Paradise Vacations team</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">How We Work</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Four commitments we do not bend</h2>
            <p className="font-sans text-muted-foreground text-lg">
              They are the reason clients hand us their whole travel programme after one trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card border border-border rounded-xl p-7 shadow-soft hover:shadow-elevated transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6 md:px-16 bg-ocean-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="chapter-title text-xs mb-4 block">Our Journey</span>
            <h2 className="font-display text-3xl md:text-5xl">How the business grew</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, index) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="font-sans text-xs uppercase tracking-widest text-primary mb-4">{m.year}</div>
                <h3 className="font-display text-lg mb-3">{m.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">The People</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Three desks, one accountable team</h2>
            <p className="font-sans text-muted-foreground text-lg">
              Whoever picks up your enquiry stays with it until you are home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl overflow-hidden border border-border bg-card shadow-soft"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl mb-1">{t.name}</h3>
                  <div className="font-sans text-xs uppercase tracking-widest text-primary mb-4">{t.role}</div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        eyebrow="Client Voices"
        heading="Why clients stay with us"
        intro="Corporates, schools and families who came once — and kept coming back."
      />

      {/* Partners */}
      <section className="py-16 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <span className="chapter-title text-xs mb-6 block">Industry Partners</span>
          <h2 className="font-display text-2xl md:text-3xl mb-8">We work within the recognised travel trade</h2>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-sans text-sm uppercase tracking-wider">
            <span>TOSK</span>
            <span>KATA</span>
            <span>ATA</span>
            <span>Ecotourism Kenya</span>
            <span>Magical Kenya</span>
          </div>
        </div>
      </section>

      <FaqBlock faqs={faqs} eyebrow="About Us" heading="Questions about working with us" tone="plain" />

      <CtaBand
        eyebrow="Let's Talk"
        heading="Come to us with the trip. We'll bring the plan."
        text="Corporate programme review, family safari or a 40-student study tour — send the brief and we will come back within 24 hours with a costed proposal."
        primaryLabel="Start my enquiry"
      />

      <SiteFooter />
      <StickyCta />
      <a
        href="tel:+254726927081"
        className="sr-only"
        aria-hidden="true"
      >
        <Phone size={0} />
      </a>
    </div>
  </PageTransition>
);

export default About;
