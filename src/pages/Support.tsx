
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Support Hub</h1>
        
        <Tabs defaultValue="coverage" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TabsTrigger value="coverage">Coverage Plans</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="coverage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Coverage Plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Individual Plans</h3>
                  <p>Comprehensive health coverage tailored to individual needs</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Family Plans</h3>
                  <p>Extended coverage for families with customizable options</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Corporate Plans</h3>
                  <p>Wellness solutions for organizations of all sizes</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Policies & Procedures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cancellations</h3>
                  <p>Learn about our flexible cancellation policies</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Refunds</h3>
                  <p>Understanding our refund process and timeline</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gift Cards</h3>
                  <p>Purchase and redeem wellness gift cards</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community & Forums</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
                  <p>Connect with other members and share experiences</p>
                  <Button className="mt-4">Join Discussion</Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Connect</h3>
                  <p>Schedule consultations with health professionals</p>
                  <Button className="mt-4">Find an Expert</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resources & Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health Resources</h3>
                  <p>Access our library of health and wellness resources</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Crisis Support</h3>
                  <p>24/7 emergency support and resources</p>
                  <Button variant="destructive" className="mt-4">Get Help Now</Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Careers</h3>
                  <p>Join our team of healthcare professionals</p>
                  <Link to="/careers" className="inline-block mt-4">
                    <Button>View Opportunities</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
