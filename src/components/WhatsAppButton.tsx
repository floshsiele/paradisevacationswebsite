import { useLocation } from "react-router-dom";

export const WHATSAPP_NUMBER = "254726927081";
export const WHATSAPP_DISPLAY = "+254 726 927 081";

const contextMessage: Record<string, string> = {
  "/": "Hello Paradise Vacations, I'd like help planning a trip. Could you send me a quote?",
  "/about": "Hello Paradise Vacations, I'd like to know more about your services.",
  "/corporate-travel":
    "Hello Paradise Vacations, I'd like to discuss corporate travel management for my organisation.",
  "/packages": "Hello Paradise Vacations, I'm interested in one of your tour packages. Could you share details?",
  "/dmc": "Hello Paradise Vacations, I'd like a DMC ground-handling proposal for a group coming to East Africa.",
  "/immigration-services":
    "Hello Paradise Vacations, I need assistance with a Kenyan visa / work permit application.",
  "/book": "Hello Paradise Vacations, I'd like a free travel quote.",
  "/contact": "Hello Paradise Vacations, I'd like to speak to a travel consultant.",
};

export function whatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppButton() {
  const { pathname } = useLocation();
  const message =
    contextMessage[pathname] ??
    (pathname.startsWith("/packages/")
      ? "Hello Paradise Vacations, I'd like more details and pricing on this package."
      : contextMessage["/"]);

  return (
    <a
      href={whatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Paradise Vacations on WhatsApp (${WHATSAPP_DISPLAY})`}
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.56-1.71a12.74 12.74 0 006.24 1.62h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 00-9.04-3.66zm0 23.31h-.01a10.6 10.6 0 01-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.55 10.55 0 01-1.62-5.63c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 013.11 7.52c0 5.86-4.77 10.6-10.63 10.6zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16s-.82 1.04-1 1.25c-.19.21-.37.24-.68.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4s-1.11 1.09-1.11 2.65 1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
      <span className="font-sans text-sm font-semibold tracking-wide">Chat on WhatsApp</span>
    </a>
  );
}
