import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import photographerPortrait from "@/assets/photographer-portrait.jpg";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photographerPortrait}
                  alt="Noa Levi - Wedding Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 border border-accent/30" 
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <span className="chapter-title text-xs mb-6 block">About</span>
              <h1 className="font-display text-4xl md:text-5xl leading-tight mb-8">
                Shalom, I'm Noa.
              </h1>
              <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
                <p>
                  I believe weddings are not about perfection, but about presence. 
                  My work is about noticing the small moments — the ones that become memories.
                </p>
                <p>
                  For over a decade, I've had the privilege of documenting love stories 
                  across Israel and beyond. From intimate elopements in the Galilee 
                  to grand celebrations in Tel Aviv, each wedding teaches me something new 
                  about the infinite ways people express love.
                </p>
                <p>
                  My approach is quiet, observational, almost documentary. I don't direct 
                  or pose — I wait, I watch, and I capture what unfolds naturally. The 
                  nervous adjustment of the tallit, the grandmother's tears, the breaking 
                  of the glass. These are the moments that matter.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="chapter-title text-xs mb-8 block">Philosophy</span>
              <blockquote className="quote-text text-2xl md:text-4xl text-foreground mb-8">
                "A photograph is not just an image — it's a time machine. 
                Years from now, you'll hold these pictures and remember not 
                just how you looked, but how you felt."
              </blockquote>
              <p className="font-serif text-muted-foreground">— Noa Levi</p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="chapter-title text-xs mb-4 block">What I Value</span>
              <h2 className="font-display text-3xl md:text-4xl">The Way I Work</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Presence Over Perfection",
                  description: "I'm there to witness, not to orchestrate. Real emotions, real moments, real memories."
                },
                {
                  title: "Light as Language",
                  description: "Natural light tells a story. I chase golden hours and embrace the poetry of shadows."
                },
                {
                  title: "Story Over Style",
                  description: "Trends fade, but your story is timeless. I focus on narrative, not aesthetic formulas."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="text-center"
                >
                  <h3 className="font-display text-xl mb-4">{value.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Availability */}
        <section className="py-24 px-8 md:px-16 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="chapter-title text-xs mb-8 block">Location</span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Based in Tel Aviv, Available Worldwide
              </h2>
              <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                While I call Tel Aviv home, love knows no borders. I regularly 
                photograph destination weddings across Israel, Europe, the United States, 
                and beyond. Wherever your story takes you, I'd be honored to follow.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 border border-foreground/20 font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Let's Talk
              </Link>
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
              <Link to="/contact" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default About;