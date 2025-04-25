import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="container max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:underline">Careers</Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-gray-600 hover:underline">Press</Link>
              </li>
            </ul>
          </div>

          

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-600 hover:underline">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:underline">Blog</Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-sm text-gray-600 hover:underline">Newsletter</Link>
              </li>
              <li>
                <Link to="/social" className="text-sm text-gray-600 hover:underline">Social Media</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="ghost" className="text-sm">
              English
            </Button>
            <Button variant="ghost" className="text-sm">
              USD
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};