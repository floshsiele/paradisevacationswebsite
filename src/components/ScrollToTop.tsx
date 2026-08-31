import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;
      let timer = 0;

      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
          return true;
        }
        return false;
      };

      // Retry while the target section mounts (lazy pages, images, animations).
      const poll = () => {
        if (scrollToTarget() || attempts > 20) return;
        attempts += 1;
        timer = window.setTimeout(poll, 100);
      };
      poll();

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    // `key` is included so clicking the same #book CTA twice still scrolls.
  }, [pathname, hash, key, reduceMotion]);

  return null;
}
