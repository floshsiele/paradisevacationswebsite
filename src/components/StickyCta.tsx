import { Link } from "react-router-dom";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { trackCta } from "@/lib/analytics";
import { WHATSAPP_NUMBER } from "@/components/WhatsAppButton";

export function StickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t border-border">
      <div className="grid grid-cols-3">
        <a
          href="tel:+254726927081"
          onClick={() => trackCta("Call", { cta_location: "sticky_mobile" })}
          className="flex flex-col items-center justify-center gap-1 py-3 font-sans text-[11px] uppercase tracking-wider text-foreground"
        >
          <Phone size={18} className="text-primary" /> Call
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
          onClick={() => trackCta("WhatsApp", { cta_location: "sticky_mobile" })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 font-sans text-[11px] uppercase tracking-wider text-foreground border-x border-border"
        >
          <MessageCircle size={18} className="text-primary" /> WhatsApp
        </a>
        <Link
          to="/packages#book"
          onClick={() => trackCta("Free Quote", { cta_location: "sticky_mobile", destination: "/packages#book" })}
          className="flex flex-col items-center justify-center gap-1 py-3 font-sans text-[11px] uppercase tracking-wider bg-primary text-primary-foreground"
        >
          <CalendarCheck size={18} /> Free Quote
        </Link>
      </div>
    </div>
  );
}
