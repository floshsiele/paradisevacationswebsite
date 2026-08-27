import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
const logoAsset = { url: "/paradise-logo.png" };

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/** Brand lockup: circular logo mark + wordmark, matching the Paradise Vacations logo. */
export function Logo({ variant = "dark", className, showTagline = true }: LogoProps) {
  const onDark = variant === "light";

  return (
    <Link to="/" className={cn("flex items-center gap-3 group", className)} aria-label="Paradise Vacations home">
      <span className="relative shrink-0 rounded-full bg-white p-[2px] shadow-soft ring-1 ring-primary/20 overflow-hidden">
        <img
          src={logoAsset.url}
          alt="Paradise Vacations logo"
          className="h-11 w-11 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={44}
          height={44}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg md:text-xl tracking-wide transition-colors duration-300",
            onDark ? "text-white" : "text-primary"
          )}
        >
          Paradise Vacations
        </span>
        {showTagline && (
          <span
            className={cn(
              "font-sans text-[10px] md:text-[11px] tracking-[0.22em] uppercase mt-1",
              onDark ? "text-accent" : "text-accent"
            )}
          >
            Dream. Explore. Discover.
          </span>
        )}
      </span>
    </Link>
  );
}
