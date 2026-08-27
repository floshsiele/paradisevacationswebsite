import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import weddingCoupleVeil from "@/assets/wedding-couple-veil.jpg";
import sarahYosefField from "@/assets/sarah-yosef-field.jpg";
import estherDanielClouds from "@/assets/esther-daniel-clouds.jpg";
import rebeccaAaronSparklers from "@/assets/rebecca-aaron-sparklers.jpg";

const featuredStories = [
  {
    slug: "miriam-david",
    couple: "Miriam & David",
    location: "Tel Aviv",
    image: weddingCoupleVeil,
  },
  {
    slug: "sarah-yosef",
    couple: "Sarah & Yosef",
    location: "Negev Desert",
    image: sarahYosefField,
  },
  {
    slug: "esther-daniel",
    couple: "Esther & Daniel",
    location: "Golan Heights",
    image: estherDanielClouds,
  },
  {
    slug: "rebecca-aaron",
    couple: "Rebecca & Aaron",
    location: "Jaffa",
    image: rebeccaAaronSparklers,
  },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <StaticNav />

        {/* Hero Section */}
        <HeroSlideshow />

        {/* Philosophy Section */}
        <section className="py-32 px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="chapter-title text-xs mb-8 block">The Approach</span>
              <h2 className="font-display text-3xl md:text-5xl leading-relaxed mb-8">
                Every wedding is a story unfolding in three chapters:
              </h2>
              <div className="flex justify-center gap-12 md:gap-24 mb-12">
                {[
                  { title: "Before", subtitle: "The anticipation" },
                  { title: "The Moment", subtitle: "The vows" },
                  { title: "Forever", subtitle: "The celebration" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    className="text-center"
                  >
                    <span className="chapter-title text-2xl md:text-4xl block mb-2">{item.title}</span>
                    <p className="font-serif text-sm text-muted-foreground">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I believe in the beauty of unposed moments — the nervous laughter, 
                the tears of joy, the quiet glances that speak volumes. 
                My role is simply to witness and preserve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Stories - Single Column */}
        <section className="py-16 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <span className="chapter-title text-xs mb-4 block">Featured Stories</span>
              <h2 className="font-display text-3xl md:text-4xl">Recent Love Stories</h2>
            </motion.div>

            <div className="flex flex-col gap-24">
              {featuredStories.map((story, index) => (
                <motion.div
                  key={story.couple}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <Link to={`/work/${story.slug}`} className="block">
                    <div className="relative overflow-hidden aspect-[16/10] mb-8">
                      <img
                        src={story.image}
                        alt={story.couple}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors duration-400">
                        {story.couple}
                      </h3>
                      <p className="font-serif text-base text-muted-foreground italic">
                        {story.location}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-20"
            >
              <Link
                to="/work"
                className="inline-block font-display text-sm tracking-widest uppercase border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-all duration-400"
              >
                View All Stories
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="chapter-title text-xs mb-8 block">Let's Connect</span>
              <h2 className="font-display text-3xl md:text-5xl leading-relaxed mb-8">
                Ready to tell your story?
              </h2>
              <p className="font-serif text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
                Every great story starts with a conversation. I'd love to hear about 
                your vision and how I can help capture your day.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 border border-foreground/20 font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-display text-xl tracking-widest">Noa Levi</div>
            <nav className="flex gap-8">
              <Link to="/work" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Work
              </Link>
              <Link to="/about" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Contact
              </Link>
            </nav>
            <div className="font-serif text-sm text-muted-foreground">
              © 2024 Noa Levi Photography
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;