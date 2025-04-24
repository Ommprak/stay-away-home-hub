import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { properties } from "@/data/properties";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Help Center</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">AirCover</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Anti-discrimination</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Disability support</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Cancellation options</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Airbnb your home</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">AirCover for Hosts</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Hosting resources</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Community forum</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Hosting responsibly</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Newsroom</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">New features</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Careers</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Investors</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Gift cards</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Disaster relief</Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 hover:underline">Combating discrimination</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2025 Airbnb Clone, Inc.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>·</span>
              <Link to="#" className="hover:underline">Privacy</Link>
              <span>·</span>
              <Link to="#" className="hover:underline">Terms</Link>
              <span>·</span>
              <Link to="#" className="hover:underline">Sitemap</Link>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="ghost" className="text-sm flex items-center gap-2">
              <Globe className="h-4 w-4" />
              English (US)
            </Button>
            <Button variant="ghost" className="text-sm">
              $ USD
            </Button>
            <Button variant="ghost" className="text-sm" onClick={() => document.getElementById('properties-sheet')?.click()}>
              Properties List
            </Button>
          </div>
        </div>
        
        {/* Properties Sheet */}
        <Sheet>
          <SheetTrigger id="properties-sheet" />
          <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>All Properties</SheetTitle>
              <SheetDescription>Complete list of available properties</SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {properties.map((property) => (
                <Link 
                  key={property.id} 
                  to={`/property/${property.id}`} 
                  className="flex items-start space-x-4 p-4 hover:bg-gray-100 rounded-lg"
                >
                  <img 
                    src={property.images[0]} 
                    alt={property.title} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{property.title}</h3>
                    <p className="text-sm text-gray-600">{property.location}</p>
                    <p className="text-sm font-semibold mt-1">${property.price} / night</p>
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </footer>
  );
};