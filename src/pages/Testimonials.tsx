
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Customer Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your testimonials here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
