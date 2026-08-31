import { motion } from "framer-motion";
import { photos } from "@/assets/photos";
import { StaticNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";
import { Stamp, Briefcase, Home, Plane, FileText, Landmark, Check, ShieldCheck, Clock, Users } from "lucide-react";

const services = [
  {
    icon: Stamp,
    title: "Kenya Visa Applications & Renewals",
    text: "Tourist, business and transit visas prepared, lodged and tracked for you — first applications and renewals alike, with every document checked before submission.",
  },
  {
    icon: Briefcase,
    title: "Work Permits & Special Passes",
    text: "Full handling of work permit and special pass applications for expatriate staff, investors and project teams, from eligibility advice to approval.",
  },
  {
    icon: Home,
    title: "Residency & Dependent Permits",
    text: "Residency permits, dependent passes and family reunification documentation — so the people who matter can be here with you, legally and without stress.",
  },
  {
    icon: Plane,
    title: "Business & Investor Visas",
    text: "Entry pathways for entrepreneurs and investors setting up in Kenya, with guidance on the right permit class for your plans.",
  },
  {
    icon: FileText,
    title: "Document Consultation & Advisory",
    text: "Travel document reviews, application audits and honest advice on timelines, requirements and the fastest legitimate route for your situation.",
  },
  {
    icon: Landmark,
    title: "Government Liaison",
    text: "Direct liaison with Kenya's Department of Immigration Services and relevant government bodies — we follow up so you don't have to queue.",
  },
];

const audiences = [
  {
    title: "Expatriates & Professionals",
    text: "Taking up a new role in Kenya? We handle your permit class, documentation and timelines so you can focus on the job, not the paperwork.",
  },
  {
    title: "Companies Sponsoring Staff",
    text: "From single hires to full project teams, we manage sponsorship documentation, renewals and compliance calendars for HR and admin departments.",
  },
  {
    title: "Families & Individuals",
    text: "Dependent passes, residency applications and visa renewals for families reuniting in Kenya — handled with discretion and care.",
  },
];

const steps = [
  { n: "01", title: "Tell us your situation", text: "A short consultation — call, WhatsApp or office visit — to understand your status, goals and timelines." },
  { n: "02", title: "Document checklist & preparation", text: "You receive a clear, itemised checklist. We prepare and review every form and supporting document." },
  { n: "03", title: "Lodging & follow-up", text: "We lodge the application and follow it through with the immigration authorities, keeping you updated at each stage." },
  { n: "04", title: "Approval & collection", text: "We confirm approval, arrange collection or delivery of your documents, and diarise renewal dates so nothing lapses." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Current legal knowledge", text: "Our team stays up to date with Kenya's immigration laws and procedures, so your application is accurate, complete and compliant." },
  { icon: Clock, title: "Efficient processing", text: "Correctly prepared applications move faster. We eliminate the errors and omissions that cause delays and rejections." },
  { icon: Users, title: "Individuals to corporate teams", text: "One applicant or fifty sponsored staff — the same careful handling, with a dedicated contact throughout." },
];

const Immigration = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="Immigration Services Kenya | Visa, Work Permit & Permit Support – Paradise Vacations Kenya"
        description="Simplify your Kenya visa and permit paperwork with Paradise Vacations Kenya — visa applications, work permits, residency support, and documentation handled by experts."
        path="/immigration-services"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Immigration Services Kenya",
            serviceType: "Immigration and permit support",
            areaServed: "Kenya",
            url: "/immigration-services",
            description:
              "Kenya visa applications and renewals, work permits and special passes, residency and dependent permits, business and investor visas, and documentation support with government liaison.",
            provider: { "@type": "TravelAgency", name: "Paradise Vacations Kenya" },
          },
        ]}
      />
      <StaticNav />

      <PageHero
        eyebrow="Immigration Services"
        badge="14 years of trusted documentation support"
        title={<>Immigration Services — Your Trusted Partner for Visas, Permits &amp; Documentation</>}
        subtitle="Navigating immigration procedures can be confusing, time-consuming and stressful. With 14 years of handling travel documentation for individuals, families and corporate clients, we take the guesswork and hassle out of the process — for anyone travelling to or from Kenya."
        image={photos.visaPassportCanada}
        imageAlt="Passport and visa documentation for Kenya immigration services"
        primaryLabel="Get immigration assistance"
        secondaryLabel="Book a consultation"
        secondaryTo="/contact"
        microcopy="Clear guidance from application to approval"
        stats={[
          { value: "14 yrs", label: "Travel expertise" },
          { value: "Direct", label: "Government liaison" },
          { value: "100%", label: "Confidential" },
          { value: "1", label: "Dedicated contact" },
        ]}
      />

      <TrustBar />

      {/* What we handle */}
      <section className="py-20 px-6 md:px-16 bg-sand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">What We Handle</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">Every immigration need, under one roof</h2>
            <p className="font-sans text-muted-foreground text-lg">
              Whether you're an expatriate taking up a new role, a company sponsoring foreign staff,
              or a family reuniting in Kenya — we provide clear guidance and hands-on support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-title text-xs mb-4 block">Who We Serve</span>
            <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">
              Built for people and teams starting a new chapter in Kenya
            </h2>
            <ul className="space-y-6">
              {audiences.map((a) => (
                <li key={a.title} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg mb-1">{a.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevated"
          >
            <img
              src={photos.visaStampPassport}
              alt="Visa stamp in a passport for Kenya work permit and visa support"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 md:px-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">How It Works</span>
            <h2 className="font-display text-3xl md:text-5xl mb-4">From application to approval, handled</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, index) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-xl p-7 border border-border shadow-soft"
              >
                <div className="font-display text-4xl text-primary/25 mb-4">{s.n}</div>
                <h3 className="font-display text-lg mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chapter-title text-xs mb-4 block">Why Clients Trust Us</span>
            <h2 className="font-display text-3xl md:text-5xl">Immigration, done properly the first time</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((w, index) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card border border-border rounded-xl p-7 shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <w.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl mb-3">{w.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        eyebrow="Client Stories"
        heading="Approved in Kenya, without the stress"
        intro="Expatriates, families and HR teams we've guided through the process."
        limit={3}
      />


      <CtaBand
        eyebrow="Get Started"
        heading="Book a consultation. Leave with a clear plan."
        text="Tell us your situation and we'll map out the right visa or permit, the documents you'll need, and a realistic timeline — before you commit to anything."
        primaryLabel="Get immigration assistance"
        secondary={{ label: "Corporate travel management", to: "/corporate-travel" }}
        tone="dark"
      />

      <SiteFooter />
      <StickyCta />
    </div>
  </PageTransition>
);

export default Immigration;
