import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <Link 
          to="/" 
          className="inline-flex items-center group transition-transform duration-300 hover:scale-105"
          aria-label="Home"
        >
          <img 
            src="/logo.png"
            alt="My Health Restart"
            className="h-12 sm:h-16 object-contain transition-all duration-300 group-hover:brightness-110 dark:invert dark:brightness-0 dark:saturate-0"
          />
        </Link>
      </div>
    </header>
  );
};