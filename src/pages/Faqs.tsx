import { StaticNav } from "@/components/FloatingNav";
import { PageTransition } from "@/components/PageTransition";
import { AllFaqs } from "@/components/AllFaqs";
import { faqPageJsonLd } from "@/components/FaqBlock";
import { allFaqs } from "@/data/faqs";
import { CtaBand } from "@/components/CtaBand";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { Seo } from "@/components/Seo";

const Faqs = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Seo
        title="FAQs | Paradise Vacations Kenya — Booking, Safaris, DMC, Visas"
        description="All frequently asked questions in one place: booking and payments, Kenya safaris, corporate travel management, destination management, visas and tea buyer tours."
        path="/faqs"
        jsonLd={[faqPageJsonLd(allFaqs)]}
      />
      <StaticNav />

      <section className="pt-32 pb-4 px-6 md:px-16 text-center">
        <span className="chapter-title text-xs mb-4 block">Help Centre</span>
        <h1 className="font-display text-4xl md:text-6xl">Frequently asked questions</h1>
        <p className="font-sans text-muted-foreground mt-4 max-w-2xl mx-auto">
          Every answer from across our website — booking, safaris, corporate travel, DMC, visas and tea
          tourism — gathered on one page.
        </p>
      </section>

      <AllFaqs />

      <CtaBand
        eyebrow="Still Have a Question?"
        heading="Talk to a consultant directly"
        text="Send us your question and a named consultant will reply within one working day — no queues, no bots."
        primaryLabel="Ask a question"
      />

      <SiteFooter />
      <StickyCta />
    </div>
  </PageTransition>
);

export default Faqs;
