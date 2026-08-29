import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import {
  CheckCircle2,
  Clock4,
  ShieldCheck,
  Wallet,
  Phone,
  MessageCircle,
  Mail,
  Star,
} from "lucide-react";

const steps = [
  { n: "01", title: "Send your brief", text: "Two minutes on the form — destination, dates, travellers, rough budget." },
  { n: "02", title: "We design and price it", text: "A named consultant builds the itinerary and quotes it line by line within 24 hours." },
  { n: "03", title: "Refine until it fits", text: "Swap lodges, change dates, adjust the budget. Redesigning costs you nothing." },
  { n: "04", title: "Confirm and travel", text: "A deposit secures your dates. We handle flights, visas, ground and 24/7 support." },
];

const reasons = [
  { icon: Clock4, title: "A quote within 24 hours", text: "Same working day for straightforward trips, 48 hours for complex multi-country programmes." },
  { icon: Wallet, title: "Negotiated rates, itemised", text: "Airline and hotel contracts we've built over 14 years — passed on, with every line of the price shown." },
  { icon: ShieldCheck, title: "Fully licensed & accredited", text: "Your booking is handled by certified travel professionals. No fee, no obligation, no pressure to commit." },
];

const contactCards = [
  { icon: Phone, label: "Call a consultant", value: "+254 726 927 081", href: "tel:+254726927081" },
  { icon: MessageCircle, label: "WhatsApp us", value: "Chat now", href: "https://wa.me/254726927081" },
  { icon: Mail, label: "Email the team", value: "bookings@paradisegrouptravels.com", href: "mailto:bookings@paradisegrouptravels.com" },
];

export const QuoteSection = () => (
  <section id="book" className="scroll-mt-24 bg-ocean-light py-20 px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border px-4 py-1.5 mb-6">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
          <span className="font-sans text-xs tracking-widest uppercase">14 years of trusted service · Free quote in 24 hours</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl mb-4">Book your trip — tell us what you want</h2>
        <p className="font-sans text-lg text-muted-foreground">
          Two minutes now, a fully costed itinerary in your inbox tomorrow — designed by a named consultant, not a
          template.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {reasons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex items-start gap-3 bg-background p-6 rounded-xl border border-border"
          >
            <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.6} />
            <div>
              <h3 className="font-display text-lg mb-1">{item.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
        <div className="bg-card p-8 md:p-12 rounded-xl border border-border shadow-soft">
          <div className="mb-9">
            <span className="chapter-title text-xs mb-4 block">Your Trip</span>
            <h3 className="font-display text-2xl md:text-3xl mb-3">Request your free quote</h3>
            <p className="font-sans text-sm text-muted-foreground">
              The more you tell us, the closer the first draft will be. Every field except the details box is quick.
            </p>
          </div>
          <ContactForm />
          <p className="font-sans text-xs text-muted-foreground mt-6">
            Your details are used only to prepare your quote. We never sell or share them.
          </p>
        </div>

        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="bg-foreground text-background rounded-xl p-7">
            <h3 className="font-display text-xl mb-4">Prefer to talk it through?</h3>
            <div className="space-y-4">
              {contactCards.map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-3 group">
                  <c.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.6} />
                  <div>
                    <div className="font-sans text-xs uppercase tracking-widest text-background/60">{c.label}</div>
                    <div className="font-sans text-sm group-hover:text-accent transition-colors break-all">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <p className="font-sans text-xs text-background/60 mt-6">
              Consultants answer Mon–Fri 8am–6pm and Sat 9am–1pm (EAT). Travellers already on trip reach us 24/7.
            </p>
          </div>

          <div className="bg-sand-dark rounded-xl p-7">
            <h3 className="font-display text-lg mb-4">What happens next</h3>
            <ul className="space-y-3">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="font-sans text-sm text-foreground">{s.title}</div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const quoteFaqs = [
  {
    question: "How much does a quote cost?",
    answer: "Nothing. Quoting, itinerary design and revisions are free, and there is no obligation to book once you have the proposal in hand.",
  },
  {
    question: "How quickly will I hear back?",
    answer: "Within 24 hours on working days for most requests. Large group, conference or multi-country programmes take up to 48 hours because we verify availability and rates before quoting.",
  },
  {
    question: "Can you book flights only, or visas only?",
    answer: "Yes. We ticket flights, process visas, arrange travel insurance and book hotels as standalone services as well as within full packages.",
  },
];
