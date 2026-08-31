import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { trackCta } from "@/lib/analytics";
import { ArrowRight, Phone } from "lucide-react";
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

      {/* Hero CTAs at the bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-6 pb-16 md:pb-20">
        <Link
          to="/packages#book"
          className="btn-primary-cta"
          onClick={() => trackCta("Get a free quote", { cta_location: "home_hero", destination: "/packages#book" })}
        >
          Get a free quote <ArrowRight size={16} />
        </Link>
        <a href="tel:+254726927081" className="btn-ghost-cta">
          <Phone size={16} /> Talk to a consultant
        </a>
      </div>
    </div>
  );
}
