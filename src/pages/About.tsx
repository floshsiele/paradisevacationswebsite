import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { ArrowRight, Award, Globe, Shield, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Global Reach, Local Expertise",
    description: "From Nairobi to New York, we combine worldwide partnerships with deep knowledge of Kenya and East Africa."
  },
  {
    icon: Shield,
    title: "Reliability First",
    description: "Round-the-clock support, transparent pricing, and meticulous planning so your trip goes smoothly."
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "No two travelers are the same. We design every itinerary around your goals, budget, and pace."
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Recognized for excellence in corporate travel, safaris, and destination management across Kenya."
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1200&q=85"
                  alt="Kenyan landscape with acacia tree"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-primary/30 rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <span className="chapter-title text-xs mb-6 block">About Us</span>
              <h1 className="font-display text-4xl md:text-5xl leading-tight mb-8">
                Your Journey, Our Passion
              </h1>
              <div className="space-y-6 font-sans text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are committed to offering travel services of the highest quality, combining our energy and enthusiasm with our years of experience.
                </p>
                <p>
                  Our greatest satisfaction comes in serving large numbers of satisfied clients who have experienced the joys and inspiration of travel — from corporate road warriors to families on safari, honeymooners on beach escapes, and groups exploring the world together.
                </p>
                <p>
                  At Paradise Vacations Kenya, every itinerary is crafted with care, every booking is double-checked, and every client is treated like family.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-8 md:px-16 bg-sand-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="chapter-title text-xs mb-8 block">Our Mission</span>
              <blockquote className="quote-text text-2xl md:text-4xl text-foreground mb-8">
                "To create seamless, unforgettable travel experiences that connect people with places, cultures, and moments that matter."
              </blockquote>
              <p className="font-sans text-muted-foreground">— Paradise Vacations Kenya</p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-8 md:px-16 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="chapter-title text-xs mb-4 block">What We Value</span>
              <h2 className="font-display text-3xl md:text-4xl">The Way We Work</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl mb-4">{value.title}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="py-24 px-8 md:px-16 bg-ocean-light">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="chapter-title text-xs mb-4 block">Recognition</span>
              <h2 className="font-display text-3xl md:text-4xl mb-8">Our Accreditations</h2>
              <p className="font-sans text-muted-foreground mb-10">
                Proudly accredited by leading travel and tourism bodies in Kenya.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-sans text-sm uppercase tracking-wider">
                <span>TOSK</span>
                <span>KATA</span>
                <span>ATA</span>
                <span>Ecotourism Kenya</span>
                <span>Magical Kenya</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 md:px-16 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="chapter-title text-xs mb-8 block">Let's Plan Together</span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Ready for Your Next Adventure?
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Whether it's a corporate trip, a safari, or a beach holiday, we're here to make it unforgettable.
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
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-wide">Paradise Vacations</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Home</Link>
              <Link to="/book" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Get a Quote</Link>
              <Link to="/contact" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Contact</Link>
            </nav>
            <p className="font-sans text-sm text-background/50">
              © 2025 Paradise Vacations Kenya
            </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default About;
