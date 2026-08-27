import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FloatingNav, StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import weddingBouquet from "@/assets/wedding-bouquet.jpg";
import bridesmaids from "@/assets/bridesmaids.jpg";
import weddingCoupleVeil from "@/assets/wedding-couple-veil.jpg";
import sarahYosefField from "@/assets/sarah-yosef-field.jpg";
import sarahYosefSunset from "@/assets/sarah-yosef-sunset.jpg";
import estherDanielMountains from "@/assets/esther-daniel-mountains.jpg";
import estherDanielClouds from "@/assets/esther-daniel-clouds.jpg";
import rebeccaAaronSparklers from "@/assets/rebecca-aaron-sparklers.jpg";
import rebeccaAaronKiss from "@/assets/rebecca-aaron-kiss.jpg";
import rebeccaAaronFlowers from "@/assets/rebecca-aaron-flowers.jpg";
import rebeccaAaronCelebration from "@/assets/rebecca-aaron-celebration.jpg";

// Wedding stories data with simplified structure
interface WeddingProject {
  couple: string;
  location: string;
  description: string;
  date: string;
  coverImage: string;
  photos: string[];
}

const weddingStories: Record<string, WeddingProject> = {
  "miriam-david": {
    couple: "Miriam & David",
    location: "Tel Aviv, Israel",
    description: "A beautiful Mediterranean celebration where the sea breeze carried their vows across the golden sands. Their love story unfolded under a stunning chuppah adorned with olive branches.",
    date: "March 2024",
    coverImage: weddingCoupleVeil,
    photos: [
      weddingBouquet,
      bridesmaids,
    ],
  },
  "sarah-yosef": {
    couple: "Sarah & Yosef",
    location: "Negev Desert, Israel",
    description: "Where golden fields meet endless horizons, their love story unfolded at sunset. An intimate celebration surrounded by the raw beauty of nature.",
    date: "October 2024",
    coverImage: sarahYosefField,
    photos: [
      sarahYosefSunset,
    ],
  },
  "leah-jacob": {
    couple: "Leah & Jacob",
    location: "Haifa, Israel",
    description: "Where Mount Carmel meets the sea, their modern love story blended tradition with contemporary elegance. An intimate gathering with breathtaking views.",
    date: "November 2023",
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=85",
    photos: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=85",
    ],
  },
  "esther-daniel": {
    couple: "Esther & Daniel",
    location: "Golan Heights, Israel",
    description: "Above the clouds, where the mountains touch the sky, they exchanged their vows at sunrise. A breathtaking adventure elopement that captured the essence of their free-spirited love.",
    date: "December 2024",
    coverImage: estherDanielClouds,
    photos: [
      estherDanielMountains,
    ],
  },
  "rebecca-aaron": {
    couple: "Rebecca & Aaron",
    location: "Jaffa, Israel",
    description: "Under a canopy of sparklers and surrounded by their closest friends and family, they danced into forever. A night filled with laughter, tears of joy, and pure celebration of love.",
    date: "September 2024",
    coverImage: rebeccaAaronSparklers,
    photos: [
      rebeccaAaronKiss,
      rebeccaAaronFlowers,
      rebeccaAaronCelebration,
    ],
  },
};

const storyList = [
  { slug: "miriam-david", couple: "Miriam & David", location: "Tel Aviv", image: weddingCoupleVeil },
  { slug: "sarah-yosef", couple: "Sarah & Yosef", location: "Negev Desert", image: sarahYosefField },
  { slug: "esther-daniel", couple: "Esther & Daniel", location: "Golan Heights", image: estherDanielClouds },
  { slug: "rebecca-aaron", couple: "Rebecca & Aaron", location: "Jaffa", image: rebeccaAaronSparklers },
  { slug: "leah-jacob", couple: "Leah & Jacob", location: "Haifa", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=85" },
];

// Work index page
const WorkIndex = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />
        <FloatingNav />

        {/* Header */}
        <header className="pt-32 pb-16 px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="chapter-title text-xs mb-4 block">Stories</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">Love, Captured</h1>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              Each wedding is a unique narrative. Click on a story to experience it.
            </p>
          </motion.div>
        </header>

        {/* Stories - Single Column Layout */}
        <section className="pb-32 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-24">
              {storyList.map((story, index) => (
                <motion.div
                  key={story.slug}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <Link to={`/work/${story.slug}`} className="block">
                    <div className="relative overflow-hidden aspect-[16/10] mb-8">
                      <img
                        src={story.image}
                        alt={story.couple}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="chapter-title text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
                        >
                          View Story
                        </motion.span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors duration-400">
                        {story.couple}
                      </h3>
                      <p className="font-serif text-base text-muted-foreground italic">
                        {story.location}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-widest">Noa Levi</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Home</Link>
              <Link to="/about" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">About</Link>
              <Link to="/contact" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

// Individual story page - Simplified with Title, Description, Date, 2 Photos
const WorkStory = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? weddingStories[slug] : null;

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="font-serif text-muted-foreground">Story not found</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <StaticNav />
        <FloatingNav />
        
        {/* Story Header */}
        <header className="pt-32 pb-16 px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link 
                to="/work" 
                className="inline-block font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12 link-underline"
              >
                ← Back to Stories
              </Link>
              
              <span className="chapter-title text-xs mb-4 block">{story.location}</span>
              <h1 className="font-display text-5xl md:text-7xl mb-6">{story.couple}</h1>
              <p className="font-serif text-xl text-muted-foreground leading-relaxed max-w-2xl mb-4">
                {story.description}
              </p>
              <p className="font-serif text-base text-muted-foreground/70 italic">
                {story.date}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Photos */}
        <section className="pb-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {story.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="overflow-hidden">
                  <img
                    src={photo}
                    alt={`${story.couple} - Photo ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Next Story CTA */}
        <section className="py-24 px-8 md:px-16 bg-cream-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="chapter-title text-xs mb-6 block">Continue Exploring</span>
              <Link
                to="/work"
                className="inline-block font-display text-2xl md:text-3xl hover:text-accent transition-colors duration-400 link-underline"
              >
                View All Stories
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="font-display text-xl tracking-widest">Noa Levi</Link>
            <nav className="flex gap-8">
              <Link to="/" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Home</Link>
              <Link to="/about" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">About</Link>
              <Link to="/contact" className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export { WorkIndex, WorkStory };