import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Menu, User, Moon, Sun } from "lucide-react";
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

  // Add scroll event listener to change header style on scroll
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
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
          <span className="text-airbnb-red font-bold text-xl ml-2 hidden sm:block">
            StayHub
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex items-center border rounded-full p-2 shadow-sm hover:shadow-md transition-all">
          <Button variant="ghost" className="rounded-full font-medium text-sm">Anywhere</Button>
          <div className="h-5 border-r border-gray-300"></div>
          <Button variant="ghost" className="rounded-full font-medium text-sm">Any week</Button>
          <div className="h-5 border-r border-gray-300"></div>
          <Button variant="ghost" className="rounded-full font-medium text-sm">Add guests</Button>
          <Button size="icon" className="rounded-full bg-airbnb-red text-white hover:bg-airbnb-red/90">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        {/* Profile and menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="rounded-full hidden md:flex">
            <span className="font-medium text-sm">Become a Host</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>
          
          {/* Theme Toggle */}
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
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full border-gray-300 flex items-center gap-2 p-1 pl-3">
                <Menu className="h-4 w-4" />
                <div className="bg-gray-500 rounded-full p-1 text-white">
                  <User className="h-4 w-4" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem className="cursor-pointer font-medium">Sign up</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Login</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Host your home</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Host an experience</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
