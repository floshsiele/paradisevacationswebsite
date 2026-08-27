import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const logoAsset = { url: "/paradise-logo.jpg" };

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/** Paradise Vacations logo — the original brand artwork, unmodified. */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center group", className)}
      aria-label="Paradise Vacations home"
    >
      <span className="rounded-xl bg-white p-1.5 shadow-sm">
        <img
          src={logoAsset.url}
          alt="Paradise Vacations logo"
          className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          width={256}
          height={256}
        />
      </span>
    </Link>
  );
}
