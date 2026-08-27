import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Paradise Vacations logo lockup — the original circular emblem artwork
 * alongside a crisp HTML wordmark and gold tagline.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-3 group", className)}
      aria-label="Paradise Vacations home"
    >
      <img
        src="/paradise-emblem.png"
        alt="Paradise Vacations emblem"
        className="h-12 md:h-16 w-12 md:w-16 shrink-0 rounded-full object-cover ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-105"
        width={246}
        height={246}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl md:text-2xl tracking-tight whitespace-nowrap",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          Paradise Vacations
        </span>
        <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.28em] text-accent mt-1.5 whitespace-nowrap">
          DREAM. EXPLORE. DISCOVER.
        </span>
      </span>
    </Link>
  );
}
