import { motion } from "framer-motion";
import { Banknote, Headphones, Route, Users, FileCheck2, Globe2 } from "lucide-react";

const reasons = [
  {
    icon: Banknote,
    title: "We save you money, in writing",
    text: "Consolidated airline deals, corporate hotel rates and fare-audit reporting. Most corporate clients see 20–30% off their previous travel spend.",
  },
  {
    icon: Headphones,
    title: "One consultant. Always yours.",
    text: "No call centre queues. You get a named travel manager who knows your policy, your preferences and your seat.",
  },
  {
    icon: Route,
    title: "Itineraries that actually work",
    text: "Every route is built around real ground timings — not brochure fiction. What we print is what you experience.",
  },
  {
    icon: FileCheck2,
    title: "Visas, insurance and documents handled",
    text: "We prepare, lodge and track your applications so nobody misses a departure over paperwork.",
  },
  {
    icon: Users,
    title: "Groups are our specialty",
    text: "From 6-person board retreats to 120-student study tours — manifests, rooming lists, chaperones and logistics under one roof.",
  },
  {
    icon: Globe2,
    title: "Local roots, global reach",
    text: "Kenyan-owned with East African ground assets, plus partner DMCs across Europe, the Gulf, Asia and the Americas.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 px-6 md:px-16 bg-sand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="chapter-title text-xs mb-4 block">Why Paradise Vacations</span>
          <h2 className="font-display text-3xl md:text-5xl mb-5">
            Six reasons clients leave their old agency — and never go back
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Travel is only cheap when nothing goes wrong. We are built for the moment it does.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, index) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="bg-background rounded-xl p-7 border border-border shadow-soft"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <r.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-xl mb-2">{r.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
