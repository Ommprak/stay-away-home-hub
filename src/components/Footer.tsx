import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="flex items-center border rounded-full p-2 shadow-sm hover:shadow-md transition-all">
              <Button variant="ghost" className="rounded-full font-medium text-sm">Anywhere</Button>
              <div className="h-5 border-r border-gray-300"></div>
              <Button variant="ghost" className="rounded-full font-medium text-sm">Any week</Button>
              <div className="h-5 border-r border-gray-300"></div>
              <Button variant="ghost" className="rounded-full font-medium text-sm">Add guests</Button>
            </div>
            <Button variant="ghost" className="text-sm flex items-center gap-2">
              <Globe className="h-4 w-4" />
              English (US)
            </Button>
            <Button variant="ghost" className="text-sm">
              $ USD
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};