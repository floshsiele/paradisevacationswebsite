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

export const safariFaqs = [
  {
    question: "Do I need a visa to travel to Kenya?",
    answer:
      "Yes. Most travellers need an eVisa to enter Kenya, which must be applied for online before arrival. Ensure your passport is valid for at least 6 months from your entry date. We can assist with the application if needed.",
  },
  {
    question: "What vaccinations or health precautions are required?",
    answer:
      "Recommended vaccinations include Yellow Fever (mandatory if arriving from a risk country), Typhoid, Hepatitis A & B, Tetanus and COVID-19. Malaria prophylaxis is strongly advised. Consult your doctor or travel clinic 4–6 weeks before departure.",
  },
  {
    question: "Is it safe to travel in Kenya for safari?",
    answer:
      "Yes, Kenya is generally safe for tourists, especially in national parks and reserves. We recommend travelling with a licensed tour operator, avoiding isolated areas at night, and following your guide's local guidance.",
  },
  {
    question: "When is the best time to go on safari in Kenya?",
    answer:
      "Kenya is a year-round destination. July–October is ideal for the Wildebeest Migration in the Masai Mara, while January–March offers dry-season wildlife viewing. Rainy seasons (April–May, November) bring fewer crowds and beautiful landscapes.",
  },
  {
    question: "Can I see the Big Five in Kenya?",
    answer:
      "Yes. Kenya is home to the Big Five — lion, elephant, buffalo, leopard and rhino — especially in the Masai Mara, Amboseli, Tsavo and Lake Nakuru.",
  },
  {
    question: "What types of accommodation are available on safari?",
    answer:
      "We offer luxury lodges and tented camps, mid-range lodges and budget camping options. All our properties are handpicked for comfort, safety and location.",
  },
  {
    question: "How long should my safari be?",
    answer:
      "A typical safari lasts 5–7 days, covering 2–3 major parks. We can customise your itinerary to fit your schedule and interests.",
  },
  {
    question: "What is included in a safari package?",
    answer:
      "Most packages include accommodation, meals as per the itinerary, park entry fees, transport in a 4x4 safari vehicle, a professional driver-guide and bottled water during game drives. Flights, visas, insurance and tips are usually excluded unless specified.",
  },
  {
    question: "What should I pack for a Kenya safari?",
    answer:
      "Pack neutral-coloured clothing (long-sleeved for sun and insect protection), a sunhat, sunglasses, sunscreen, a light jacket or fleece for early mornings, binoculars, a camera, a power bank, and personal medications. Avoid camouflage clothing and dark blue, which attracts tsetse flies.",
  },
  {
    question: "What currency is used in Kenya?",
    answer:
      "The official currency is the Kenyan Shilling (KES). Credit cards are accepted at most lodges, but we recommend carrying some cash for tipping or local purchases. ATMs are available in major towns and airports.",
  },
  {
    question: "Is tipping expected in Kenya?",
    answer:
      "Tipping is appreciated but not mandatory. A fair guideline is USD 10–20 per day for your driver-guide (per group) and USD 1–5 per service for hotel staff and porters. Tips can be given in KES or USD.",
  },
  {
    question: "Will I have internet access during safari?",
    answer:
      "Most lodges offer Wi-Fi in common areas, although signal strength can vary in remote areas. Safaris are also a great opportunity to unplug and enjoy nature.",
  },
  {
    question: "Can children go on safari?",
    answer:
      "Yes. Many lodges are family-friendly and offer kids' programmes. Some parks and lodges have minimum age restrictions, so let us know in advance when travelling with children.",
  },
  {
    question: "What language is spoken in Kenya?",
    answer:
      "The official languages are English and Swahili. All our guides are fluent in English, and many speak other international languages upon request.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "Yes, comprehensive travel insurance is highly recommended. It should cover medical emergencies, trip cancellations, baggage loss and safari-related activities.",
  },
  {
    question: "Can I customise my safari itinerary?",
    answer:
      "Absolutely. All our itineraries are fully customisable based on your interests, budget, travel dates and group size.",
  },
  {
    question: "Are dietary requirements accommodated?",
    answer:
      "Yes. Vegetarian, vegan, gluten-free, halal and other special diets can be accommodated. Please inform us in advance so we can notify lodges and camps.",
  },
  {
    question: "What kind of safari vehicles do you use?",
    answer:
      "We use 4x4 custom safari land cruisers with pop-up roofs for better wildlife viewing. Vehicles are well maintained, spacious and driven by experienced, licensed guides.",
  },
  {
    question: "What happens in case of an emergency during safari?",
    answer:
      "We have emergency evacuation protocols in place, and many safari packages include AMREF Flying Doctors cover for medical emergencies. Our team is available 24/7 during your trip.",
  },
  {
    question: "How do I book my safari?",
    answer:
      "You can book directly through our website, via email, or through our SafariBookings.com listing. A deposit is required to secure your tour, with full payment due prior to travel.",
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

        <div className="text-center mt-16 mb-10">
          <span className="chapter-title text-xs mb-4 block">Safari Travel</span>
          <h3 className="font-display text-2xl md:text-4xl">Kenya safari FAQs</h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {safariFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`safari-faq-${i}`}>
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
