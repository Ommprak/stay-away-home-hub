import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchResult(searchQuery);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-transparent backdrop-blur-[2px]" : "bg-transparent"}`}>
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png"
              alt="My Health Restart"
              className="h-16 transition-transform group-hover:scale-105 dark:invert dark:brightness-0 dark:saturate-0"
            />
          </Link>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4 relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full h-12 pl-6 pr-12 rounded-full bg-white/5 backdrop-blur-[2px] border border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-airbnb-red/30 focus:ring-2 focus:ring-airbnb-red/10 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
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
              <div className="absolute top-14 left-0 right-0 text-center text-sm text-muted-foreground/80 animate-fade-in">
                🔍 You searched for: "{searchResult}"
              </div>
            )}
          </form>rm>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full hover:bg-background/10 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-background/10 transition-colors"
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};