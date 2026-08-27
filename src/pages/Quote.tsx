import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { ContactForm } from "@/components/ContactForm";
import { PageTransition } from "@/components/PageTransition";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const Quote = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />

        {/* Header */}
        <section className="pt-32 pb-16 px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <span className="chapter-title text-xs mb-4 block">Book</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Plan Your Journey
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your travel plans and our consultants will prepare a personalized quote within 24 hours.
            </p>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="pb-12 px-8 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Tailored Itineraries", description: "Every trip is customized to your preferences and budget." },
              { title: "24/7 Support", description: "Our team is available around the clock during your travels." },
              { title: "Best Rates", description: "We negotiate competitive fares and rates on your behalf." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-sand-dark p-6 rounded-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg mb-1">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="pb-24 px-8 md:px-16">
          <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-lg border border-border/50">
            <div className="text-center mb-10">
              <span className="chapter-title text-xs mb-4 block">Your Details</span>
              <h2 className="font-display text-2xl md:text-3xl">Request a Personalized Quote</h2>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 bg-foreground text-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-wide">Paradise Vacations</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Home</Link>
              <Link to="/about" className="font-sans text-sm text-background/70 hover:text-background transition-colors">About</Link>
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

export default Quote;
