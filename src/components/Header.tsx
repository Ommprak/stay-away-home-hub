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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45.06 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z" />
          </svg>
          <span className="text-airbnb-red font-bold text-xl ml-2 hidden sm:block">
            airbnb
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
