
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg 
            className="h-8 w-auto text-airbnb-red"
            viewBox="0 0 24 24" 
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 12h3v8h14v-8h3L12 2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
          <span className="text-airbnb-red font-bold text-xl ml-2">
            StayHub
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex items-center max-w-md w-full relative">
          <input 
            type="text"
            className="w-full h-12 pl-4 pr-12 rounded-full bg-background/5 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-airbnb-red/50 transition-all"
            placeholder="Search"
          />
          <Button 
            size="icon" 
            className="absolute right-1 rounded-full border border-airbnb-red bg-transparent hover:bg-airbnb-red/10 h-10 w-10"
          >
            <Search className="h-4 w-4 text-airbnb-red" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full flex items-center gap-2 p-2">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem className="cursor-pointer font-medium">Sign up</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Login</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
