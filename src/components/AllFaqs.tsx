import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqGroups } from "@/data/faqs";

export function AllFaqs() {
  const [active, setActive] = useState(faqGroups[0].id);
  const group = faqGroups.find((g) => g.id === active) ?? faqGroups[0];

  return (
    <section id="faqs" className="scroll-mt-28 py-20 px-6 md:px-16 bg-sand-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="chapter-title text-xs mb-4 block">Everything In One Place</span>
          <h2 className="font-display text-3xl md:text-5xl">Frequently asked questions</h2>
          <p className="font-sans text-muted-foreground mt-4 max-w-2xl mx-auto">
            Answers on booking, safaris, corporate travel, destination management, visas and tea buyer tours — all on
            this page.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs tracking-widest uppercase border transition-colors ${
                g.id === active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <h3 className="font-display text-2xl md:text-3xl mb-4">{group.heading}</h3>
        <Accordion type="single" collapsible className="w-full">
          {group.faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`${group.id}-${i}`}>
              <AccordionTrigger className="font-display text-left text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
