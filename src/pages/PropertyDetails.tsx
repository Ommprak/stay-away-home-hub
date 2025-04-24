
import { useParams } from "react-router-dom";
import { Heart, Share, Star, MapPin, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Mock property data
const property = {
  id: 1,
  title: "Stunning Beachfront Villa with Infinity Pool",
  description: "Experience the ultimate beachfront luxury in this stunning villa with panoramic ocean views. Wake up to the sound of waves and enjoy breathtaking sunsets from your private infinity pool.",
  location: "Malibu, California",
  host: {
    name: "John",
    joined: "January 2019",
    isSuperhost: true,
    avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  rating: 4.97,
  reviews: 243,
  price: 350,
  images: [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  ],
  features: [
    "3 bedrooms",
    "2 bathrooms",
    "Beachfront",
    "Infinity pool",
    "Floor-to-ceiling windows",
    "Modern kitchen",
    "Private garden",
    "Air conditioning",
  ],
};

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 font-medium">{property.rating}</span>
            </div>
            <span>·</span>
            <span className="underline font-medium">{property.reviews} reviews</span>
            <span>·</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4" />
              <span className="ml-1 underline">{property.location}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm flex items-center">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" className="text-sm flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
        
        {/* Image gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[60vh]">
          <div className="col-span-2 row-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="h-full w-full object-cover"
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index}>
              <img 
                src={image} 
                alt={`${property.title} ${index + 2}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  Entire villa hosted by {property.host.name}
                </h2>
                <p className="text-airbnb-gray mt-1">
                  8 guests · 3 bedrooms · 4 beds · 2 baths
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow">
                  <img 
                    src={property.host.avatar} 
                    alt={property.host.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Property features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-airbnb-gray rounded-full mr-3"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            {/* Property description */}
            <div>
              <p className="text-base leading-relaxed">
                {property.description}
              </p>
              <Button variant="link" className="p-0 mt-2 text-black font-medium">
                Show more
              </Button>
            </div>
            
            <Separator className="my-6" />
            
            {/* Features section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="mr-4">🏊‍♂️</span>
                  <span>Private pool</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">🌊</span>
                  <span>Beach access</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">🚗</span>
                  <span>Free parking</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">📺</span>
                  <span>HDTV with streaming</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">📶</span>
                  <span>Fast wifi</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">🍳</span>
                  <span>Full kitchen</span>
                </div>
              </div>
              <Button variant="outline" className="mt-6">Show all 20 amenities</Button>
            </div>
          </div>
          
          {/* Booking widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 border rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xl font-semibold">${property.price}</span>
                  <span className="text-airbnb-gray"> / night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1">{property.rating}</span>
                  <span className="mx-1">·</span>
                  <span className="text-airbnb-gray">{property.reviews} reviews</span>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="border-r border-b p-3">
                    <div className="text-xs font-bold">CHECK-IN</div>
                    <div>5/15/2025</div>
                  </div>
                  <div className="border-b p-3">
                    <div className="text-xs font-bold">CHECKOUT</div>
                    <div>5/20/2025</div>
                  </div>
                  <div className="col-span-2 p-3">
                    <div className="text-xs font-bold">GUESTS</div>
                    <div className="flex justify-between items-center">
                      <div>2 guests</div>
                      <Calendar className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-airbnb-red hover:bg-airbnb-red/90 text-white">
                Reserve
              </Button>
              
              <div className="text-center text-sm mt-2 text-airbnb-gray">
                You won't be charged yet
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="flex justify-between">
                  <div className="underline">$350 x 5 nights</div>
                  <div>$1,750</div>
                </div>
                <div className="flex justify-between">
                  <div className="underline">Cleaning fee</div>
                  <div>$100</div>
                </div>
                <div className="flex justify-between">
                  <div className="underline">Service fee</div>
                  <div>$260</div>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <div>Total before taxes</div>
                  <div>$2,110</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
