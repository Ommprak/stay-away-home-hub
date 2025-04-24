
import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  distance?: string;
  date?: string;
  price: number;
  rating: number;
  images: string[];
}

export const PropertyCard = ({
  id,
  title,
  location,
  distance,
  date,
  price,
  rating,
  images,
}: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/property/${id}`} className="group">
      <div className="relative overflow-hidden rounded-xl hover-scale">
        {/* Image carousel */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="h-full w-full object-cover transition-all"
          />
          
          {/* Image navigation dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 w-1.5 rounded-full ${
                    idx === currentImageIndex
                      ? "bg-white"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Like button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleLike}
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-transparent text-white hover:bg-black/20"
          >
            <Heart
              className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
            />
          </Button>
        </div>

        {/* Property info */}
        <div className="mt-3 space-y-1">
          <div className="flex justify-between">
            <h3 className="font-medium">{location}</h3>
            <div className="flex items-center">
              <span className="mr-1">★</span>
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-airbnb-gray text-sm">{distance || title}</p>
          {date && <p className="text-airbnb-gray text-sm">{date}</p>}
          <p className="mt-1">
            <span className="font-semibold">${price}</span>{" "}
            <span className="text-airbnb-gray">night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
