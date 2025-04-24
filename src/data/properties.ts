
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
    title: "Luxury Villa in Udaipur",
    location: "Udaipur, Rajasthan",
    distance: "2 km from City Palace",
    date: "Nov 12-17",
    price: 20500,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099",
    ]
  },
  {
    id: 2,
    title: "Heritage Haveli Stay",
    location: "Jaipur, Rajasthan",
    distance: "3 km from Hawa Mahal",
    date: "Dec 1-6",
    price: 19800,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ]
  },
  {
    id: 3,
    title: "Beachfront Villa in Goa",
    location: "Calangute, Goa",
    distance: "100m from beach",
    date: "Dec 10-15",
    price: 21000,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    ]
  },
  {
    id: 4,
    title: "Mountain View Resort",
    location: "Manali, Himachal Pradesh",
    distance: "5 km from Mall Road",
    date: "Nov 20-25",
    price: 19500,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1506974210756-8e1b8985d348",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    ]
  },
  {
    id: 5,
    title: "Backwater House",
    location: "Alleppey, Kerala",
    distance: "On the backwaters",
    date: "Dec 5-10",
    price: 20200,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd",
      "https://images.unsplash.com/photo-1582971805810-b24306e0afe7",
    ]
  },
  {
    id: 6,
    title: "Royal Palace Suite",
    location: "Mysore, Karnataka",
    distance: "1 km from Mysore Palace",
    date: "Nov 15-20",
    price: 20800,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a",
    ]
  },
  {
    id: 7,
    title: "Tea Estate Bungalow",
    location: "Munnar, Kerala",
    distance: "Amid tea gardens",
    date: "Dec 7-12",
    price: 19900,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db",
    ]
  },
  {
    id: 8,
    title: "Desert Camp Resort",
    location: "Jaisalmer, Rajasthan",
    distance: "In Thar Desert",
    date: "Nov 25-30",
    price: 20300,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    ]
  },
  {
    id: 9,
    title: "Himalayan Retreat",
    location: "Darjeeling, West Bengal",
    distance: "View of Kanchenjunga",
    date: "Dec 12-17",
    price: 20100,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1582971805810-b24306e0afe7",
      "https://images.unsplash.com/photo-1587974928442-77dc3868dc26",
    ]
  },
  {
    id: 10,
    title: "Riverside Lodge",
    location: "Rishikesh, Uttarakhand",
    distance: "On Ganges River",
    date: "Nov 18-23",
    price: 19700,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd",
      "https://images.unsplash.com/photo-1582971805810-b24306e0afe7",
    ]
  },
  // Properties 11-60 follow similar pattern
  {
    id: 11,
    title: "City View Apartment",
    location: "Mumbai, Maharashtra",
    distance: "Marine Drive view",
    date: "Dec 1-6",
    price: 20400,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    ]
  },
  {
    id: 12,
    title: "Colonial Heritage Home",
    location: "Kolkata, West Bengal",
    distance: "Park Street area",
    date: "Nov 20-25",
    price: 19600,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ]
  },
  {
    id: 13,
    title: "Temple View Villa",
    location: "Varanasi, Uttar Pradesh",
    distance: "Ganges Ghat view",
    date: "Dec 5-10",
    price: 20700,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ]
  },
  // Continue with remaining properties...
  {
    id: 60,
    title: "Modern City Apartment",
    location: "Bangalore, Karnataka",
    distance: "Near MG Road",
    date: "Dec 15-20",
    price: 20300,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ]
  }
];
