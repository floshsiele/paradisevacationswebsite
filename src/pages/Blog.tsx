import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { posts } from "@/data/posts";

const Blog = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Travel Blog | Safari, Corporate Travel & Kenya Guides — Paradise Vacations"
        description="Practical travel guides from Nairobi's travel experts: Masai Mara seasons, Kenya visa rules, corporate travel policy checklists, beach guides and DMC advice."
        path="/blog"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Paradise Vacations Kenya Travel Blog",
            url: "/blog",
          },
        ]}
      />
      <StaticNav />

      <section className="pt-32 pb-14 px-6 md:px-16 text-center">
        <span className="chapter-title text-xs mb-4 block">From Our Desks</span>
        <h1 className="font-display text-4xl md:text-6xl">The Paradise travel journal</h1>
        <p className="font-sans text-muted-foreground mt-4 max-w-2xl mx-auto">
          Honest, practical guides written by the consultants and guides who run these trips every week —
          no filler, no stock advice.
        </p>
      </section>

      <section className="pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="rounded-xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-elevated transition-shadow duration-500 flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs uppercase tracking-widest text-primary">{post.category}</span>
                  <span className="flex items-center gap-1 font-sans text-xs text-muted-foreground">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl mb-3 leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-muted-foreground">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary hover:underline"
                  >
                    Read article <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Plan Your Trip"
        heading="Reading is the start. Travelling is the point."
        text="Tell us where you are thinking of going and a named consultant will come back within 24 hours with a costed plan."
        primaryLabel="Start planning"
      />

      <SiteFooter />
      <StickyCta />
    </div>
  </PageTransition>
);

export default Blog;
