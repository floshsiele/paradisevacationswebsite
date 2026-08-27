import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { HeroVideo } from "@/components/HeroVideo";
import { PageTransition } from "@/components/PageTransition";
import { Plane, Map, Briefcase, GraduationCap, ArrowRight, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";

const serviceCards = [
  { icon: Briefcase, title: "Corporate Travel Management", description: "Managed business travel: air ticketing, negotiated hotel rates, policy, reporting and 24/7 traveller support.", to: "/corporate-travel" },
  { icon: Plane, title: "Inbound & Outbound Tours", description: "Kenya safaris and beach holidays, plus outbound getaways to Dubai, Zanzibar and beyond.", to: "/packages" },
  { icon: GraduationCap, title: "Educational Trips", description: "Supervised international study tours for schools, colleges and universities.", to: "/packages" },
  { icon: Map, title: "Destination Management", description: "Ground handling, event logistics, fleet and licensed guides across Kenya and East Africa.", to: "/dmc" },
];

const stats = [
  { label: "Cases Handled", value: "1000+" },
  { label: "Positive Client Reviews", value: "98%" },
  { label: "Clients' Money Saved", value: "30%" },
  { label: "Awards Won", value: "12+" },
];

const clients = ["mbogo", "Kipsigis", "Kipchimatt", "Kuresoi", "kg", "wvs"];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Seo
          title="Paradise Vacations Kenya — Corporate Travel, Packages & DMC"
          description="Kenyan travel agency offering corporate travel management, inbound and outbound tour packages, international educational trips and full destination management (DMC) services."
          path="/"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Paradise Vacations Kenya",
            url: "/",
            telephone: "+254726927081",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Occidental Plaza, 3rd floor, Muthithi Road, Westlands",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            areaServed: "Kenya and worldwide",
          }}
        />
        <StaticNav />

        {/* Hero Section */}
        <HeroVideo />

        {/* Service Pillars */}
        <section id="services" className="py-16 px-8 md:px-16 bg-sand-dark">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="chapter-title text-xs mb-4 block">What We Do</span>
              <h2 className="font-display text-3xl md:text-5xl">Seamless Travel Solutions</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-background rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
                >
                  <Link to={service.to} className="block p-8 h-full">
                  <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-xl mb-3">{service.title}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
              >
                Explore All Packages <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Safari & Outbound Holidays */}
        <section className="py-16 px-8 md:px-16 bg-ocean-light">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="chapter-title text-xs mb-4 block">Unforgettable Experiences</span>
              <h2 className="font-display text-3xl md:text-5xl mb-6">Your Travel Journey Awaits</h2>
              <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Step into the wild with our curated safari experiences across Kenya's iconic landscapes and around the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=85"
                  alt="Safari jeep in Kenya"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-left">
                  <h3 className="font-display text-2xl text-white mb-2">Safari Journeys</h3>
                  <p className="font-sans text-white/80 text-sm">Discover Kenya's wildlife, landscapes, and culture.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85"
                  alt="Tropical beach holiday"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-left">
                  <h3 className="font-display text-2xl text-white mb-2">Outbound Holidays</h3>
                  <p className="font-sans text-white/80 text-sm">Beach escapes, city breaks, and world tours.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-8 md:px-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl mb-2">{stat.value}</div>
                  <div className="font-sans text-sm tracking-wider text-primary-foreground/80 uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 px-8 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <span className="chapter-title text-xs mb-4 block">Trusted By</span>
              <h2 className="font-display text-3xl md:text-4xl">Our Clients</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {clients.map((client) => (
                <div
                  key={client}
                  className="font-display text-xl md:text-2xl text-muted-foreground tracking-wide"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <section className="py-16 px-8 md:px-16 bg-ocean-light">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="chapter-title text-xs mb-4 block">Start Your Journey</span>
              <h2 className="font-display text-3xl md:text-5xl mb-6">Ready to Travel?</h2>
              <p className="font-sans text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get a personalized quote from our travel consultants. We'll handle the details so you can focus on the experience.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
              >
                Get Your Quote <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Link to="/" className="font-display text-2xl tracking-wide mb-4 block">Paradise Vacations</Link>
              <p className="font-sans text-background/70 text-sm leading-relaxed">
                Committed to offering travel services of the highest quality, combining our energy and enthusiasm with years of experience.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Home</Link>
                <Link to="/about" className="font-sans text-sm text-background/70 hover:text-background transition-colors">About Us</Link>
                <Link to="/corporate-travel" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Corporate Travel</Link>
                <Link to="/dmc" className="font-sans text-sm text-background/70 hover:text-background transition-colors">DMC</Link>
                <Link to="/book" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Book</Link>
                <Link to="/contact" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Contact</Link>
              </nav>
            </div>

            <div>
              <h4 className="font-display text-lg mb-4">Contact</h4>
              <p className="font-sans text-sm text-background/70 mb-3">
                Occidental Plaza, 3rd floor, Muthithi Rd, Westlands, Nairobi, Kenya
              </p>
              <p className="font-sans text-sm text-background/70 mb-3">
                P.O. Box 101178 – 00100
              </p>
              <a href="tel:+254726927081" className="flex items-center gap-2 font-sans text-sm text-background/70 hover:text-background transition-colors mb-2">
                <Phone size={14} /> 0726 927 081
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/paradisevacationskenya" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-background/70 hover:text-background">Facebook</a>
                <a href="https://x.com/paradise_vacay" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-background/70 hover:text-background">X</a>
                <a href="https://www.instagram.com/paradisevacations_ke/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-background/70 hover:text-background">Instagram</a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-background/10 text-center">
            <p className="font-sans text-sm text-background/50">
              © 2025 Paradise Vacations Kenya. All rights reserved.
            </p>
          </div>
        </footer>

        {/* WhatsApp Float */}
        <a
          href="https://api.whatsapp.com/send?phone=254723045625"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </PageTransition>
  );
};

export default Index;
