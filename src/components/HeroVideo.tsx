import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/corporate-hero-v8.mp4.asset.json";
import heroPoster from "@/assets/corporate-hero-v8-poster.jpg.asset.json";

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
    <div className="relative w-full h-screen overflow-hidden bg-black">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="chapter-title text-xs text-white/80 mb-6 block">Strategic Travel</span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Corporate Travel
            <br />
            <span className="italic font-normal">Management</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Seamless, professional travel solutions for businesses — from air ticketing and policy to 24/7 traveller support.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
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
