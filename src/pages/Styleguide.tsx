import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const colorPalette = [
  { name: "Background", variable: "--background", value: "36 33% 97%", hex: "#FAF8F5" },
  { name: "Foreground", variable: "--foreground", value: "0 0% 23%", hex: "#3A3A3A" },
  { name: "Accent (Gold)", variable: "--accent", value: "42 45% 60%", hex: "#C9A962" },
  { name: "Muted", variable: "--muted", value: "36 15% 90%", hex: "#E8E4DF" },
  { name: "Muted Foreground", variable: "--muted-foreground", value: "0 0% 45%", hex: "#737373" },
  { name: "Cream Dark", variable: "--cream-dark", value: "36 25% 94%", hex: "#F2EFE9" },
];

const Styleguide = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />

        {/* Header */}
        <section className="pt-32 pb-16 px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-title text-xs mb-4 block">Brand Identity</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">Styleguide</h1>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              A visual reference for the design system behind this portfolio. 
              Cinematic, organic, and deeply human.
            </p>
          </motion.div>
        </section>

        {/* Color Palette */}
        <section className="py-16 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="chapter-title text-xs mb-4 block">Colors</span>
              <h2 className="font-display text-3xl mb-12">Color Palette</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {colorPalette.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div 
                      className="aspect-square rounded-sm border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <h3 className="font-display text-lg">{color.name}</h3>
                      <p className="font-mono text-xs text-muted-foreground">{color.hex}</p>
                      <p className="font-mono text-xs text-muted-foreground">HSL: {color.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Typography */}
        <section className="py-16 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="chapter-title text-xs mb-4 block">Typography</span>
              <h2 className="font-display text-3xl mb-12">Type System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Display Font */}
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-2">Display / Headings</p>
                    <h3 className="font-display text-2xl">Cormorant Garamond</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="font-display text-6xl">Aa</p>
                    <p className="font-display text-4xl">I tell love stories.</p>
                    <p className="font-display text-2xl italic font-light">
                      The quiet moments become memories.
                    </p>
                  </div>
                  <p className="font-serif text-sm text-muted-foreground">
                    Used for headlines, titles, and display text. 
                    Elegant, timeless, with a touch of romance.
                  </p>
                </div>

                {/* Body Font */}
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-2">Body / Text</p>
                    <h3 className="font-serif text-2xl">Lora</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="font-serif text-6xl">Aa</p>
                    <p className="font-serif text-lg">
                      Every wedding is a unique narrative, a chapter in 
                      the ongoing story of two lives becoming one.
                    </p>
                    <p className="font-serif text-base italic">
                      Presence over perfection.
                    </p>
                  </div>
                  <p className="font-serif text-sm text-muted-foreground">
                    Used for body text, descriptions, and longer content. 
                    Warm, readable, and inviting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chapter Titles */}
        <section className="py-16 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="chapter-title text-xs mb-4 block">Signature Element</span>
              <h2 className="font-display text-3xl mb-12">Story Chapters</h2>
              
              <p className="font-serif text-lg text-muted-foreground mb-12 max-w-2xl">
                Each wedding story is divided into three narrative chapters. 
                These titles serve as both navigation and visual poetry.
              </p>

              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="flex-1 space-y-4">
                  <span className="chapter-title text-6xl md:text-8xl block">Before</span>
                  <p className="font-serif text-sm text-muted-foreground">
                    The anticipation, the preparation, the quiet before the celebration.
                  </p>
                </div>
                <div className="flex-1 space-y-4">
                  <span className="chapter-title text-6xl md:text-8xl block">The Moment</span>
                  <p className="font-serif text-sm text-muted-foreground">
                    The vows, the ceremony, the heart of the story.
                  </p>
                </div>
                <div className="flex-1 space-y-4">
                  <span className="chapter-title text-6xl md:text-8xl block">Forever</span>
                  <p className="font-serif text-sm text-muted-foreground">
                    The celebration, the joy, the beginning of forever.
                  </p>
                </div>
              </div>

              <div className="mt-16 p-8 border border-border bg-background">
                <p className="font-mono text-xs text-muted-foreground mb-4">CSS Class: .chapter-title</p>
                <code className="font-mono text-sm text-foreground/80">
                  font-family: 'Cormorant Garamond', serif;<br/>
                  font-weight: 300;<br/>
                  font-style: italic;<br/>
                  letter-spacing: 0.15em;<br/>
                  text-transform: uppercase;<br/>
                  color: hsl(var(--chapter-title));
                </code>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Spacing & Rhythm */}
        <section className="py-16 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="chapter-title text-xs mb-4 block">Rhythm</span>
              <h2 className="font-display text-3xl mb-12">Spacing & Breathing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <h3 className="font-display text-xl">Visual Rhythm</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    The design follows a slow, contemplative rhythm. Generous whitespace 
                    allows each element to breathe, creating a sense of calm and 
                    intentionality throughout the experience.
                  </p>
                  <ul className="font-serif text-sm text-muted-foreground space-y-2">
                    <li>• Section padding: 6rem - 8rem vertical</li>
                    <li>• Content max-width: 5xl (64rem)</li>
                    <li>• Image spacing: 3rem - 4rem</li>
                    <li>• Text line-height: 1.7 - 1.8</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="font-display text-xl">Transitions</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    All animations are slow and gentle. Nothing jarring or attention-grabbing. 
                    The experience should feel like turning pages of a beautiful book.
                  </p>
                  <ul className="font-serif text-sm text-muted-foreground space-y-2">
                    <li>• Fade duration: 600ms - 1500ms</li>
                    <li>• Hover transitions: 300ms - 500ms</li>
                    <li>• Page transitions: 600ms</li>
                    <li>• Easing: ease-out, ease-in-out</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Components */}
        <section className="py-16 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="chapter-title text-xs mb-4 block">UI</span>
              <h2 className="font-display text-3xl mb-12">Components</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Buttons */}
                <div className="space-y-6">
                  <h3 className="font-display text-xl">Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                  </div>
                  <p className="font-serif text-sm text-muted-foreground">
                    Buttons use semantic tokens and follow the design system for consistency.
                  </p>
                </div>

                {/* Links */}
                <div className="space-y-6">
                  <h3 className="font-display text-xl">Links</h3>
                  <div className="flex flex-wrap gap-6">
                    <a href="#" className="font-display text-sm tracking-widest uppercase link-underline">Animated Link</a>
                    <a href="#" className="font-serif text-lg text-muted-foreground hover:text-foreground transition-colors">Subtle Link</a>
                  </div>
                  <p className="font-serif text-sm text-muted-foreground">
                    Links use the .link-underline class for elegant hover animations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sample Layout */}
        <section className="py-16 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="chapter-title text-xs mb-4 block">Example</span>
              <h2 className="font-display text-3xl mb-12">Narrative Layout</h2>
              
              <div className="border border-border p-8 md:p-16 bg-background">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                  <span className="chapter-title text-xs block">The Story Of</span>
                  <h3 className="font-display text-4xl md:text-5xl">Ana & Lucas</h3>
                  <p className="font-serif text-lg text-muted-foreground italic">
                    A celebration of quiet love amidst rolling hills and golden light.
                  </p>
                  <div className="flex justify-center gap-8 pt-4">
                    <span className="chapter-title text-sm">Before</span>
                    <span className="chapter-title text-sm opacity-40">The Moment</span>
                    <span className="chapter-title text-sm opacity-40">Forever</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-widest">Noa Levi</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/work" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors">Work</Link>
              <Link to="/about" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Styleguide;