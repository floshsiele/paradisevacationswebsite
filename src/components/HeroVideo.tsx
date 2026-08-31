import { useEffect, useRef, useState } from "react";
const heroVideoUrl = "/hero-corporate.mp4";
const heroPosterUrl = "/hero-corporate-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay may be blocked; the paused first frame acts as a fallback.
      });
    }
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full min-h-svh overflow-hidden bg-black">
      {/* Video background */}
      <video
        ref={videoRef}
        src={heroVideoUrl}
        poster={heroPosterUrl}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />

      {/* Hero content is intentionally left empty so the video is fully visible */}
      <div className="relative min-h-svh z-20" aria-hidden="true" />
    </div>
  );
}
