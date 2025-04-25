
import { Link } from "react-router-dom";
import { Moon, Sun, MoreVertical, Home, Store, MessageSquare, Phone, HelpCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header = () => {
  const { theme, setTheme } = useTheme();
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
              className="h-12 sm:h-16 object-contain transition-all duration-300 group-hover:brightness-110 dark:invert"
            />
          </Link>
          
          <nav className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Link to="/" className="text-foreground/90 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground/90 hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/testimonials" className="text-foreground/90 hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products" className="flex items-center">
                    <Store className="mr-2 h-4 w-4" />
                    <span>Products</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/testimonials" className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Testimonials</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </Link>
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};
