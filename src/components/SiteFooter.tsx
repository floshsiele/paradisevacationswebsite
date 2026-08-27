import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="py-16 px-8 md:px-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Logo variant="light" className="mb-5" />
          <p className="font-sans text-primary-foreground/70 text-sm leading-relaxed">
            Committed to offering travel services of the highest quality, combining our energy and enthusiasm with years of experience.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <Link to="/" className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/about" className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/corporate-travel" className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Corporate Travel Management</Link>
            <Link to="/packages" className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Packages</Link>
            <Link to="/dmc" className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">DMC</Link>
            <Link to="/contact" className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <p className="font-sans text-sm text-primary-foreground/70 mb-3">
            Occidental Plaza, 3rd floor, Muthithi Rd, Westlands, Nairobi, Kenya
          </p>
          <p className="font-sans text-sm text-primary-foreground/70 mb-3">P.O. Box 101178 – 00100</p>
          <a href="tel:+254726927081" className="flex items-center gap-2 font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-2">
            <Phone size={14} /> 0726 927 081
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="font-sans text-sm text-primary-foreground/50">
          © 2025 Paradise Vacations Kenya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
