
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Support Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Coverage Plans</h2>
            <ul className="space-y-2">
              <li>Individual Plans</li>
              <li>Family Coverage</li>
              <li>Corporate Wellness</li>
              <li>Accessibility Options</li>
            </ul>
            <Button asChild className="mt-4">
              <Link to="/plans">View Plans</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Policies</h2>
            <ul className="space-y-2">
              <li>Cancellation Policy</li>
              <li>Refund Guidelines</li>
              <li>Service Terms</li>
              <li>Privacy Policy</li>
            </ul>
            <Button asChild className="mt-4">
              <Link to="/policies">Learn More</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Community</h2>
            <ul className="space-y-2">
              <li>Discussion Forum</li>
              <li>Expert Connect</li>
              <li>Share Experiences</li>
              <li>Support Groups</li>
            </ul>
            <Button asChild className="mt-4">
              <Link to="/community">Join Community</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Health Equity</h2>
            <ul className="space-y-2">
              <li>Anti-discrimination Policy</li>
              <li>Accessibility Initiatives</li>
              <li>Community Outreach</li>
              <li>Resource Centers</li>
            </ul>
            <Button asChild className="mt-4">
              <Link to="/equity">Learn More</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Crisis Support</h2>
            <ul className="space-y-2">
              <li>Emergency Resources</li>
              <li>24/7 Support Line</li>
              <li>Relief Programs</li>
              <li>Local Resources</li>
            </ul>
            <Button asChild className="mt-4 bg-red-600">
              <Link to="/crisis">Get Help</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>Health Sessions</li>
              <li>Wellness Plans</li>
              <li>Gift Cards</li>
              <li>Career Opportunities</li>
            </ul>
            <Button asChild className="mt-4">
              <Link to="/resources">Browse Resources</Link>
            </Button>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Newsroom</h3>
              <p className="text-gray-600 mb-4">Stay updated with the latest health and wellness news.</p>
              <Button asChild variant="outline">
                <Link to="/news">Visit Newsroom</Link>
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Investor Relations</h3>
              <p className="text-gray-600 mb-4">Learn about investment opportunities and company growth.</p>
              <Button asChild variant="outline">
                <Link to="/investors">Investor Info</Link>
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
