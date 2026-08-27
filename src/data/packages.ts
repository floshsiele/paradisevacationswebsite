export type TravelPackage = {
  slug: string;
  name: string;
  category: "Inbound" | "Outbound" | "Educational" | "Corporate";
  duration: string;
  destination: string;
  priceFrom: string;
  summary: string;
  image: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  includes: string[];
  excludes: string[];
  bestTime: string;
};

export const packages: TravelPackage[] = [
  {
    slug: "masai-mara-safari",
    name: "Masai Mara Classic Safari",
    category: "Inbound",
    duration: "3 Days / 2 Nights",
    destination: "Masai Mara National Reserve, Kenya",
    priceFrom: "USD 620 per person",
    summary:
      "Kenya's most iconic reserve — big cats, endless plains, and the Great Migration river crossings in season.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=85",
    highlights: [
      "Full-day game drives in a 4x4 pop-top land cruiser",
      "Great Migration viewing (July – October)",
      "Optional Maasai village cultural visit",
      "Sundowner on the plains",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi to Masai Mara", description: "Depart Nairobi in the morning, arrive for lunch at your camp, then an afternoon game drive." },
      { day: "Day 2", title: "Full Day in the Mara", description: "Dawn and afternoon game drives across the Mara Triangle with a picnic lunch in the bush." },
      { day: "Day 3", title: "Return to Nairobi", description: "Early morning game drive, breakfast, then a scenic drive back to Nairobi." },
    ],
    includes: ["Transport in 4x4 safari vehicle", "Full board accommodation", "Park entry fees", "Professional driver-guide", "Bottled water"],
    excludes: ["International flights", "Visas", "Balloon safari", "Tips and personal items"],
    bestTime: "July to October for the migration; June to March for general game viewing.",
  },
  {
    slug: "amboseli-kilimanjaro",
    name: "Amboseli & Kilimanjaro Views",
    category: "Inbound",
    duration: "3 Days / 2 Nights",
    destination: "Amboseli National Park, Kenya",
    priceFrom: "USD 540 per person",
    summary:
      "Great herds of elephants framed by the snow-capped peak of Mount Kilimanjaro — the classic African photograph.",
    image: "https://images.unsplash.com/photo-1523805009345-7448843a9fbc?w=1600&q=85",
    highlights: [
      "Large elephant herds at close range",
      "Kilimanjaro sunrise views",
      "Observation Hill panorama",
      "Birdlife across Amboseli swamps",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi to Amboseli", description: "Morning departure via Namanga, lunch at the lodge, afternoon game drive." },
      { day: "Day 2", title: "Amboseli Full Day", description: "Sunrise drive for Kilimanjaro views, midday rest, afternoon drive to the swamps." },
      { day: "Day 3", title: "Amboseli to Nairobi", description: "Morning game drive and breakfast before returning to Nairobi." },
    ],
    includes: ["Road transport", "Full board lodge stay", "Park fees", "Driver-guide", "Drinking water"],
    excludes: ["Flights", "Alcoholic drinks", "Cultural village fees", "Gratuities"],
    bestTime: "June to October and January to February for the clearest mountain views.",
  },
  {
    slug: "diani-beach-escape",
    name: "Diani Beach Escape",
    category: "Inbound",
    duration: "4 Days / 3 Nights",
    destination: "Diani, Kenyan South Coast",
    priceFrom: "USD 480 per person",
    summary:
      "White sand, warm Indian Ocean water, and the relaxed rhythm of Kenya's most-loved beach destination.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85",
    highlights: [
      "Beachfront resort stay",
      "Snorkelling at Kisite Marine Park",
      "Dhow sunset cruise",
      "Optional Shimba Hills day trip",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Diani", description: "Airport transfer from Ukunda, check in and free afternoon on the beach." },
      { day: "Day 2", title: "Marine Park Excursion", description: "Full-day dhow trip with snorkelling and a seafood lunch on Wasini Island." },
      { day: "Day 3", title: "Leisure Day", description: "Free day for watersports, spa treatments, or a Shimba Hills safari add-on." },
      { day: "Day 4", title: "Departure", description: "Breakfast, check out, and transfer to the airport." },
    ],
    includes: ["Airport transfers", "Half board beachfront accommodation", "Dhow excursion", "Marine park fees"],
    excludes: ["Domestic flights", "Watersports equipment hire", "Spa treatments", "Tips"],
    bestTime: "December to March and July to October.",
  },
  {
    slug: "dubai-city-break",
    name: "Dubai City Break",
    category: "Outbound",
    duration: "5 Days / 4 Nights",
    destination: "Dubai, United Arab Emirates",
    priceFrom: "USD 950 per person",
    summary:
      "Skyscrapers, desert dunes, and world-class shopping — an easy, high-impact getaway from Nairobi.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85",
    highlights: [
      "Burj Khalifa At the Top ticket",
      "Desert safari with BBQ dinner",
      "Dubai Marina dhow cruise",
      "Half-day city tour",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival", description: "Meet and greet at DXB, transfer to hotel, evening at leisure." },
      { day: "Day 2", title: "City Tour", description: "Old Dubai, the souks, Palm Jumeirah, and Burj Khalifa observation deck." },
      { day: "Day 3", title: "Desert Safari", description: "Dune bashing, camel ride, henna, and a barbecue dinner under the stars." },
      { day: "Day 4", title: "Free Day", description: "Shopping at Dubai Mall or an optional Abu Dhabi excursion." },
      { day: "Day 5", title: "Departure", description: "Breakfast and airport transfer." },
    ],
    includes: ["Return flights", "4-star hotel with breakfast", "All listed tours", "Airport transfers", "Visa processing"],
    excludes: ["Travel insurance", "Lunches and dinners not listed", "Optional excursions"],
    bestTime: "November to March.",
  },
  {
    slug: "zanzibar-getaway",
    name: "Zanzibar Island Getaway",
    category: "Outbound",
    duration: "5 Days / 4 Nights",
    destination: "Zanzibar, Tanzania",
    priceFrom: "USD 890 per person",
    summary:
      "Spice markets, Stone Town history, and turquoise water on the north-east coast of the island.",
    image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1600&q=85",
    highlights: [
      "Stone Town heritage walk",
      "Spice farm tour",
      "Nakupenda sandbank trip",
      "Beachfront resort stay in Nungwi",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival", description: "Fly Nairobi to Zanzibar, transfer to the north coast resort." },
      { day: "Day 2", title: "Stone Town & Spices", description: "Guided Stone Town tour followed by a spice farm visit and local lunch." },
      { day: "Day 3", title: "Sandbank & Snorkelling", description: "Boat trip to Nakupenda sandbank with snorkelling and grilled seafood." },
      { day: "Day 4", title: "Beach Day", description: "Free day for diving, kite surfing, or simply the beach." },
      { day: "Day 5", title: "Departure", description: "Transfer to Zanzibar airport for your flight home." },
    ],
    includes: ["Return flights", "Half board resort stay", "Listed excursions", "Transfers"],
    excludes: ["Zanzibar infrastructure tax", "Travel insurance", "Drinks", "Tips"],
    bestTime: "June to October and December to February.",
  },
  {
    slug: "corporate-incentive-retreat",
    name: "Corporate Incentive Retreat",
    category: "Corporate",
    duration: "2 Days / 1 Night",
    destination: "Naivasha or Nanyuki, Kenya",
    priceFrom: "USD 260 per delegate",
    summary:
      "Team offsites and incentive trips with meeting facilities, activities, and logistics handled end-to-end.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85",
    highlights: [
      "Conference room with full AV setup",
      "Team-building activities",
      "Boat ride or game drive experience",
      "Dedicated on-site coordinator",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & Sessions", description: "Group transport from Nairobi, arrival tea, meeting sessions and lunch, evening team activity and dinner." },
      { day: "Day 2", title: "Activity & Return", description: "Morning session, excursion or game drive, lunch, and return transfer to Nairobi." },
    ],
    includes: ["Group transport", "Full board accommodation", "Conference package", "Coordinator", "Activity fees"],
    excludes: ["Extra nights", "Personal expenses", "Alcoholic beverages"],
    bestTime: "Year round, subject to venue availability.",
  },
  {
    slug: "uk-educational-trip",
    name: "United Kingdom Educational Trip",
    category: "Educational",
    duration: "7 Days / 6 Nights",
    destination: "London, Oxford & Cambridge, United Kingdom",
    priceFrom: "USD 2,450 per student",
    summary:
      "A structured study tour for schools and colleges combining university campus visits, museums and guided history walks across London, Oxford and Cambridge.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=85",
    highlights: [
      "Guided visits to Oxford and Cambridge colleges",
      "British Museum and Science Museum sessions",
      "University admissions and careers talks",
      "Teacher-to-student ratio planning and full supervision",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in London", description: "Airport meet-and-greet, transfer to student accommodation, orientation and welcome briefing." },
      { day: "Day 2", title: "London Landmarks", description: "Guided walk through Westminster, Big Ben and the South Bank with a history-focused guide." },
      { day: "Day 3", title: "Museums Day", description: "British Museum in the morning and Science Museum workshops in the afternoon." },
      { day: "Day 4", title: "Oxford Campus Visit", description: "Day trip to Oxford with college tours and an admissions information session." },
      { day: "Day 5", title: "Cambridge Campus Visit", description: "Day trip to Cambridge, punting on the Cam and a student-life Q&A." },
      { day: "Day 6", title: "Careers & Culture", description: "Careers talk, Greenwich Observatory visit and a group reflection session." },
      { day: "Day 7", title: "Departure", description: "Free morning for shopping, then transfer to the airport for the flight home." },
    ],
    includes: ["Return international flights", "Student accommodation with breakfast and dinner", "All ground transport", "Entrance fees for listed sites", "Tour manager throughout", "Group travel insurance"],
    excludes: ["Visa fees", "Lunches", "Personal spending", "Optional excursions"],
    bestTime: "April, July and October, aligned with school holidays and university open days.",
  },
  {
    slug: "dubai-stem-study-tour",
    name: "Dubai STEM & Innovation Study Tour",
    category: "Educational",
    duration: "5 Days / 4 Nights",
    destination: "Dubai, United Arab Emirates",
    priceFrom: "USD 1,380 per student",
    summary:
      "A short-format international educational trip built around science, technology and innovation — ideal for high school and college STEM groups.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85",
    highlights: [
      "Museum of the Future and Dubai Frame visits",
      "Sustainable City and clean-energy site tour",
      "University campus visit and admissions session",
      "Desert ecology and conservation activity",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & Orientation", description: "Airport transfer, hotel check-in and an evening orientation walk at Dubai Marina." },
      { day: "Day 2", title: "Museum of the Future", description: "Guided innovation-focused visit followed by a robotics and AI workshop." },
      { day: "Day 3", title: "Sustainability Day", description: "Tour of the Sustainable City and a solar-energy briefing, then Dubai Frame." },
      { day: "Day 4", title: "Campus & Desert Ecology", description: "Morning university campus visit, afternoon desert conservation and astronomy session." },
      { day: "Day 5", title: "Departure", description: "Group debrief, souvenir stop and transfer to the airport." },
    ],
    includes: ["Return flights from Nairobi", "Hotel accommodation on half board", "Air-conditioned group transport", "All listed entrance fees and workshops", "Tour manager and local guides", "Group travel insurance"],
    excludes: ["UAE visa fees", "Lunches", "Personal spending", "Optional theme-park add-ons"],
    bestTime: "November to March, when Dubai temperatures are comfortable for group activities.",
  },
];

export const getPackage = (slug?: string) => packages.find((p) => p.slug === slug);

export type PackageFaq = { question: string; answer: string };

/** FAQs generated from each package's own itinerary, pricing and inclusion data. */
export const getPackageFaqs = (pkg: TravelPackage): PackageFaq[] => [
  {
    question: `How long is the ${pkg.name} and where does it go?`,
    answer: `${pkg.name} runs ${pkg.duration.toLowerCase()} and covers ${pkg.destination}. ${pkg.summary}`,
  },
  {
    question: `How much does the ${pkg.name} cost?`,
    answer: `Pricing starts from ${pkg.priceFrom}. The final quote depends on your travel dates, group size and choice of accommodation — send us your dates and we will confirm exact rates.`,
  },
  {
    question: "What is included in the price?",
    answer: `The package price covers ${pkg.includes.join(", ").toLowerCase()}.`,
  },
  {
    question: "What is not included?",
    answer: `Not included: ${pkg.excludes.join(", ").toLowerCase()}. We can quote most of these separately if you need them.`,
  },
  {
    question: "When is the best time to travel?",
    answer: pkg.bestTime,
  },
  {
    question: "Can the itinerary be customised?",
    answer: `Yes. The ${pkg.itinerary.length}-day schedule is a starting point — we can add or remove days, change lodges, adjust the pace and build private departures for families, couples or corporate groups.`,
  },
  {
    question: "How do I book and what are the payment terms?",
    answer: "Request a quote or message us on WhatsApp with your dates and traveller numbers. Bookings are confirmed with a deposit, with the balance due before travel; we will share the exact schedule with your quote.",
  },
];
