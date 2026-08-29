import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gift, RefreshCcw, Crown, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Gift,
    title: "Welcome credit",
    text: "Book your first leisure package and receive a KES 5,000 travel credit toward your next trip.",
  },
  {
    icon: RefreshCcw,
    title: "Return traveller rate",
    text: "Every completed trip unlocks a standing discount on land arrangements — automatically applied to your next quote.",
  },
  {
    icon: Crown,
    title: "Paradise Priority",
    text: "Three trips a year earns priority seating requests, complimentary airport meet-and-greet and first access to fixed departures.",
  },
];

export function LoyaltySection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
        <div>
          <span className="chapter-title text-xs mb-4 block text-accent">Paradise Rewards</span>
          <h2 className="font-display text-3xl md:text-5xl mb-5">
            The more you travel with us, the less you pay
          </h2>
          <p className="font-sans text-background/70 leading-relaxed mb-8">
            Over 60% of our bookings come from clients who have travelled with us before. Paradise Rewards
            is how we say thank you — no points maths, no expiry games, just a better price and better
            treatment every time you come back.
          </p>
          <Link
            to="/packages#book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:opacity-90 transition-opacity"
          >
            Join with your first booking <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5">
          {tiers.map((t, index) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5 bg-background/5 border border-background/10 rounded-xl p-6"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <t.icon className="w-5 h-5 text-accent" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">{t.title}</h3>
                <p className="font-sans text-sm text-background/70 leading-relaxed">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
