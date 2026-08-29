import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (scrollToTarget()) return;
      const timer = window.setTimeout(scrollToTarget, 250);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [pathname, hash, reduceMotion]);

  return null;
}
