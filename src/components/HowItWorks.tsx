import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Tell us the goal",
    text: "One call or a two-minute form. Destination, dates, budget, headcount — or just the idea you have in mind.",
  },
  {
    n: "02",
    title: "Get a costed plan in 24 hours",
    text: "A written itinerary with flights, hotels, transfers and a fully itemised price. No obligation, no pressure.",
  },
  {
    n: "03",
    title: "Confirm and relax",
    text: "We ticket, secure rooms, process visas and send every document to your inbox and phone.",
  },
  {
    n: "04",
    title: "Travel with backup",
    text: "A named consultant plus a 24/7 emergency line follows your trip from departure to return.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-16 bg-ocean-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="chapter-title text-xs mb-4 block">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">From idea to boarding pass in four steps</h2>
          <p className="font-sans text-muted-foreground text-lg">
            Most enquiries receive a full quote the same working day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-background rounded-xl p-7 border border-border shadow-soft"
            >
              <div className="font-display text-4xl text-primary/25 mb-4">{s.n}</div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
