import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Loader2 } from "lucide-react";
import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { posts as staticPosts } from "@/data/posts";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const staticPost: any = (staticPosts as any[]).find((p: any) => p.slug === slug);
  const [post, setPost] = useState<any>(staticPost);
  const [loading, setLoading] = useState(!staticPost);
  useEffect(() => { if (!slug) return; supabase.from('blog_posts').select('*').eq('slug', slug).eq('status','published').maybeSingle().then(({ data }) => { if (data) setPost(data); setLoading(false); }); }, [slug]);
  if (loading) return <div className="min-h-screen grid place-items-center"><Loader2 className="animate-spin" /></div>;
  if (!post) return <Navigate to="/blog" replace />;
  const image = post.featured_image_url || post.image;
  const imageAlt = post.featured_image_alt || post.imageAlt || post.title;
  const description = post.meta_description || post.excerpt;
  return <PageTransition><div className="min-h-screen bg-background"><Seo title={`${post.meta_title || post.title} | Paradise Vacations Kenya`} description={description} path={`/blog/${post.slug}`} image={image} type="article" jsonLd={{ "@context":"https://schema.org", "@type":"BlogPosting", headline:post.title, description, image, datePublished:post.published_at || undefined, author:{"@type":"Organization",name:"Paradise Vacations Kenya"}, publisher:{"@type":"Organization",name:"Paradise Vacations Kenya"} }} /><StaticNav />
    <article className="pt-32 pb-20 px-6 md:px-16"><div className="max-w-3xl mx-auto"><Link to="/blog" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8"><ArrowLeft size={14}/> All articles</Link>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}><div className="flex items-center gap-3 mb-5"><span className="font-sans text-xs uppercase tracking-widest text-primary">{post.category}</span><span className="font-sans text-xs text-muted-foreground">{post.published_at ? new Date(post.published_at).toLocaleDateString('en-US',{month:'long',year:'numeric'}) : post.date}</span><span className="flex items-center gap-1 font-sans text-xs text-muted-foreground"><Clock size={12}/> {post.read_time_minutes ? `${post.read_time_minutes} min read` : post.readTime}</span></div><h1 className="font-display text-3xl md:text-5xl leading-tight mb-8">{post.title}</h1></motion.div>
      <img src={image} alt={imageAlt} className="w-full aspect-[16/9] object-cover rounded-xl mb-10" />
      {post.content_html ? <div className="blog-content" dangerouslySetInnerHTML={{__html: post.content_html}} /> : <div className="space-y-8">{post.content?.map((section:any, i:number) => <section key={i}>{section.heading && <h2 className="font-display text-2xl mb-4">{section.heading}</h2>}{section.paragraphs?.map((p:string,j:number)=><p key={j} className="font-sans text-lg leading-relaxed text-foreground/85 mb-4">{p}</p>)}</section>)}</div>}
      {post.image_photographer && <p className="text-xs text-muted-foreground mt-8">Featured image by <a href={post.image_photographer_url} target="_blank" rel="noreferrer" className="underline">{post.image_photographer}</a> on Pexels.</p>}
    </div></article><CtaBand eyebrow="Plan Your Trip" heading="Turn the guide into a real itinerary." text="Tell us what you are planning and we will build the practical details around it." primaryLabel="Start planning" /><SiteFooter /><StickyCta /></div></PageTransition>;
};
export default BlogPost;
