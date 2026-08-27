import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star } from "lucide-react";
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
        src={heroVideo.url}
        poster={heroPoster.url}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />

      {/* Hero content */}
      <div className="relative min-h-svh flex flex-col justify-center items-center text-center px-8 pt-32 pb-20 md:py-28 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="font-sans text-xs tracking-wider text-white/90">
              Trusted by 200+ Kenyan corporates, schools and families
            </span>
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Travel managed properly.
            <br />
            <span className="italic font-normal">Every trip, every time.</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Corporate travel management, safaris, outbound holidays, educational trips and full
            destination management — quoted in 24 hours, backed by 24/7 support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
            <Link to="/book" className="btn-primary-cta">
              Get a free quote in 24 hrs <ArrowRight size={16} />
            </Link>
            <a href="tel:+254726927081" className="btn-ghost-cta">
              <Phone size={16} /> Talk to a consultant
            </a>
          </div>

          <p className="font-sans text-xs text-white/70 mt-5">
            No planning fees · No obligation · Itemised pricing
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="chapter-title text-xs text-white/60">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
