import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Seo
          title={`${post.title} | Paradise Vacations Kenya`}
          description={post.excerpt}
          path={`/blog/${post.slug}`}
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              author: { "@type": "Organization", name: "Paradise Vacations Kenya" },
              publisher: { "@type": "Organization", name: "Paradise Vacations Kenya" },
            },
          ]}
        />
        <StaticNav />

        <article className="pt-32 pb-20 px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} /> All articles
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-xs uppercase tracking-widest text-primary">{post.category}</span>
                <span className="font-sans text-xs text-muted-foreground">{post.date}</span>
                <span className="flex items-center gap-1 font-sans text-xs text-muted-foreground">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl leading-tight mb-8">{post.title}</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-elevated mb-12 aspect-[16/9]"
            >
              <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
            </motion.div>

            <div className="space-y-8">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-display text-2xl md:text-3xl mb-4">{section.heading}</h2>
                  )}
                  <div className="space-y-5">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="font-sans text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <CtaBand
          eyebrow="Ready When You Are"
          heading="Turn this article into an itinerary"
          text="Send us your dates and budget — a named consultant will reply within 24 hours with a costed plan."
          primaryLabel="Get my quote"
        />

        <SiteFooter />
        <StickyCta />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
