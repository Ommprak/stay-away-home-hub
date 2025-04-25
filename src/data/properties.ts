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

export const properties: Property[] = [];