import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { ContactForm } from "@/components/ContactForm";
import { PageTransition } from "@/components/PageTransition";
import { Seo } from "@/components/Seo";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Seo title={"Contact Paradise Vacations Kenya — Westlands, Nairobi"} description={"Call, WhatsApp, email or visit Paradise Vacations Kenya at Occidental Plaza, Muthithi Road, Westlands, Nairobi for travel quotes and bookings."} path="/contact" />
        <StaticNav />

        {/* Header */}
        <section className="pt-32 pb-16 px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="chapter-title text-xs mb-4 block">Contact</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Let's Plan Your Trip
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to our travel consultants for personalized itineraries, corporate travel solutions, or any travel inquiry.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-16 px-8 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-sand-dark p-6 rounded-lg text-center"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">Visit Us</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Occidental Plaza, 3rd floor<br />
                Muthithi Rd, Westlands<br />
                Nairobi, Kenya
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-sand-dark p-6 rounded-lg text-center"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">Call Us</h3>
              <p className="font-sans text-sm text-muted-foreground">
                <a href="tel:+254726927081" className="hover:text-primary transition-colors">0726 927 081</a><br />
                <a href="tel:+254723045625" className="hover:text-primary transition-colors">0723 045 625</a><br />
                <a href="tel:+254724448920" className="hover:text-primary transition-colors">0724 448 920</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-sand-dark p-6 rounded-lg text-center"
            >
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">Office Hours</h3>
              <p className="font-sans text-sm text-muted-foreground">
                Monday – Friday: 8am – 6pm<br />
                Saturday: 9am – 2pm<br />
                Sunday: Closed
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-24 px-8 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="chapter-title text-xs mb-4 block">Send a Message</span>
              <h2 className="font-display text-2xl md:text-4xl">Request Your Quote</h2>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-8 md:px-16 bg-sand-dark">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="chapter-title text-xs mb-6 block">Connect With Us</span>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="https://www.facebook.com/paradisevacationskenya" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                <a href="https://x.com/paradise_vacay" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">X / Twitter</a>
                <a href="https://www.youtube.com/@paradisevacationskenya/videos" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">YouTube</a>
                <a href="https://www.instagram.com/paradisevacations_ke/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="https://www.tiktok.com/@paradise.vacations" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">TikTok</a>
                <a href="https://www.linkedin.com/in/paradise-vacations-kenya/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              </div>
              <a
                href="mailto:info@paradisegrouptravels.com"
                className="font-display text-xl md:text-2xl hover:text-primary transition-colors duration-400 link-underline"
              >
                info@paradisegrouptravels.com
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-8 md:px-16 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
            >
              Get Your Quote <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-wide">Paradise Vacations</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Home</Link>
              <Link to="/about" className="font-sans text-sm text-background/70 hover:text-background transition-colors">About</Link>
              <Link to="/book" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Book</Link>
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

export default Contact;
