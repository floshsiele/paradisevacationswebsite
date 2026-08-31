import { photos } from "@/assets/photos";
import teaFactory from "@/assets/tea-factory-tour.jpg";
import teaCupping from "@/assets/tea-cupping-session.jpg";

export type PackageRate = { label: string; solo?: string; sharing: string };

export type TravelPackage = {
  slug: string;
  name: string;
  category: "Inbound" | "Outbound" | "Educational" | "Corporate";
  duration: string;
  destination: string;
  priceFrom: string;
  /** Optional published seasonal rate card (per person). */
  rates?: PackageRate[];
  summary: string;
  image: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  includes: string[];
  excludes: string[];
  bestTime: string;
};

export const packages: TravelPackage[] = [
  /* ---------------------------------------------------------------
   * NON-RESIDENT SAFARI PACKAGES
   * ------------------------------------------------------------- */
  {
    slug: "masai-mara-lake-nakuru-4-day",
    name: "4-Day Masai Mara & Lake Nakuru Safari",
    category: "Inbound",
    duration: "4 Days / 3 Nights",
    destination: "Masai Mara National Reserve & Lake Nakuru National Park, Kenya",
    priceFrom: "USD 1,235 per person",
    rates: [
      { label: "Low season (January – June)", solo: "USD 1,831", sharing: "USD 1,235" },
      { label: "High season (July – December)", solo: "USD 2,360", sharing: "USD 1,820" },
    ],
    summary:
      "A memorable four-day Kenya safari combining the famous Masai Mara National Reserve with Lake Nakuru National Park — Big Five game viewing, flamingos, rhinos and scenic Great Rift Valley drives.",
    image: photos.safariConvoy,
    highlights: [
      "Morning and afternoon game drives in the Masai Mara",
      "Great Wildebeest Migration viewing between July and October",
      "Rhinos, flamingos and rich birdlife at Lake Nakuru",
      "Scenic drives through the Great Rift Valley",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Masai Mara National Reserve", description: "Morning pick-up from Nairobi and a scenic drive through the Great Rift Valley to Masai Mara, arriving in time for lunch at Jambo Mara Lodge. Afternoon game drive, then dinner and overnight at the lodge." },
      { day: "Day 2", title: "Full Day in Masai Mara", description: "Morning and afternoon game drives with a picnic lunch, searching for the Big Five and other wildlife across the vast plains. Return to the lodge for dinner and overnight." },
      { day: "Day 3", title: "Masai Mara – Lake Nakuru National Park", description: "After breakfast, depart for Lake Nakuru, arriving around lunchtime at Lake Nakuru Sopa Lodge. Afternoon game drive to see flamingos, rhinos and other wildlife before dinner and overnight." },
      { day: "Day 4", title: "Lake Nakuru – Nairobi", description: "Early morning game drive in Lake Nakuru National Park, famous for rhinos and birdlife. After breakfast, drive back to Nairobi, arriving in the afternoon." },
    ],
    includes: [
      "4x4 safari vehicle with pop-up roof",
      "Professional English-speaking driver-guide",
      "3 nights lodge accommodation",
      "Park entrance fees (Masai Mara & Lake Nakuru)",
      "Meals as per itinerary",
      "Government taxes and levies",
    ],
    excludes: [
      "International flights",
      "Optional activities (hot air balloon safari, snorkelling, etc.)",
      "Travel insurance",
      "Personal expenses and tips",
    ],
    bestTime: "July to October for the Great Migration; January to June for lower season rates and excellent general game viewing.",
  },
  {
    slug: "sopa-lodges-6-day-safari",
    name: "6-Day Across Sopa Lodges Safari",
    category: "Inbound",
    duration: "6 Days / 5 Nights",
    destination: "Amboseli, Lake Naivasha, Lake Nakuru & Masai Mara, Kenya",
    priceFrom: "USD 1,844 per person",
    rates: [
      { label: "Low season (01 April – 31 May 2026)", sharing: "USD 1,844" },
      { label: "Shoulder season (02 Jan – 31 Mar, 01 – 30 Jun, 01 Nov – 21 Dec)", sharing: "USD 1,985" },
      { label: "High season (01 Jul – 31 Oct 2026 & 22 Dec 2026 – 01 Jan 2027)", sharing: "USD 2,535" },
    ],
    summary:
      "Breathtaking landscapes, abundant wildlife and rich culture: two nights beneath Mount Kilimanjaro in Amboseli, the Rift Valley lakes of Naivasha and Nakuru, and a finale in the world-famous Masai Mara.",
    image: photos.safariElephant,
    highlights: [
      "Amboseli's 1,600+ elephants from 56 families, with Kilimanjaro as the backdrop",
      "Boat ride on Lake Naivasha and a guided walking safari in the sanctuary",
      "Black and white rhinos at Lake Nakuru",
      "Maasai warrior walking safari and traditional village visit in the Mara",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Amboseli National Park", description: "7:30am pick-up from your Nairobi hotel or the airport and drive south to Amboseli, arriving shortly after noon. Check in, hot lunch and relaxation, then a 4:00pm afternoon game drive. Dinner and overnight at Amboseli Sopa Lodge." },
      { day: "Day 2", title: "Amboseli National Park", description: "A flexible day planned with your guide: either a full-day game drive from 7:30am with a picnic lunch, or an early 6:00am drive, breakfast and rest, then a 4:00pm afternoon drive. Dinner and overnight at Amboseli Sopa Lodge." },
      { day: "Day 3", title: "Amboseli – Lake Naivasha – Lake Nakuru", description: "Drive toward the Great Rift Valley with a stop at the viewpoint for photos, then on to Lake Naivasha for lunch, a boat ride and a guided walking safari among giraffes and zebras. Continue to Lake Nakuru. Overnight at Lake Nakuru Sopa Lodge." },
      { day: "Day 4", title: "Lake Nakuru – Masai Mara National Reserve", description: "Early morning game drive at Lake Nakuru, renowned for black and white rhinos and rich birdlife, then drive to the Masai Mara. Around 5:00pm, Maasai warriors guide you on a walking safari and cultural visit. Dinner and overnight at Masai Mara Sopa Lodge." },
      { day: "Day 5", title: "Masai Mara National Reserve", description: "Depart at 6:30am for a full-day game drive with a picnic lunch. Explore the savannahs, visit the Mara River (seasonal) and enjoy excellent chances of spotting the Big Five. Dinner and overnight at the lodge." },
      { day: "Day 6", title: "Masai Mara – Nairobi", description: "After breakfast, drive back to Nairobi with a drop-off at your hotel or a transfer to the airport for your onward flight." },
    ],
    includes: [
      "Park entry fees (non-resident rates)",
      "All scheduled activities unless listed as optional",
      "All accommodation as specified",
      "Professional English-speaking driver-guide",
      "All transportation in a safari vehicle",
      "All government taxes and VAT",
      "Round-trip airport transfers",
      "Meals as specified in the day-by-day itinerary",
      "Complimentary drinking water during the safari",
    ],
    excludes: [
      "International flights",
      "Additional accommodation before and after the safari",
      "Tips and gratuities",
      "Personal expenses (souvenirs, travel insurance, visa fees)",
      "Any government-imposed increase in taxes or park fees",
    ],
    bestTime: "July to October for the Great Migration in the Mara; April to June for the best value.",
  },
  {
    slug: "rift-valley-lakes-masai-mara-5-day",
    name: "5-Day Best of Rift Valley Lakes & Masai Mara Safari",
    category: "Inbound",
    duration: "5 Days / 4 Nights",
    destination: "Lake Naivasha, Lake Nakuru & Masai Mara, Kenya",
    priceFrom: "USD 1,574 per person",
    rates: [
      { label: "Low season", solo: "USD 2,080", sharing: "USD 1,574" },
      { label: "High season", solo: "USD 3,468", sharing: "USD 2,450" },
    ],
    summary:
      "From the wildlife-rich Rift Valley lakes to the legendary plains of the Masai Mara — boat rides, walking safaris on Crescent Island, rhinos and flamingos, and world-class game viewing.",
    image: photos.lionessSafari,
    highlights: [
      "Complimentary boat ride on Lake Naivasha to spot hippos and birdlife",
      "Guided walking safari on Crescent Island",
      "Rhinos, Rothschild giraffes and flamingos at Lake Nakuru",
      "Traditional Maasai village visit and a Giraffe Centre stop in Nairobi",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Lake Naivasha", description: "Welcome and safari briefing at Jomo Kenyatta International Airport, then a drive through the Great Rift Valley to Lake Naivasha for lunch. Afternoon boat ride to spot hippos and birdlife, followed by a guided walking safari on Crescent Island. Dinner and overnight at Naivasha Sopa Lodge." },
      { day: "Day 2", title: "Lake Naivasha – Lake Nakuru", description: "Drive to Lake Nakuru National Park for a morning game drive with chances to see rhinos, Rothschild giraffes, buffalo, lions and diverse birdlife. Lunch and an afternoon game drive. Dinner and overnight at Lake Nakuru Sopa Lodge." },
      { day: "Day 3", title: "Lake Nakuru – Masai Mara", description: "Travel across the scenic Rift Valley and Narok County to the Masai Mara, arriving for lunch. Afternoon game drive in search of elephants, big cats, giraffes and wildebeest. Dinner and overnight at Mara Sopa Lodge." },
      { day: "Day 4", title: "Full-Day Masai Mara Safari", description: "Morning and afternoon game drives with chances to see the Big Five, and spectacular river crossings during the migration season (July–October). Later, visit a traditional Maasai village. Dinner and overnight at Masai Mara Sopa Lodge." },
      { day: "Day 5", title: "Masai Mara – Nairobi", description: "Drive back to Nairobi for lunch, then visit the Giraffe Centre to interact with endangered Rothschild giraffes before your transfer to your hotel or the airport." },
    ],
    includes: [
      "Transport in a safari vehicle with pop-up roof",
      "Professional English-speaking safari guide",
      "Full board accommodation",
      "Park entry fees (Lake Nakuru & Masai Mara)",
      "Boat ride on Lake Naivasha",
      "Guided walking safari on Crescent Island",
    ],
    excludes: [
      "International and domestic flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses (laundry, telephone, tips)",
      "Optional activities not mentioned in the itinerary",
    ],
    bestTime: "July to October for the migration and river crossings; year-round for lakes and general game viewing.",
  },
  {
    slug: "wild-wonders-samburu-nakuru-mara-7-day",
    name: "7-Day Wild Wonders of Kenya – Samburu, Nakuru & Maasai Mara",
    category: "Inbound",
    duration: "7 Days / 6 Nights",
    destination: "Samburu National Reserve, Lake Nakuru & Maasai Mara, Kenya",
    priceFrom: "USD 1,695 per person",
    rates: [
      { label: "Low season", solo: "USD 2,385", sharing: "USD 1,695" },
      { label: "High season", solo: "USD 3,496", sharing: "USD 2,353" },
    ],
    summary:
      "A deeper, more relaxed exploration of Kenya's top wildlife regions with two nights in each park — the rugged north of Samburu, the birdlife haven of Lake Nakuru and the iconic Maasai Mara.",
    image: photos.safariFleet,
    highlights: [
      "The Samburu \"Special Five\" including Grevy's zebra and gerenuk",
      "Ewaso Nyiro River ecosystem game drives",
      "Over 400 bird species and endangered rhinos at Lake Nakuru",
      "Two nights in the Maasai Mara, home of the black-maned lion",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Samburu National Reserve", description: "Pick-up in Nairobi and safari briefing, then a scenic drive north crossing the equator. Check in and lunch, followed by an afternoon game drive for elephants, lions, leopards and cheetahs. Dinner and overnight at Samburu Sopa Lodge or similar." },
      { day: "Day 2", title: "Full Day in Samburu", description: "Morning and afternoon game drives exploring the Ewaso Nyiro River ecosystem, with excellent chances of rare northern species such as Grevy's zebra and gerenuk. Optional Samburu village visit. Dinner and overnight at the lodge." },
      { day: "Day 3", title: "Samburu – Lake Nakuru National Park", description: "Early breakfast and a scenic drive through the Great Rift Valley. Lunch at the lodge, then an afternoon game drive for flamingos, pelicans and rhinos. Dinner and overnight at Lake Nakuru Sopa Lodge or similar." },
      { day: "Day 4", title: "Full Day in Lake Nakuru", description: "Morning and afternoon game drives exploring acacia woodlands, waterfalls and the lake shores, spotting endangered black and white rhinos among more than 400 recorded bird species. Dinner and overnight at the lodge." },
      { day: "Day 5", title: "Lake Nakuru – Maasai Mara", description: "Breakfast and drive via Narok, arriving for lunch and relaxation. Afternoon game drive across the vast savannah with an optional Maasai cultural experience. Dinner and overnight at Mara Simba Lodge or similar." },
      { day: "Day 6", title: "Full Day in Maasai Mara", description: "Full-day game drive with a picnic lunch and high chances of spotting the Big Five, black-maned lions and cheetahs. Optional hot-air balloon safari or Maasai village visit. Dinner and overnight at the lodge." },
      { day: "Day 7", title: "Maasai Mara – Nairobi", description: "Breakfast and check-out, then a scenic return drive to Nairobi with a drop-off at your hotel or the airport." },
    ],
    includes: [
      "Park entry fees",
      "All game drives and activities",
      "6 nights accommodation",
      "Professional driver-guide",
      "Safari transport in a 4x4 vehicle",
      "Airport transfers",
      "Meals as per itinerary",
      "Taxes and VAT",
    ],
    excludes: [
      "International flights",
      "Extra accommodation before or after the safari",
      "Tips and gratuities",
      "Personal expenses (souvenirs, visas, insurance)",
      "Government fee increases",
      "Drinks and meals not specified",
    ],
    bestTime: "June to October for peak game viewing; January to March for warm, quieter parks.",
  },
  {
    slug: "bush-safari-diani-beach-7-day",
    name: "7-Day Kenya Bush Safari & Diani Beach Escape",
    category: "Inbound",
    duration: "7 Days / 6 Nights",
    destination: "Masai Mara, Lake Naivasha, Amboseli & Diani Beach, Kenya",
    priceFrom: "USD 2,847 per person",
    rates: [
      { label: "Low season", solo: "USD 3,806", sharing: "USD 2,847" },
      { label: "High season", solo: "USD 4,840", sharing: "USD 3,410" },
    ],
    summary:
      "The best of Kenya in one journey: the Masai Mara, Lake Naivasha and Amboseli beneath Kilimanjaro, finishing on the white sands of Diani Beach.",
    image: photos.familyOcean,
    highlights: [
      "Full-day Masai Mara game drives with optional hot-air balloon safari",
      "Boat ride or Crescent Island walking safari at Lake Naivasha",
      "Amboseli elephant herds and Observation Hill with Kilimanjaro views",
      "Two nights at Diani Beach with a domestic flight back to Nairobi",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Masai Mara", description: "Arrive at JKIA, meet our representative and drive to the Masai Mara (5–6 hrs) via the Great Rift Valley. Lunch on arrival, followed by an afternoon game drive. Overnight at Jambo Mara Safari Lodge or similar. Meals: lunch, dinner." },
      { day: "Day 2", title: "Masai Mara – Full-Day Safari", description: "Full-day game drives in the Masai Mara, home to the Big Five and abundant wildlife. Optional hot-air balloon safari or Maasai village visit. Overnight at Jambo Mara Lodge or similar. Meals: breakfast, lunch, dinner." },
      { day: "Day 3", title: "Masai Mara – Lake Naivasha", description: "Drive to Lake Naivasha (2–3 hrs) with lunch on arrival. Optional boat ride to see hippos and birdlife or a walking safari at Crescent Island. Overnight at Lake Naivasha Sopa Resort or similar. Meals: breakfast, lunch, dinner." },
      { day: "Day 4", title: "Lake Naivasha – Amboseli", description: "Drive to Amboseli National Park (5–6 hrs), lunch on arrival, then an afternoon game drive with views of Mount Kilimanjaro. Overnight at AA Lodge Amboseli or similar. Meals: breakfast, lunch, dinner." },
      { day: "Day 5", title: "Amboseli – Full-Day Safari", description: "Morning and afternoon game drives, a visit to Observation Hill and close encounters with large elephant herds. Overnight at AA Lodge Amboseli or similar. Meals: breakfast, lunch, dinner." },
      { day: "Day 6", title: "Amboseli – Diani Beach", description: "Transfer to the coast and relax at Diani Beach. Optional snorkelling, diving, jet skiing or a Wasini Island dhow cruise. Overnight at Diani Reef or similar. Meals: breakfast, dinner." },
      { day: "Day 7", title: "Diani – Nairobi Departure", description: "After breakfast, transfer to Ukunda Airport for the flight to Nairobi (approx. 1 hr 15 mins) and connect to JKIA for your international departure." },
    ],
    includes: [
      "Airport transfers and transport in a 4x4 safari vehicle",
      "Accommodation and meals as indicated",
      "Game drives with a professional safari guide",
      "Park entrance fees",
      "Domestic flight (Ukunda – Nairobi)",
    ],
    excludes: ["International flights", "Optional activities", "Travel insurance"],
    bestTime: "July to October for the migration combined with warm coastal weather; December to March for the best beach conditions.",
  },
  {
    slug: "samburu-special-five-3-day",
    name: "3-Day Samburu \"Special Five\" Safari",
    category: "Inbound",
    duration: "3 Days / 2 Nights",
    destination: "Samburu National Reserve, Kenya",
    priceFrom: "USD 1,050 per person",
    rates: [{ label: "All seasons", solo: "USD 1,550", sharing: "USD 1,050" }],
    summary:
      "A short, mid-range safari into Kenya's northern frontier in search of the rare Samburu \"Special Five\" alongside classic Big Five game viewing and Samburu culture.",
    image: photos.lionessSafari,
    highlights: [
      "Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk and Beisa oryx",
      "Sunrise game drive for predators and nocturnal wildlife",
      "Scenic drive north across the equator",
      "Samburu sunsets and vibrant birdlife",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi to Samburu", description: "Welcome in Nairobi, a short safari briefing and introduction to your driver-guide, then a scenic drive north with refreshment and photo stops. Check in and lunch, followed by an afternoon game drive in search of the Special Five. Dinner and overnight at Samburu Sopa Lodge or a similar standard lodge." },
      { day: "Day 2", title: "Exploring Samburu National Reserve", description: "Sunrise game drive — one of the best times to see predators — then breakfast and relaxation at the lodge. After lunch, a second game drive deeper into Samburu's unique ecosystem. Dinner and overnight at the lodge." },
      { day: "Day 3", title: "Samburu to Nairobi", description: "After breakfast, check out and begin the journey back to Nairobi with an en-route game drive, stops for refreshments and souvenir shopping, arriving in the afternoon for drop-off at your preferred location." },
    ],
    includes: [
      "Park fees (non-resident rates)",
      "All activities unless marked optional",
      "Accommodation",
      "Professional driver-guide",
      "Transportation throughout the safari",
      "Taxes and VAT",
      "Meals as specified in the itinerary",
    ],
    excludes: [
      "International flights",
      "Pre- and post-safari accommodation",
      "Tips and gratuities",
      "Personal expenses (souvenirs, insurance, visa fees)",
      "Government-imposed tax or park fee increases",
      "Meals not specified and drinks",
    ],
    bestTime: "June to October and December to March, when Samburu is dry and wildlife concentrates along the river.",
  },
  {
    slug: "amboseli-tsavo-east-mombasa-3-day",
    name: "3-Day Amboseli – Tsavo East – Mombasa Safari",
    category: "Inbound",
    duration: "3 Days / 2 Nights",
    destination: "Amboseli & Tsavo East National Parks, ending in Mombasa or Diani, Kenya",
    priceFrom: "USD 1,090 per person",
    rates: [
      { label: "Low season", solo: "USD 1,499", sharing: "USD 1,090" },
      { label: "High season", solo: "USD 1,748", sharing: "USD 1,222" },
    ],
    summary:
      "A scenic mid-range wildlife journey across southern Kenya, starting in Nairobi and ending at the beach in Mombasa or Diani — Kilimanjaro views, big elephant herds and Tsavo's famous red elephants.",
    image: photos.beachWalk,
    highlights: [
      "Large elephant herds and Mount Kilimanjaro views in Amboseli",
      "Tsavo East's red elephants, lions, giraffes and antelopes",
      "En-route morning game drive on the way to the coast",
      "Ends with a drop-off at your Mombasa or Diani beach hotel",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Amboseli National Park", description: "Pick-up from your Nairobi hotel or the airport and a scenic drive to Amboseli, arriving in time for lunch and check-in. Afternoon game drive for large elephant herds, Big Five sightings and views of Mount Kilimanjaro. Dinner and overnight at Amboseli Sopa Lodge or similar." },
      { day: "Day 2", title: "Amboseli – Tsavo East National Park", description: "Early breakfast and departure with en-route game viewing. Arrive at Tsavo East for check-in and lunch, then an afternoon game drive for red elephants, lions, giraffes, zebras and antelopes. Dinner and overnight at Sentrim Tsavo East or similar." },
      { day: "Day 3", title: "Tsavo East – Mombasa / Diani", description: "Breakfast and check-out, a morning en-route game drive through the park, then the drive to Mombasa or Diani Beach, arriving around midday for drop-off at your beach hotel." },
    ],
    includes: [
      "Park fees (non-resident rates)",
      "All activities unless optional",
      "Accommodation",
      "Professional driver-guide",
      "Transportation",
      "Meals as per itinerary",
      "Drinking water",
      "Taxes and VAT",
    ],
    excludes: [
      "International flights",
      "Airport transfers",
      "Extra accommodation before or after the safari",
      "Tips and gratuities",
      "Personal expenses (visa, insurance, souvenirs)",
      "Government fee increases",
      "Some meals",
    ],
    bestTime: "June to October and January to March for the clearest Kilimanjaro views and best coastal weather.",
  },
  {
    slug: "amboseli-tsavo-west-east-4-day",
    name: "4-Day Amboseli, Tsavo West & Tsavo East Safari Adventure",
    category: "Inbound",
    duration: "4 Days / 3 Nights",
    destination: "Amboseli, Tsavo West & Tsavo East National Parks, Kenya",
    priceFrom: "USD 1,315 per person",
    rates: [
      { label: "Low season", solo: "USD 2,078", sharing: "USD 1,315" },
      { label: "High season", solo: "USD 2,413", sharing: "USD 1,575" },
    ],
    summary:
      "Three of Kenya's most iconic southern parks in one journey — Kilimanjaro views, volcanic terrain, natural springs and vast savannahs filled with elephants, predators and birdlife.",
    image: photos.safariElephant,
    highlights: [
      "Clear views of Mount Kilimanjaro over Amboseli's elephant herds",
      "Mzima Springs in Tsavo West — hippos, crocodiles and birdlife",
      "Tsavo East's famous red elephants and the Galana River",
      "Round-trip airport transfers included",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Amboseli National Park", description: "Early morning departure from Nairobi and a scenic drive through rural landscapes and open plains. Check in, lunch and relaxation, then an afternoon game drive for large elephant herds, giraffes, zebras, wildebeest and buffalo with clear Kilimanjaro views. Dinner and overnight at Amboseli Sopa Lodge." },
      { day: "Day 2", title: "Amboseli – Tsavo West National Park", description: "Breakfast and a scenic drive as the plains give way to rugged terrain. Check in and lunch, then an afternoon game drive for elephants, buffaloes, giraffes, antelopes and possible predator sightings, plus a visit to Mzima Springs. Dinner and overnight at Ziwani Tented Camp or similar." },
      { day: "Day 3", title: "Tsavo West – Tsavo East National Park", description: "Breakfast and a scenic drive through connecting wilderness. Check in and lunch, then an afternoon game drive for the famous red elephants, lions, cheetahs, giraffes and zebras, exploring areas near the Galana River. Dinner and overnight at Sentrim Tsavo or similar." },
      { day: "Day 4", title: "Tsavo East – Nairobi", description: "Early breakfast and a morning game drive in great photography light to spot predators and early grazers, then the drive to Nairobi with an optional lunch stop en route and drop-off at your hotel or the airport." },
    ],
    includes: [
      "Park fees (non-resident rates)",
      "All activities unless optional",
      "Accommodation",
      "Professional driver-guide",
      "Transportation",
      "Round-trip airport transfers",
      "Meals as per itinerary",
      "Drinking water",
      "Taxes and VAT",
    ],
    excludes: [
      "International flights",
      "Pre- and post-safari accommodation",
      "Tips and gratuities",
      "Personal expenses (visa, insurance, souvenirs)",
      "Government fee increases",
    ],
    bestTime: "June to October and January to March, the driest months with the best mountain visibility.",
  },
  {
    slug: "wild-wonders-samburu-to-mara-5-day",
    name: "5-Day Wild Wonders of Kenya – Samburu to Mara",
    category: "Inbound",
    duration: "5 Days / 4 Nights",
    destination: "Samburu National Reserve, Lake Nakuru & Masai Mara, Kenya",
    priceFrom: "USD 1,695 per person",
    rates: [
      { label: "Low season", solo: "USD 2,285", sharing: "USD 1,695" },
      { label: "High season", solo: "USD 3,396", sharing: "USD 2,453" },
    ],
    summary:
      "An unforgettable five-day journey through Kenya's wildlife wonderland — from the northern frontier of Samburu, through the flamingos and rhinos of Lake Nakuru, to the legendary Masai Mara.",
    image: photos.safariConvoy,
    highlights: [
      "The Special Five: Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk and Somali ostrich",
      "Flamingos and endangered black rhinos at Lake Nakuru",
      "Full-day Masai Mara game drive with a picnic lunch",
      "Up to 500 recorded bird species in the Mara ecosystem",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi – Samburu National Reserve", description: "Arrival and pick-up in Nairobi with a safari briefing, then a scenic drive north across the equator into Kenya's northern frontier. Check in and lunch, then an afternoon game drive for elephants, lions, leopards, cheetahs and the Special Five. Dinner and overnight at Samburu Sopa Lodge or similar." },
      { day: "Day 2", title: "Samburu – Lake Nakuru National Park", description: "Early morning game drive in Samburu, breakfast, then depart for Lake Nakuru through the scenic Rift Valley. Afternoon game drive famous for flamingos, rich birdlife and endangered black rhinos. Dinner and overnight at Lake Nakuru Sopa Lodge or similar." },
      { day: "Day 3", title: "Lake Nakuru – Masai Mara", description: "Breakfast and departure via Narok town with cultural insight into the Maasai community. Lunch and relaxation at the lodge, then an afternoon game drive across vast savannah, acacia woodlands and rolling hills. Dinner and overnight at Mara Simba Lodge or similar." },
      { day: "Day 4", title: "Full Day in Masai Mara", description: "Full-day game drive with a picnic lunch and high chances of spotting the Big Five, black-maned lions and cheetahs, plus excellent birdwatching. Optional Maasai village visit or hot-air balloon safari. Dinner and overnight at the lodge." },
      { day: "Day 5", title: "Masai Mara – Nairobi", description: "Breakfast and check-out, then the return journey to Nairobi with a picnic lunch and optional scenic stops, ending with drop-off at the airport or your hotel." },
    ],
    includes: [
      "Park entry fees (non-resident rates)",
      "All scheduled game drives and activities",
      "Accommodation throughout the safari",
      "Professional driver-guide",
      "Transport in a safari vehicle",
      "Airport transfers",
      "Meals as per itinerary",
      "Drinking water during the safari",
      "Taxes and VAT",
    ],
    excludes: [
      "International flights",
      "Extra accommodation before or after the safari",
      "Tips and gratuities",
      "Personal expenses (souvenirs, visas, insurance)",
      "Any government fee increases",
      "Some meals and drinks not specified",
    ],
    bestTime: "July to October for the Great Migration; June to March for excellent year-round game viewing.",
  },

  /* ---------------------------------------------------------------
   * TEA, COFFEE & SUGAR AGRITOURISM
   * ------------------------------------------------------------- */
  {
    slug: "ultimate-kenya-tea-experience-4-day",
    name: "The Ultimate Kenya Tea Experience – 4 Days",
    category: "Inbound",
    duration: "4 Days / 3 Nights",
    destination: "Limuru, Kiambu & Kericho Highlands, Kenya",
    priceFrom: "USD 720 per person",
    summary:
      "A journey through Kenya's beautiful tea-growing regions blending breathtaking highland landscapes with immersive tea experiences, from the historic Kiambethu Tea Farm to the great factories of Kericho.",
    image: teaFactory,
    highlights: [
      "Kiambethu Tea Farm history walk with Ngong Hills views",
      "Interactive Riara Tea Factory nursery and plantation tour",
      "Kuresoi Tea Factory smallholder production tour",
      "Mbogo Valley Tea Factory orthodox and CTC processing",
    ],
    itinerary: [
      { day: "Day 1", title: "Kiambethu Tea Farm Experience", description: "Arrive at Kiambethu Tea Farm at 10:00am for welcome tea or coffee and an introduction to the history of tea farming in Kenya. Guided walk through the tea fields, a short nature walk in the indigenous forest and time in the gardens known for birdlife and seasonal flowers. Relax on the verandah overlooking the tea fields and Ngong Hills, then a three-course farm-style buffet lunch at 1:00pm. Overnight at Amoria Boutique Hotel." },
      { day: "Day 2", title: "Limuru Riara Tea Tour", description: "Visit Riara Tea Factory for an immersive tea experience: welcome tea, a light pancake breakfast and a safety briefing, then explore the tea nursery and mature plantations while learning about cultivation, harvesting and sustainable farming. Garden Q&A session and a tasting of refreshing Riara iced tea. Overnight at Amoria Boutique Hotel." },
      { day: "Day 3", title: "Scenic Drive to Kericho & Kuresoi Tea Factory", description: "Early breakfast and a scenic 5–6 hour drive from Nairobi to Kericho. Check in at Rosa Garden Hotel or similar, followed by lunch. Visit Kuresoi Tea Factory to learn about the role of smallholder farmers and observe how freshly picked leaves are processed through each stage of quality control. Dinner and overnight at Rosa Garden Hotel or similar." },
      { day: "Day 4", title: "Mbogo Valley Tea Factory & Return to Nairobi", description: "Breakfast and a guided tour of Mbogo Valley Tea Factory with an introduction to cooperative tea production, observing both orthodox and CTC processing methods. Short walk through the tea fields learning traditional plucking techniques from experienced pickers, then lunch before the afternoon drive back to Nairobi with scenic stops at Great Rift Valley viewpoints." },
    ],
    includes: [
      "3 nights accommodation",
      "Full board meals",
      "Tea farm and factory tours",
      "Professional guide",
      "Transportation",
      "Tea tasting experiences",
    ],
    excludes: ["International or domestic flights", "Travel insurance", "Personal expenses"],
    bestTime: "Year round. Travellers may extend the journey to the Masai Mara, the Kenyan Coast or other destinations at an additional cost.",
  },
  {
    slug: "kericho-tea-sugar-tour-4-day",
    name: "Kericho Tea & Sugar Tour – 4 Days",
    category: "Inbound",
    duration: "4 Days / 3 Nights",
    destination: "Kericho Highlands, Kenya",
    priceFrom: "USD 698 per person",
    summary:
      "Explore the heart of Kenya's highlands — TET and Kuresoi tea factories, West Valley Sugar Company, plantation walks and tastings, with comfortable accommodation in Kericho.",
    image: teaCupping,
    highlights: [
      "TET Tea Factory tour with grading and export insight",
      "Afternoon tasting session across different grades of Kenyan tea",
      "Kuresoi Tea Factory smallholder farming and quality control",
      "West Valley Sugar Company production tour",
    ],
    itinerary: [
      { day: "Day 1", title: "Nairobi to Kericho & TET Tea Factory Tour", description: "Morning pickup from Nairobi and a scenic drive to Kericho through the highlands and Rift Valley. Check in at Rosa Garden Hotel or similar, followed by lunch. Afternoon guided tour of TET Tea Factory to see how freshly picked leaves are processed, graded and packaged for international markets, ending with a tea tasting session. Dinner and overnight at the hotel." },
      { day: "Day 2", title: "Kuresoi Tea Experience", description: "Breakfast, then a guided tour of Kuresoi Tea Factory and its plantations covering smallholder farming, harvesting techniques and quality control. Scenic plantation walks with views over the surrounding estates and lunch at the factory or a nearby scenic location. Return to the hotel for dinner and overnight." },
      { day: "Day 3", title: "West Valley Sugar Company Tour", description: "Breakfast and a guided tour of West Valley Sugar Company covering sugarcane farming, harvesting and the industrial process of sugar production. Lunch and time to relax or explore the surrounding highland scenery. Dinner and overnight at the hotel." },
      { day: "Day 4", title: "Kericho to Nairobi", description: "Breakfast at Rosa Garden Hotel or similar, check-out and the return journey to Nairobi with scenic stops at Great Rift Valley viewpoints, arriving for drop-off at your hotel or preferred location." },
    ],
    includes: [
      "3 nights accommodation",
      "Full board meals",
      "Tea and sugar factory tours",
      "Professional guide",
      "Transportation",
      "Tea tasting experiences",
    ],
    excludes: ["International or domestic flights", "Travel insurance", "Personal expenses"],
    bestTime: "Year round. Extensions to the Masai Mara, the Kenyan Coast or other destinations can be arranged at an additional cost.",
  },
  {
    slug: "kenya-coffee-tea-sugar-tour-4-day",
    name: "Kenya Coffee, Tea & Sugar Tour – 4 Days",
    category: "Inbound",
    duration: "4 Days / 3 Nights",
    destination: "Kiambu & Kericho Highlands, Kenya",
    priceFrom: "USD 780 per person",
    summary:
      "Kenya's scenic highlands across coffee, tea and sugar — Fairview Coffee Estate, Mbogo Valley and Kuresoi tea factories and West Valley Sugar Company, with tastings and plantation walks throughout.",
    image: teaFactory,
    highlights: [
      "Fairview Coffee Estate plantation walk and coffee tasting",
      "Mbogo Valley Tea Factory processing and grading tour",
      "Kuresoi Tea Factory and a scenic plantation walk",
      "West Valley Sugar Company factory tour",
    ],
    itinerary: [
      { day: "Day 1", title: "Kiambu Coffee Experience", description: "Visit Fairview Coffee Estate for an introduction to Kenya's rich coffee heritage, with a guided walk through the plantation and the processing area. Take part in a coffee tasting session featuring different Kenyan profiles, then lunch at the estate surrounded by scenic gardens. Transfer to Phoenicia Hotel for dinner and overnight." },
      { day: "Day 2", title: "Transfer to Kericho & Mbogo Valley Tea Factory", description: "Breakfast and check-out from Phoenicia Hotel, then a scenic transfer to Kericho and check-in at Rosa Garden Hotel or similar. Afternoon guided tour of Mbogo Valley Tea Factory to learn about tea production and grading while observing the manufacturing process. Dinner and overnight at Rosa Garden Hotel or similar." },
      { day: "Day 3", title: "Kuresoi Tea Experience", description: "Breakfast, then a guided tour of Kuresoi Tea Factory and its plantations covering smallholder tea farming and quality control. Lunch followed by a scenic plantation walk through the rolling tea fields. Return to Kericho for dinner and overnight at Rosa Garden Hotel." },
      { day: "Day 4", title: "West Valley Sugar Experience", description: "Breakfast at Rosa Garden Hotel or similar, then a visit to West Valley Sugar Company to learn about sugarcane farming and sugar production. Guided factory tour followed by lunch, then departure and transfer for onward travel." },
    ],
    includes: [
      "Tea and sugar factory tours",
      "Coffee estate tour and tasting",
      "Professional guide",
      "Private transportation within the region",
      "Tea tasting experiences",
      "Accommodation at Phoenicia Hotel and Rosa Garden Hotel or similar",
    ],
    excludes: ["Travel insurance", "Personal expenses"],
    bestTime: "Year round. The journey can be extended to the Masai Mara National Reserve, the Kenyan Coast or other selected locations at an additional cost.",
  },

  /* ---------------------------------------------------------------
   * OUTBOUND, EDUCATIONAL & CORPORATE
   * ------------------------------------------------------------- */
  {
    slug: "dubai-city-break",
    name: "Dubai City Break",
    category: "Outbound",
    duration: "5 Days / 4 Nights",
    destination: "Dubai, United Arab Emirates",
    priceFrom: "USD 950 per person",
    summary:
      "Skyscrapers, desert dunes, and world-class shopping — an easy, high-impact getaway from Nairobi.",
    image: photos.dubaiBurjAlArab,
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
    image: photos.starfishChild,
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
  {
    slug: "corporate-incentive-retreat",
    name: "Corporate Incentive Retreat",
    category: "Corporate",
    duration: "2 Days / 1 Night",
    destination: "Naivasha or Nanyuki, Kenya",
    priceFrom: "USD 260 per delegate",
    summary:
      "Team offsites and incentive trips with meeting facilities, activities, and logistics handled end-to-end.",
    image: photos.safariFleet,
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
    answer: pkg.rates
      ? `Published rates: ${pkg.rates
          .map((r) => `${r.label} — ${r.sharing} per person sharing${r.solo ? `, ${r.solo} solo traveller` : ""}`)
          .join("; ")}. Send us your dates and traveller numbers and we will confirm exact rates.`
      : `Pricing starts from ${pkg.priceFrom}. The final quote depends on your travel dates, group size and choice of accommodation — send us your dates and we will confirm exact rates.`,
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

/** Tea / coffee / sugar agritourism tours — presented on the Tea Tourism page, not in the main packages grid. */
export const agritourismSlugs = [
  "ultimate-kenya-tea-experience-4-day",
  "kericho-tea-sugar-tour-4-day",
  "kenya-coffee-tea-sugar-tour-4-day",
];

export const agritourismPackages = packages.filter((p) => agritourismSlugs.includes(p.slug));
export const mainPackages = packages.filter((p) => !agritourismSlugs.includes(p.slug));
