import { photos } from "@/assets/photos";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "best-time-to-visit-masai-mara",
    title: "When Is the Best Time to Visit the Masai Mara?",
    excerpt:
      "Migration season, green season, crowd levels and pricing — an honest month-by-month guide from the team that drives the Mara every week.",
    category: "Safaris",
    date: "August 2026",
    readTime: "6 min read",
    image: photos.safariElephant,
    imageAlt: "Paradise Vacations safari vehicle beside elephants in the Masai Mara",
    content: [
      {
        paragraphs: [
          "Ask ten safari websites when to visit the Masai Mara and you will get ten variations of 'anytime'. Technically true — the Mara has resident wildlife all year — but the experience, the crowds and the price change dramatically with the seasons. Here is how we advise our own clients.",
        ],
      },
      {
        heading: "July to October: the Migration",
        paragraphs: [
          "This is when over a million wildebeest and zebra cross from the Serengeti into the Mara, and the famous river crossings happen. It is spectacular — and it is also high season. Lodges fill six to twelve months ahead, rates are at their peak, and the popular crossing points can have queues of vehicles.",
          "Our advice: book early, stay at least three nights, and let your guide take you to the quieter northern conservancies where the wildlife is just as dense and the vehicle numbers are capped.",
        ],
      },
      {
        heading: "January to March: the secret season",
        paragraphs: [
          "Short rains have ended, the grass is low, and predators are easy to spot. This is arguably the best game viewing of the year, with far fewer vehicles than migration season and noticeably friendlier rates.",
        ],
      },
      {
        heading: "April to June: green season",
        paragraphs: [
          "Long rains turn the reserve emerald. Some camps close, roads can be soft, and you need a proper 4x4 — which is exactly what our fleet runs. For photographers and travellers who value solitude over guaranteed sightings, this is a beautiful and very affordable window.",
        ],
      },
      {
        paragraphs: [
          "Whichever season suits you, tell us your dates and budget and we will match you to the right camp and routing — we drive these roads every week.",
        ],
      },
    ],
  },
  {
    slug: "corporate-travel-policy-checklist",
    title: "The 10-Point Corporate Travel Policy Checklist",
    excerpt:
      "A practical checklist for HR and finance teams: what a workable travel policy must cover before your travellers ever reach the airport.",
    category: "Corporate Travel",
    date: "July 2026",
    readTime: "8 min read",
    image: photos.corporateLounge,
    imageAlt: "Business traveller working on a laptop in an airport lounge",
    content: [
      {
        paragraphs: [
          "Most travel policies fail for one of two reasons: they are so strict that staff book around them, or so vague that finance cannot audit them. After 14 years of managing travel for Kenyan organisations, here is the checklist we use when reviewing a client's policy.",
        ],
      },
      {
        heading: "The ten points",
        paragraphs: [
          "1. Booking channel — one approved channel, or leakage is guaranteed. 2. Advance purchase windows — e.g. domestic 7 days, international 14. 3. Cabin class rules by flight duration and seniority. 4. Hotel rate caps by city, reviewed annually. 5. Approval chain — who approves what, and what happens when they are travelling themselves. 6. Per diems and how they are paid. 7. Ground transport rules — transfers vs car hire. 8. Duty of care: traveller tracking and the emergency contact protocol. 9. Exception handling — who signs off, and how it is recorded. 10. An annual review date, with your travel partner in the room.",
        ],
      },
      {
        heading: "The part nobody writes down",
        paragraphs: [
          "A policy only works if the traveller's experience inside it is good. If booking within policy is harder than booking around it, compliance collapses. That is why we pair every policy with a named consultant — your staff email one person, and the policy is enforced quietly in the background.",
          "If you would like us to review your current policy — or draft one from scratch — the first consultation is free.",
        ],
      },
    ],
  },
  {
    slug: "kenya-visa-and-entry-guide",
    title: "Kenya Entry Requirements in 2026: Visas, eTA and Permits Explained",
    excerpt:
      "eTA vs visa, yellow fever certificates, work permits and special passes — a plain-language guide to entering Kenya legally and smoothly.",
    category: "Immigration",
    date: "July 2026",
    readTime: "7 min read",
    image: photos.visaStampPassport,
    imageAlt: "Passport with visa stamps",
    content: [
      {
        paragraphs: [
          "Kenya replaced most visitor visas with an Electronic Travel Authorisation (eTA), and the rules keep evolving. This is the plain-language version we give our clients — but because individual circumstances differ, always confirm your specific case before you fly.",
        ],
      },
      {
        heading: "Visitors: the eTA",
        paragraphs: [
          "Most nationalities now apply online for an eTA before travel instead of a traditional visa. Apply at least two weeks before departure, and carry a printed or digital copy of the approval. Your passport should be valid for at least six months beyond your entry date with two blank pages.",
          "Yellow fever vaccination certificates are required if you are arriving from a risk country, and recommended in general.",
        ],
      },
      {
        heading: "Working, investing or studying",
        paragraphs: [
          "An eTA does not permit employment. If you are taking up a job, running a project, investing or studying in Kenya, you need the correct permit or pass — work permits, special passes and student passes each have their own class and documentation requirements.",
          "This is where applications most often go wrong: the wrong class, incomplete supporting documents, or a sponsor letter that does not meet the required format. A properly prepared application moves significantly faster.",
        ],
      },
      {
        paragraphs: [
          "Our immigration desk handles assessments, applications, renewals and compliance calendars for individuals and sponsoring companies. A short consultation at the start saves months at the end.",
        ],
      },
    ],
  },
  {
    slug: "diani-vs-watamu-vs-lamu",
    title: "Diani, Watamu or Lamu? Choosing Your Kenyan Coast",
    excerpt:
      "Three very different beach experiences within one country. How to pick the right stretch of coast for your family, honeymoon or group.",
    category: "Beach Holidays",
    date: "June 2026",
    readTime: "5 min read",
    image: photos.beachWalk,
    imageAlt: "Traveller walking along a white sand beach on the Kenyan coast",
    content: [
      {
        paragraphs: [
          "Kenya's coast is not one destination — it is three very different holidays sharing one shoreline. Choosing the wrong one is the most common mistake we see in beach bookings.",
        ],
      },
      {
        heading: "Diani: the all-rounder",
        paragraphs: [
          "South of Mombasa, Diani has the widest choice of resorts, restaurants and activities — skydiving, kite surfing, golf, and the famous Kongo river sunset. Best for families and first-timers who want everything within easy reach.",
        ],
      },
      {
        heading: "Watamu: the quiet reef",
        paragraphs: [
          "A protected marine park with some of the best snorkelling and diving in East Africa, Italian-influenced dining, and a slow, village feel. Best for couples and anyone whose priority is the water itself.",
        ],
      },
      {
        heading: "Lamu: the timeless island",
        paragraphs: [
          "No cars, donkeys and dhows instead, and a UNESCO-listed old town of coral-stone houses. Lamu is a cultural experience as much as a beach one — best for travellers who have 'done' beach resorts and want something they will talk about for years.",
        ],
      },
      {
        paragraphs: [
          "Can't decide? Many of our clients split a week between two of them — the connections are short and we handle every transfer.",
        ],
      },
    ],
  },
  {
    slug: "what-a-dmc-does",
    title: "What Does a DMC Actually Do? A Guide for Operators and Event Planners",
    excerpt:
      "If you are bringing a group to Kenya, the destination management company is the difference between a programme and a liability. Here is what to expect from a good one.",
    category: "DMC",
    date: "June 2026",
    readTime: "6 min read",
    image: photos.safariFleet,
    imageAlt: "Paradise Vacations branded safari fleet on a savannah track",
    content: [
      {
        paragraphs: [
          "A destination management company is the local operator behind your programme. While you sell and host, the DMC holds the supplier contracts, the fleet, the guides, the permits — and the responsibility for every movement between arrival and departure.",
        ],
      },
      {
        heading: "What a good DMC owns",
        paragraphs: [
          "Logistics: airport meet-and-greet, transfers, rooming lists, registration desks. Content: excursions, dine-arounds, gala venues, team-building. Compliance: licensed vehicles, insured guides, park permits, and risk assessments your legal team will actually accept. And accountability: one contract, one invoice, one phone number when something changes at midnight.",
        ],
      },
      {
        heading: "The questions to ask before you sign",
        paragraphs: [
          "Ask for net rates in writing and a clear commission structure. Ask how coordinator numbers scale with group size. Ask who answers the phone at 2am — and test it. A DMC that hesitates on any of these is telling you something.",
          "We work behind tour operators, PCOs and corporate event teams across Kenya and into Tanzania, Uganda and Rwanda — confidentially, and never around your client.",
        ],
      },
    ],
  },
  {
    slug: "kenya-tea-buyer-sourcing-trip",
    title: "Inside a Kenya Tea Sourcing Trip: What Buyers Actually Do",
    excerpt:
      "Factory floors, cupping tables and the Mombasa auction — what a well-run tea buyer visit to Kericho, Nandi and Bomet looks like, day by day.",
    category: "Tea Tourism",
    date: "May 2026",
    readTime: "7 min read",
    image: photos.dunesLamu,
    imageAlt: "Traveller on golden dunes at sunset",
    content: [
      {
        paragraphs: [
          "Buying Kenyan tea from a catalogue is one thing. Standing on the factory floor in Kericho while your grade is being withered, rolled and fired — and cupping it the same afternoon — is another. Here is what a sourcing trip with us actually involves.",
        ],
      },
      {
        heading: "The working days",
        paragraphs: [
          "Most buyers visit three to six factories across Kericho, Nandi, Bomet, Murang'a and Limuru. Each visit includes the field, the production floor, a formal cupping session, and time with the export and logistics team — so you understand documentation, shipping timelines and customs before you commit.",
          "Appointments are scheduled directly with factory management in advance. You are not a tourist walking through; you are a buyer with a schedule.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Entry visa, flights, private ground transport, accommodation near the factories, interpreter support where needed, and introductions with local market context. Price and supply discussions stay between you and the factory — we facilitate, we do not take a position.",
        ],
      },
      {
        paragraphs: [
          "And because no one should fly home from Kenya without seeing it, most buyers add a two-day Maasai Mara or coast escape before their departure. We think you have earned it.",
        ],
      },
    ],
  },
];
