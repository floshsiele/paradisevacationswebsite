import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Chapter {
  title: string;
  images: string[];
}

export interface WeddingStory {
  couple: string;
  location: string;
  description: string;
  chapters: Chapter[];
}

interface ChapterSliderProps {
  story: WeddingStory;
}

export function ChapterSlider({ story }: ChapterSliderProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const chapter = story.chapters[currentChapter];
  const totalImages = chapter.images.length;

  const nextImage = () => {
    if (currentImage < totalImages - 1) {
      setCurrentImage(currentImage + 1);
    } else if (currentChapter < story.chapters.length - 1) {
      // Move to next chapter
      setCurrentChapter(currentChapter + 1);
      setCurrentImage(0);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else if (currentChapter > 0) {
      // Move to previous chapter
      const prevChapter = currentChapter - 1;
      setCurrentChapter(prevChapter);
      setCurrentImage(story.chapters[prevChapter].images.length - 1);
    }
  };

  const goToChapter = (index: number) => {
    setCurrentChapter(index);
    setCurrentImage(0);
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-cream-dark overflow-hidden">
      {/* Main image area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentChapter}-${currentImage}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <img
              src={chapter.images[currentImage]}
              alt={`${story.couple} - ${chapter.title}`}
              className="w-full h-full object-cover"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        disabled={currentChapter === 0 && currentImage === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 text-white/60 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextImage}
        disabled={currentChapter === story.chapters.length - 1 && currentImage === totalImages - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 text-white/60 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Story info overlay */}
      <div className="absolute top-12 left-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
            {story.couple}
          </h2>
          <p className="font-serif text-sm text-white/70 italic">
            {story.location}
          </p>
        </motion.div>
      </div>

      {/* Chapter title - large decorative element */}
      <div className="absolute bottom-32 left-12 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="chapter-title text-6xl md:text-8xl text-white/20">
              {chapter.title}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Chapter navigation */}
      <div className="absolute bottom-12 left-12 right-12 z-20">
        <div className="flex items-center justify-between">
          {/* Chapter tabs */}
          <div className="flex gap-8">
            {story.chapters.map((ch, index) => (
              <button
                key={ch.title}
                onClick={() => goToChapter(index)}
                className={cn(
                  "chapter-title text-sm transition-all duration-300",
                  index === currentChapter
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                )}
              >
                {ch.title}
              </button>
            ))}
          </div>

          {/* Image counter */}
          <div className="flex items-center gap-4">
            <span className="font-display text-sm text-white/60">
              {currentImage + 1} / {totalImages}
            </span>
            {/* Progress dots */}
            <div className="flex gap-1">
              {chapter.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentImage ? "bg-white" : "bg-white/30"
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}