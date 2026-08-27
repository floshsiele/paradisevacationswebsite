import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { ContactForm } from "@/components/ContactForm";
import { PageTransition } from "@/components/PageTransition";

const Contact = () => {
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
            <span className="chapter-title text-xs mb-4 block">Contact</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Let's Begin
            </h1>
            <p className="font-serif text-lg text-muted-foreground max-w-xl mx-auto">
              Every love story deserves to be told beautifully. 
              Share a bit about yourselves, and let's start a conversation.
            </p>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-32 px-8 md:px-16">
          <ContactForm />
        </section>

        {/* Alternative Contact */}
        <section className="py-16 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="chapter-title text-xs mb-6 block">Or Reach Out Directly</span>
              <a 
                href="mailto:hello@noalevi.com" 
                className="font-display text-2xl md:text-3xl hover:text-accent transition-colors duration-400 link-underline"
              >
                hello@noalevi.com
              </a>
              <p className="font-serif text-muted-foreground mt-6">
                Tel Aviv, Israel · Available Worldwide
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-widest">Noa Levi</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Home</Link>
              <Link to="/work" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Work</Link>
              <Link to="/about" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">About</Link>
            </nav>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Contact;