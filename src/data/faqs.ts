import type { Faq } from "@/components/FaqBlock";
import { homeFaqs, safariFaqs } from "@/components/HomeFaq";

export const companyFaqs: Faq[] = [
  {
    question: "Who is Paradise Vacations Kenya?",
    answer:
      "We are a Nairobi-based, Kenyan-owned travel house offering corporate travel management, inbound safaris and beach holidays, outbound tours, international educational trips and destination management services for visiting operators and organisers.",
  },
  {
    question: "Where are you based and can I visit you?",
    answer:
      "Our office is at Occidental Plaza, 3rd floor, Muthithi Road, Westlands, Nairobi. Walk-ins are welcome during business hours, and we are happy to come to your offices for corporate programme reviews.",
  },
  {
    question: "What makes you different from booking online myself?",
    answer:
      "Online tools sell you a seat. We manage the whole trip: negotiated fares, policy compliance, visas, insurance, ground logistics, and a human being who fixes it when something goes wrong at midnight in another time zone.",
  },
  {
    question: "Are you licensed and accredited?",
    answer:
      "Yes. Paradise Vacations Kenya is fully licensed and accredited by the leading international and Kenyan travel and tourism bodies, with 14 years of operating experience. You'll find our certification logos on the home page.",
  },
];

export const corporateFaqs: Faq[] = [
  {
    question: "How much does corporate travel management cost us?",
    answer:
      "There is no subscription or platform fee for standard managed accounts. We are remunerated through supplier arrangements and, where applicable, a transparent transaction fee agreed in your service contract before you sign. Every quote you receive is itemised.",
  },
  {
    question: "How quickly can you issue an urgent ticket?",
    answer:
      "Within the hour during business hours, and any time of night through the 24/7 duty desk for accounts with emergency authorisation on file. We can hold fares while your internal approval runs.",
  },
  {
    question: "Do we have to change our travel policy or systems?",
    answer:
      "No. We work inside your existing policy and approval chain, and we can help redraft it if you want. There is no software for your staff to learn — they email or call the desk and we handle the rest.",
  },
  {
    question: "Can you offer credit terms and consolidated invoicing?",
    answer:
      "Yes. Approved corporate accounts are set up with credit terms and a single monthly invoice reconciled to your cost centres, replacing dozens of individual supplier receipts.",
  },
  {
    question: "How do you handle duty of care?",
    answer:
      "We maintain live traveller itineraries, share them with your nominated safety contact, and coordinate medical referrals, evacuations and emergency rerouting through our duty desk.",
  },
  {
    question: "What happens when a trip goes wrong at 2am?",
    answer:
      "You call the emergency line and a consultant re-routes or re-issues the ticket, rebooks affected hotels and transfers, and informs your office. There is no agency penalty for disruption rebooking.",
  },
];

export const dmcFaqs: Faq[] = [
  {
    question: "What exactly does a DMC do?",
    answer:
      "A destination management company is the local operator behind your programme. We hold the supplier relationships, the fleet, the guides and the permits, and we take responsibility for every movement between arrival and departure — so your team sells and hosts while we deliver.",
  },
  {
    question: "Do you offer net rates to overseas operators?",
    answer:
      "Yes. Trade partners receive confidential net rates with a clear commission structure, plus imagery and itinerary copy your own sales team can market from. We never sell around a partner's client.",
  },
  {
    question: "Which destinations do you cover?",
    answer:
      "Kenya end to end — Nairobi, Masai Mara, Amboseli, Samburu, Lake Nakuru, Naivasha, Tsavo, Diani, Watamu and Lamu — plus cross-border programmes into Tanzania, Uganda and Rwanda through vetted partners.",
  },
  {
    question: "What size of group can you handle?",
    answer:
      "From a two-person luxury circuit to conferences of 400+ delegates. Fleet, guides, rooming and registration scale with the brief, and coordinator numbers are set by group size rather than by budget.",
  },
  {
    question: "How fast is a ground quote?",
    answer:
      "Standard programmes are costed within 48 hours. Complex multi-country or large-conference briefs typically take three to five working days including venue inspections.",
  },
  {
    question: "Are your vehicles and guides licensed and insured?",
    answer:
      "Yes. Vehicles are serviced, insured, tracked and checked daily. Driver-guides are licensed and KPSGA-standard, briefed on your specific itinerary before departure.",
  },
];

export const immigrationFaqs: Faq[] = [
  {
    question: "Which Kenya visa or permit do I need?",
    answer:
      "It depends on your purpose — tourism, employment, investment, study or family. In a short consultation we assess your situation and recommend the correct visa or permit class before any application is lodged, so you don't pay for the wrong one.",
  },
  {
    question: "How long does a Kenya work permit take?",
    answer:
      "Timelines vary by permit class and the completeness of the application. Properly prepared applications move significantly faster; we give you a realistic timeline at the outset and update you at every stage.",
  },
  {
    question: "Can you help companies sponsoring foreign staff?",
    answer:
      "Yes. We manage the full sponsorship process — work permits, special passes, renewals and compliance calendars — for HR and admin teams, whether for one hire or an entire project team.",
  },
  {
    question: "Do you handle visa renewals and extensions?",
    answer:
      "Yes. We handle renewals and extensions for visas and permits, and we diarise expiry dates for ongoing clients so nothing lapses.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. Immigration matters involve sensitive personal and corporate documents. Everything you share with us is handled confidentially and professionally, from first consultation to approval.",
  },
];

export const teaFaqs: Faq[] = [
  {
    question: "Who are Kenya tea tourism trips designed for?",
    answer:
      "International tea buyers, importers, distributors, blenders and serious enthusiasts who want to inspect, cup and select Kenyan tea at source before committing to a purchase.",
  },
  {
    question: "How many tea factories will I visit?",
    answer:
      "We partner with 10+ factories across Kericho, Nandi, Bomet, Murang'a and the Rift Valley. Most buyers visit three to six factories in a single trip.",
  },
  {
    question: "Do you handle my visa and flights?",
    answer:
      "Yes. We prepare your Kenya entry visa, book international and domestic flights, and arrange private ground transport.",
  },
  {
    question: "Can you help with price negotiation?",
    answer:
      "We facilitate introductions, provide local market context and support price and supply discussions. The contract remains between you and the factory.",
  },
  {
    question: "Will I meet the team responsible for exporting my tea?",
    answer:
      "Yes. We arrange time with the factory's export and logistics team so you understand documentation, shipping timelines and customs processes.",
  },
  {
    question: "Can I add a Maasai Mara or coast getaway?",
    answer:
      "Yes — add an optional two-day Maasai Mara or Kenyan Coast vacation before your departure flight.",
  },
];

export const faqGroups: { id: string; label: string; heading: string; faqs: Faq[] }[] = [
  { id: "company", label: "About us", heading: "About Paradise Vacations", faqs: companyFaqs },
  { id: "general", label: "Booking & planning", heading: "Booking, quotes and payments", faqs: homeFaqs },
  { id: "safari", label: "Safaris & packages", heading: "Kenya safari and package travel", faqs: safariFaqs },
  { id: "corporate", label: "Corporate travel", heading: "Corporate travel management", faqs: corporateFaqs },
  { id: "dmc", label: "DMC", heading: "Destination management", faqs: dmcFaqs },
  { id: "immigration", label: "Immigration", heading: "Visas and permits", faqs: immigrationFaqs },
  { id: "tea", label: "Tea tourism", heading: "Tea buyer tours", faqs: teaFaqs },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);
