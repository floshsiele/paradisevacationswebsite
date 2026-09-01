import { ShieldCheck, Clock4, Award, Wallet } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "14 Years of Experience",
    text: "Trusted by corporates, schools and travellers across Kenya and beyond since 2012.",
  },
  {
    icon: Clock4,
    title: "24/7 Traveller Support",
    text: "A real consultant on the phone, wherever you are in the world.",
  },
  {
    icon: Wallet,
    title: "Best-Fare Guarantee",
    text: "Negotiated airline and hotel rates, quoted with zero hidden fees.",
  },
  {
    icon: ShieldCheck,
    title: "Hassle-Free Rebooking Support",
    text: "Plans change — we're here to help. Our team handles re-issuing and re-routing your ticket quickly, with clear guidance on any airline fees involved.",
  },
];

export function TrustBar() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p) => (
          <div key={p.title} className="flex items-start gap-3">
            <p.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.6} />
            <div>
              <div className="font-sans text-sm font-semibold text-foreground">{p.title}</div>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-1">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
