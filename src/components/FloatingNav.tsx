import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Corporate Travel Management", path: "/corporate-travel" },
  { name: "Packages", path: "/packages" },
  { name: "DMC", path: "/dmc" },
  { name: "Contact", path: "/contact" },
];

// Pages with dark backgrounds (hero with dark overlay)
const darkBackgroundPages = ["/"];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Don't show floating nav on home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav after scrolling down 100px
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

  if (isHomePage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        >
          <div className="flex items-center gap-8 px-8 py-4 bg-background/90 backdrop-blur-md border border-border/50 rounded-full shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-sans text-sm tracking-widest uppercase transition-all duration-400 link-underline",
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

// Static nav for top of pages - adapts to page background
export function StaticNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkBackground = darkBackgroundPages.includes(location.pathname);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 py-6 px-6 md:py-8 md:px-16",
          isDarkBackground ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border/30"
        )}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className={cn(
              "font-display text-xl tracking-wide transition-colors duration-400",
              isDarkBackground
                ? "text-white/90 hover:text-white"
                : "text-foreground/90 hover:text-foreground"
            )}
          >
            Paradise Vacations
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-sans text-sm tracking-widest uppercase transition-all duration-400 link-underline",
                  isDarkBackground
                    ? location.pathname === item.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : location.pathname === item.path
                      ? "text-primary font-semibold"
                      : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+254726927081"
              className={cn(
                "hidden lg:flex items-center gap-2 font-sans text-sm tracking-widest transition-colors duration-400",
                isDarkBackground ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"
              )}
            >
              <Phone size={14} />
              0726 927 081
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              isDarkBackground ? "text-white" : "text-foreground"
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/98 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-sans text-2xl tracking-widest uppercase transition-all duration-400",
                      location.pathname === item.path
                        ? "text-primary font-semibold"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:+254726927081"
                className="flex items-center gap-2 font-sans text-lg text-foreground/70 mt-4"
              >
                <Phone size={18} />
                0726 927 081
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
