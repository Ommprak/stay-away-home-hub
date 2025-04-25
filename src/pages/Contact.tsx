
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-7xl mx-auto px-6 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full rounded-md border p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full rounded-md border p-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full rounded-md border p-2"></textarea>
            </div>
            <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
