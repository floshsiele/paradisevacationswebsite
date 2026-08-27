import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface StoryCardProps {
  couple: string;
  location: string;
  coverImage: string;
  slug: string;
  index: number;
}

export function StoryCard({ couple, location, coverImage, slug, index }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <Link to={`/work/${slug}`} className="block">
        <div className="relative overflow-hidden aspect-[4/5] mb-6">
          <img
            src={coverImage}
            alt={`${couple} wedding`}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          
          {/* Chapter hint on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="chapter-title text-sm text-white tracking-widest">
              View Story
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-300">
            {couple}
          </h3>
          <p className="font-serif text-sm text-muted-foreground italic">
            {location}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}