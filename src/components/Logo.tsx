import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const logoAsset = { url: "/paradise-logo.jpg" };

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/** Paradise Vacations logo lockup using the original brand artwork. */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center group", className)}
      aria-label="Paradise Vacations home"
    >
      <img
        src={logoAsset.url}
        alt="Paradise Vacations logo"
        className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        width={200}
        height={80}
      />
    </Link>
  );
}
