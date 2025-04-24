
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
      "https://i.im.ge/2025/04/24/vqgKZr.Screenshot-2025-02-04-084752.png",  // New Malibu property image
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",  // River between mountains
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",  // Living room
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
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",  // Deer by mountains
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23",  // Sheep on green field
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
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",  // Antelope and zebra
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
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",  // Woman on bed with laptop
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a",  // Brown ox on mountain
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
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3",  // Camels on field
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",  // Horses behind fence
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
      "https://images.unsplash.com/photo-1500375629126-7a0907c4a7a4",  // Beach scene
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",  // Living room
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
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b1fcc",  // City scene
      "https://images.unsplash.com/photo-1521401830442-315d2e6a4da1",  // Architecture
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
      "https://images.unsplash.com/photo-1501510913930-edc42f83723b",  // Lake scene
      "https://images.unsplash.com/photo-1580130544977-624d0e30b923",  // Cabin view
    ],
  },
];
