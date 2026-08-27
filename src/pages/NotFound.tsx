import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { StaticNav } from "@/components/FloatingNav";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <StaticNav />
      <div className="flex flex-col items-center justify-center pt-40 pb-20 px-8">
        <h1 className="font-display text-6xl md:text-8xl mb-4">404</h1>
        <p className="font-sans text-xl text-muted-foreground mb-8">This destination could not be found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-md hover:bg-primary/90 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
