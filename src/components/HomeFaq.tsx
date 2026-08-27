import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const homeFaqs = [
  {
    question: "How fast will I get a quote?",
    answer:
      "Most enquiries are quoted within 24 hours on business days, and urgent corporate ticketing is usually turned around within the hour. Every quote is itemised so you can see exactly what you are paying for.",
  },
  {
    question: "Do you charge a fee just to plan a trip?",
    answer:
      "No. Planning, itinerary design and quoting are free. You only pay once you confirm, and the price you approve is the price you pay — taxes and service charges included.",
  },
  {
    question: "Can you handle visas, insurance and travel documents?",
    answer:
      "Yes. We prepare and lodge visa applications, arrange travel insurance, advise on vaccination and entry requirements, and track every application until it is issued.",
  },
  {
    question: "What happens if my flight is cancelled or delayed?",
    answer:
      "Call our 24/7 emergency line. A consultant re-routes or re-issues your ticket, rebooks affected hotels and transfers, and keeps your office or family informed. There is no agency penalty for disruption rebooking.",
  },
  {
    question: "Do you work with schools and large groups?",
    answer:
      "Regularly. We run international educational trips, conference logistics and incentive travel with manifests, rooming lists, chaperone briefings, risk assessments and dedicated on-ground coordinators.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. Leisure packages can be secured with a deposit and paid down in scheduled instalments before departure. Corporate clients can be set up on approved credit terms with monthly consolidated invoicing.",
  },
];

export function HomeFaq() {
  return (
    <section className="py-20 px-6 md:px-16 bg-sand-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="chapter-title text-xs mb-4 block">Before You Ask</span>
          <h2 className="font-display text-3xl md:text-5xl">Questions we hear every day</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((faq, i) => (
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
