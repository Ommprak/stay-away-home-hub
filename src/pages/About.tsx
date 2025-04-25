
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We are committed to providing exceptional wellness and healthcare services to our community. Our mission is to make quality healthcare accessible to everyone.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To deliver innovative healthcare solutions that improve the quality of life for our clients and communities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Excellence in service</li>
                <li>Compassionate care</li>
                <li>Innovation and growth</li>
                <li>Community engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
