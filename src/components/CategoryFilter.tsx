
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CategoryItem {
  id: string;
  label: string;
  icon: string;
}

const categories: CategoryItem[] = [
  { id: "trending", label: "Trending", icon: "🔥" },
  { id: "beachfront", label: "Beachfront", icon: "🏖️" },
  { id: "cabins", label: "Cabins", icon: "🌲" },
  { id: "design", label: "Design", icon: "🏛️" },
  { id: "tiny_homes", label: "Tiny homes", icon: "🏠" },
  { id: "islands", label: "Islands", icon: "🏝️" },
  { id: "amazing_views", label: "Amazing views", icon: "🏞️" },
  { id: "amazing_pools", label: "Amazing pools", icon: "🏊" },
  { id: "tropical", label: "Tropical", icon: "🌴" },
  { id: "countryside", label: "Countryside", icon: "🌄" },
  { id: "mansions", label: "Mansions", icon: "🏰" },
  { id: "skiing", label: "Skiing", icon: "⛷️" },
  { id: "boats", label: "Boats", icon: "⛵" },
  { id: "creative_spaces", label: "Creative spaces", icon: "🎨" },
  { id: "luxe", label: "Luxe", icon: "✨" },
  { id: "historical_homes", label: "Historical homes", icon: "🏛️" },
  { id: "vineyards", label: "Vineyards", icon: "🍷" },
];

export const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("categories-container");
    if (!container) return;

    const scrollAmount = 200;
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;

    container.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 rounded-full bg-white shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div
          id="categories-container"
          className="flex items-center space-x-8 overflow-x-auto px-8 py-4 scrollbar-hide"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
              className={`flex flex-col items-center space-y-2 hover:bg-transparent ${
                category.id === activeCategory
                  ? "text-foreground opacity-100"
                  : "text-airbnb-gray opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-xs whitespace-nowrap">{category.label}</span>
              {category.id === activeCategory && (
                <div className="absolute -bottom-3 h-0.5 w-4/5 rounded-full bg-foreground" />
              )}
            </Button>
          ))}
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-10 rounded-full bg-white shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <Separator className="mt-4" />
    </div>
  );
};
