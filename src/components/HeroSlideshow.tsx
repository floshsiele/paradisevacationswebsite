import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photos } from "@/assets/photos";

const slides = [
  {
    image: photos.lionessSafari,
    alt: "African safari elephant at sunrise"
  },
  {
    image: photos.beachWalk,
    alt: "Hot air balloon over Kenyan savannah"
  },
  {
    image: "https://images.unsplash.com/photo-1534234828563-0252171806a8?w=1920&q=85",
    alt: "Dhow sailing on turquoise ocean"
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides with smooth crossfade and subtle zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            opacity: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
            scale: { duration: 6, ease: "linear" }
          }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: "linear" }}
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </motion.div>
      </AnimatePresence>

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
            Unforgettable
            <br />
            <span className="italic font-normal">Experiences</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Your journey begins here — with personalized, seamless, and professional travel solutions.
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

      {/* Slide indicators */}
      <div className="absolute bottom-12 right-12 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative p-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className="w-8 h-px bg-white/30"
              animate={{
                backgroundColor: index === currentSlide ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"
              }}
              transition={{ duration: 0.4 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
