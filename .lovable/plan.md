# Replace homepage hero with a corporate-travel video

## Goal
Swap the current safari/outdoor photo slideshow at the top of the homepage for a background video that represents **corporate travel management** (business travellers, airport/plane, city movement, professional pace).

## Plan

1. **Generate corporate-travel hero video**
   - Create a short, looping video asset that visually communicates business travel.
   - Save to `src/assets/hero-corporate-travel.mp4` so it ships with the project.

2. **Build a `HeroVideo` component**
   - New component: `src/components/HeroVideo.tsx`.
   - Background video: muted, autoplay, loop, playsinline, with a poster fallback.
   - Keep the existing dark gradient overlay so the headline text stays legible.
   - Preserve the current hero text ("Strategic Travel" / headline / subheadline) and scroll indicator.
   - Add reduced-motion handling and accessibility attributes (`aria-hidden`, `aria-label`).

3. **Update homepage (`src/pages/Index.tsx`)**
   - Replace `<HeroSlideshow />` with the new `<HeroVideo />`.
   - Keep the rest of the page unchanged.

4. **Verify**
   - Run the build to confirm the new component and asset load correctly.
   - Check the preview for autoplay, text legibility, and mobile sizing.

## Notes
- The old `HeroSlideshow` component will stay in the project (unused on the home page) in case it is needed elsewhere later.
- Video will be lightweight and optimized for a hero background.
