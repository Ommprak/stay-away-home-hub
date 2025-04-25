
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-sm border-b">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center group transition-transform duration-300 hover:scale-105"
            aria-label="Home"
          >
            <img 
              src="/logo.png"
              alt="Logo"
              className="h-12 sm:h-16 object-contain transition-all duration-300 group-hover:brightness-110 dark:invert dark:brightness-0 dark:saturate-0"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground/90 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground/90 hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/testimonials" className="text-foreground/90 hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link to="/offers" className="text-foreground/90 hover:text-foreground transition-colors">
              Offers
            </Link>
            <Link to="/contact" className="text-foreground/90 hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
