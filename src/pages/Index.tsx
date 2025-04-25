
import { useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Header } from "@/components/Header";
import { PropertyCard } from "@/components/PropertyCard";
import { Footer } from "@/components/Footer";
import { properties } from "@/data/properties";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex-grow">
        <CategoryFilter />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-4 sm:mt-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
