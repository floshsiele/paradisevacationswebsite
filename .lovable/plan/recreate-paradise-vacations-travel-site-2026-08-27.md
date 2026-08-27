# Recreate Paradise Vacations Travel Site

## Goal
Replace the current wedding photographer portfolio with a professional travel agency website for **Paradise Vacations Kenya**, matching the structure and content of `www.vacations.paradisegrouptravels.com`.

## Pages
- **Home** — hero, services overview, safari/outbound sections, service cards, stats, clients, partners, reviews, accreditations, footer
- **Book / Get a Quote** — simple inquiry form
- **About** — company intro and mission
- **Contact** — contact details, map area, social links

## Design Direction
- Shift from warm cream/gold wedding palette to a clean, trustworthy travel palette: deep ocean/teal accents, warm sand neutrals, white space, professional typography.
- Keep cinematic hero treatment but with travel imagery (safaris, destinations, corporate travel).
- Prominent CTAs: "Get Your Quote", WhatsApp chat, phone numbers.

## Implementation Steps
1. Update global design tokens in `src/index.css` and `tailwind.config.ts` for travel brand colors/fonts.
2. Replace navigation in `src/components/FloatingNav.tsx` and `StaticNav` with travel-focused links.
3. Rewrite `src/pages/Index.tsx` as the new homepage with all key sections.
4. Create/rewrite `About.tsx`, `Contact.tsx`, and a new quote page.
5. Remove wedding-specific pages and routes (`/work`, `/work/:slug`, `/styleguide`) from `src/App.tsx` and add travel routes.
6. Update `index.html` metadata for Paradise Vacations.
7. Add WhatsApp floating button and contact details in footer.
8. Generate/select placeholder travel imagery where needed.

## Notes
- Contact details, social links, and partner logos will be pulled from the existing site content.
- Booking form can be client-side only for now (no backend required unless requested).
