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
      className={cn("inline-flex items-center gap-2 sm:gap-3 group", className)}
      aria-label="Paradise Vacations home"
    >
      <div className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 shrink-0 overflow-hidden rounded-full bg-transparent transition-transform duration-500 group-hover:scale-105">
        <img
          src="/paradise-emblem.png"
          alt="Paradise Vacations emblem"
          className="h-full w-full object-cover"
          width={512}
          height={512}
        />
      </div>

      <span className="flex flex-col leading-none min-w-0">
        <span
          className={cn(
            "font-display text-lg sm:text-xl md:text-2xl tracking-tight whitespace-nowrap",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          Paradise Vacations
        </span>
        <span className="font-sans text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.28em] text-accent mt-1 sm:mt-1.5 whitespace-nowrap">
          DREAM. EXPLORE. DISCOVER.
        </span>
      </span>
    </Link>
  );
}
