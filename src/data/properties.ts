
export interface Property {
  id: number;
  title: string;
  location: string;
  distance?: string;
  date?: string;
  price: number;
  rating: number;
  images: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Stunning Beachfront Villa with Infinity Pool",
    location: "Malibu, California",
    distance: "50 miles away",
    date: "Nov 12-17",
    price: 350,
    rating: 4.97,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Modern Treehouse with Mountain Views",
    location: "Denver, Colorado",
    distance: "120 miles away",
    date: "Dec 5-10",
    price: 195,
    rating: 4.89,
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Cozy Cabin in the Woods",
    location: "Portland, Oregon",
    distance: "85 miles away",
    date: "Jan 15-20",
    price: 120,
    rating: 4.95,
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Luxury Penthouse with City Views",
    location: "New York, New York",
    distance: "5 miles away",
    date: "Dec 12-17",
    price: 450,
    rating: 4.85,
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Desert Retreat with Private Hot Tub",
    location: "Scottsdale, Arizona",
    distance: "65 miles away",
    date: "Nov 8-14",
    price: 280,
    rating: 4.92,
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Charming Beachside Cottage",
    location: "Cape Cod, Massachusetts",
    distance: "30 miles away",
    date: "Jan 21-26",
    price: 210,
    rating: 4.96,
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 7,
    title: "Historic Downtown Loft",
    location: "Charleston, South Carolina",
    distance: "15 miles away",
    date: "Dec 1-6",
    price: 175,
    rating: 4.91,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 8,
    title: "Lakefront Cabin with Boat Dock",
    location: "Lake Tahoe, Nevada",
    distance: "150 miles away",
    date: "Jan 5-11",
    price: 320,
    rating: 4.94,
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
];
