import { Link } from "react-router-dom";
import { trackCta } from "@/lib/analytics";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { HeroVideo } from "@/components/HeroVideo";
import { PageTransition } from "@/components/PageTransition";
import { TrustBar } from "@/components/TrustBar";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { Testimonials } from "@/components/Testimonials";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { Plane, Map, Briefcase, GraduationCap, ArrowRight, Phone, CheckCircle2, Stamp } from "lucide-react";
import certIataAsset from "@/assets/cert-iata.jpg.asset.json";
import certKataAsset from "@/assets/cert-kata.jpg.asset.json";
import certTraAsset from "@/assets/cert-tra.jpg.asset.json";
import certToskAsset from "@/assets/cert-tosk.jpg.asset.json";

const certIata = certIataAsset.url;
const certKata = certKataAsset.url;
const certTra = certTraAsset.url;
const certTosk = certToskAsset.url;
import teaGardens from "@/assets/tea-gardens-kericho.jpg";

const accreditations = [
  {
    logo: certIata,
    name: "IATA",
    full: "International Air Transport Association",
    description:
      "Global airline accreditation — we ticket directly on IATA carriers, access negotiated corporate fares and reissue or refund tickets in-house.",
  },
  {
    logo: certKata,
    name: "KATA",
    full: "Kenya Association of Travel Agents",
    description:
      "Membership of Kenya's national travel agents body, binding us to its professional code of conduct and client-funds protection standards.",
  },
  {
    logo: certTra,
    name: "TRA",
    full: "Tourism Regulatory Authority",
    description:
      "Licensed and regularly inspected by Kenya's government tourism regulator, covering our tour operations, vehicles and guiding standards.",
  },
  {
    logo: certTosk,
    name: "TOSK",
    full: "Tour Operators Society of Kenya",
    description:
      "Recognised tour operator status, giving our clients park-rate access, vetted supplier networks and peer-audited safari standards.",
  },
];


const serviceCards = [
  {
    icon: Briefcase,
    title: "Corporate Travel Management",
    description:
      "Negotiated airfares, policy control, MICE logistics, monthly reporting and 24/7 traveller care. Cut travel spend without cutting comfort.",
    proof: "Average 20–30% spend reduction",
    to: "/corporate-travel",
  },
  {
    icon: Plane,
    title: "Inbound & Outbound Tours",
    description:
      "Masai Mara, Amboseli and Diani safaris, plus Dubai, Zanzibar, Mauritius and Europe holidays — flights, visas and hotels handled end to end.",
    proof: "Published prices, no hidden extras",
    to: "/packages",
  },
  {
    icon: GraduationCap,
    title: "International Educational Trips",
    description:
      "Supervised study tours for schools, colleges and universities with campus visits, STEM workshops, risk assessments and parent reporting.",
    proof: "Full chaperone & safeguarding support",
    to: "/packages",
  },
  {
    icon: Map,
    title: "Destination Management (DMC)",
    description:
      "Ground handling for inbound operators and event organisers: fleet, licensed guides, conference logistics and delegate management.",
    proof: "East Africa ground assets",
    to: "/dmc",
  },
  {
    icon: Stamp,
    title: "Immigration Services",
    description:
      "Kenya visa applications and renewals, work permits, residency support and relocation assistance — handled by specialists, end to end.",
    proof: "Direct liaison with immigration authorities",
    to: "/immigration-services",
  },
];

const stats = [
  { label: "Years in operation", value: "14" },
  { label: "Trips arranged", value: "1,000+" },
  { label: "Client satisfaction", value: "98%" },
  { label: "Support, every day", value: "24/7" },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Seo
          title="Paradise Vacations Kenya | 14 Years · IATA · KATA · TRA · TOSK"
          description="Kenya's trusted travel management company: corporate travel, safaris, outbound holidays, educational trips, DMC and immigration services. IATA, KATA, TRA and TOSK certified with 14 years of experience. Free quote in 24 hours."
          path="/"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Paradise Vacations Kenya",
              url: "/",
              telephone: "+254726927081",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Occidental Plaza, 3rd floor, Muthithi Road, Westlands",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              areaServed: "Kenya and worldwide",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "600",
              },
            },
          ]}
        />
        <StaticNav />

        <HeroVideo />
        <TrustBar />

        {/* Accreditations — home page only */}
        <section className="py-14 px-6 md:px-16 bg-background">
          <div className="max-w-5xl mx-auto text-center">
            <span className="chapter-title text-xs mb-3 block">Accredited &amp; Certified</span>
            <h2 className="font-display text-2xl md:text-3xl mb-2">
              14 years of trusted, certified travel expertise
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-10">
              Fully licensed and accredited by the leading travel and tourism bodies in Kenya and worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
              {accreditations.map((a, index) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-4 rounded-xl border border-border bg-card p-5 shadow-soft h-full"
                >
                  <div className="w-20 h-16 sm:w-full sm:h-24 shrink-0 flex items-center justify-center sm:justify-start">
                    <img
                      src={a.logo}
                      alt={`${a.name} — ${a.full} certification logo`}
                      loading="lazy"
                      className="max-h-full max-w-[120px] sm:max-w-[150px] object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-sans text-sm font-semibold tracking-wide text-foreground">{a.name}</div>
                    <div className="font-sans text-[11px] uppercase tracking-wider text-primary mb-2">{a.full}</div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{a.description}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section id="services" className="py-20 px-6 md:px-16 bg-sand-dark">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="chapter-title text-xs mb-4 block">What We Do</span>
              <h2 className="font-display text-3xl md:text-5xl mb-4">Five services. One accountable team.</h2>
              <p className="font-sans text-muted-foreground text-lg">
                Whether it is a board trip to Dubai, 120 students to London or a work permit for new staff,
                the same consultant owns it from first quote to safe return.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group bg-background rounded-xl border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
                >
                  <Link to={service.to} className="flex flex-col h-full p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-xl mb-3">{service.title}</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed text-sm mb-5">
                      {service.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 font-sans text-xs text-primary">
                      <CheckCircle2 size={14} /> {service.proof}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Experience — Tea Tourism */}
        <section className="py-20 px-6 md:px-16 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-elevated"
          >
            <div className="relative min-h-[280px]">
              <img
                src={teaGardens}
                alt="Kenyan highland tea estate with pluckers harvesting leaf at sunrise"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 bg-card">
              <span className="chapter-title text-xs mb-4 block">Signature Experience</span>
              <h2 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                Tea Tourism — source Kenya's finest tea, straight from the source
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Exclusive buyer experiences for international tea importers and distributors: visa and flights handled,
                access to 10+ partner factories across Kericho, Nandi, Nyeri, Murang'a and the Rift Valley, expert-led
                cupping sessions, negotiation support — and a complimentary 2-day Maasai Mara or coast getaway before
                you fly home.
              </p>
              <Link
                to="/tea-tourism"
                onClick={() => trackCta("Explore Tea Tourism", { cta_location: "home_tea_banner", destination: "/tea-tourism" })}
                className="btn-primary-cta"
              >
                Explore tea buyer tours <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </section>

        <FeaturedPackages />

        {/* Stats */}
        <section className="py-16 px-6 md:px-16 bg-gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="font-display text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="font-sans text-xs md:text-sm tracking-wider text-primary-foreground/80 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* Final CTA */}
        <section className="py-20 px-6 md:px-16 bg-ocean-light">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="chapter-title text-xs mb-4 block">Start Here</span>
              <h2 className="font-display text-3xl md:text-5xl mb-5">
                Tell us where you're going. We'll do the rest.
              </h2>
              <p className="font-sans text-muted-foreground text-lg mb-9">
                Send us your dates and headcount and receive a fully costed itinerary within 24 hours —
                free, itemised and with no obligation to book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/packages#book"
                  onClick={() => trackCta("Request my free quote", { cta_location: "home_final_cta", destination: "/packages#book" })}
                  className="btn-primary-cta"
                >
                  Request my free quote <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+254726927081"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-primary/30 text-primary font-sans text-sm tracking-widest uppercase hover:bg-primary/5 transition-colors"
                >
                  <Phone size={16} /> 0726 927 081
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <SiteFooter />
        <StickyCta />

        {/* WhatsApp Float */}
        <a
          href="https://api.whatsapp.com/send?phone=254723045625"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-elevated transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </PageTransition>
  );
};

export default Index;
