import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type Faq = { question: string; answer: string };

export function FaqBlock({
  faqs,
  eyebrow = "Before You Ask",
  heading = "Frequently asked questions",
  tone = "sand",
}: {
  faqs: Faq[];
  eyebrow?: string;
  heading?: string;
  tone?: "sand" | "plain";
}) {
  return (
    <section className={`py-20 px-6 md:px-16 ${tone === "sand" ? "bg-sand-dark" : "bg-background"}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="chapter-title text-xs mb-4 block">{eyebrow}</span>
          <h2 className="font-display text-3xl md:text-5xl">{heading}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
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

export const faqPageJsonLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});
