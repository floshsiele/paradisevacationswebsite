import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="py-16 px-8 md:px-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link to="/" className="font-display text-2xl tracking-wide mb-4 block">Paradise Vacations</Link>
          <p className="font-sans text-background/70 text-sm leading-relaxed">
            Committed to offering travel services of the highest quality, combining our energy and enthusiasm with years of experience.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Home</Link>
            <Link to="/about" className="font-sans text-sm text-background/70 hover:text-background transition-colors">About Us</Link>
            <Link to="/corporate-travel" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Corporate Travel Management</Link>
            <Link to="/packages" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Packages</Link>
            <Link to="/dmc" className="font-sans text-sm text-background/70 hover:text-background transition-colors">DMC</Link>
            <Link to="/book" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Book</Link>
            <Link to="/contact" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <p className="font-sans text-sm text-background/70 mb-3">
            Occidental Plaza, 3rd floor, Muthithi Rd, Westlands, Nairobi, Kenya
          </p>
          <p className="font-sans text-sm text-background/70 mb-3">P.O. Box 101178 – 00100</p>
          <a href="tel:+254726927081" className="flex items-center gap-2 font-sans text-sm text-background/70 hover:text-background transition-colors mb-2">
            <Phone size={14} /> 0726 927 081
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-background/10 text-center">
        <p className="font-sans text-sm text-background/50">
          © 2025 Paradise Vacations Kenya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
