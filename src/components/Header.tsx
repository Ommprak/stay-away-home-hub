
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

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResult(searchQuery);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-transparent backdrop-blur-[2px]" : "bg-transparent"}`}>
      <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <svg 
            className="h-7 w-auto text-airbnb-red transition-transform group-hover:scale-110 drop-shadow-sm"
            viewBox="0 0 24 24" 
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 12h3v8h14v-8h3L12 2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
          <span className="text-airbnb-red font-bold text-xl ml-2.5 transition-colors drop-shadow-sm">
            StayHub
          </span>
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex flex-col items-center max-w-md w-full relative mx-4">
          <div className="flex w-full relative">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-6 pr-14 rounded-full bg-white/5 backdrop-blur-[2px] border border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-airbnb-red/30 focus:ring-2 focus:ring-airbnb-red/10 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              placeholder="Search"
            />
            <Button 
              type="submit"
              size="icon" 
              className="absolute right-1.5 rounded-full border border-airbnb-red/70 bg-transparent hover:bg-airbnb-red/5 hover:border-airbnb-red h-9 w-9 shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all"
            >
              <Search className="h-4 w-4 text-airbnb-red" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          {searchResult && (
            <div className="absolute top-14 text-sm text-muted-foreground/80 animate-fade-in">
              Searching for: {searchResult}
            </div>
          )}
        </form>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-background/10 transition-colors"
          >
            <Globe className="h-[18px] w-[18px]" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-background/10 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="rounded-full hover:bg-background/10 transition-colors p-2"
              >
                <User className="h-[18px] w-[18px]" />
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
