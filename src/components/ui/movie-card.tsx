import { Heart, ShoppingCart } from "lucide-react";
import DynamicImage from "../common/dynamic-image";

const MovieCard = () => {
  return (
    <div className="w-[220px] h-auto cursor-pointer mx-auto">
      <div className="relative w-full h-[280px] overflow-hidden">
        <DynamicImage
          url="https://utfs.io/f/ENJYMqft5qDj00JK1GTCeYfd2WZqzt3LT4oMyEkHp1Uhmsgx"
          alt="image"
          containerClass="w-full h-full"
        />
        <div
          className="absolute text-orange-600 right-3 top-3"
          title="Add to Wishlist"
        >
          <Heart />
        </div>
      </div>
      <div className="pt-3 px-1 flex items-center justify-between">
        <div>
          <h1 className="text-[16px] font-semibold">Transformers One</h1>
          <p className="text-[14px] text-gray-400">22 Oct 2024</p>
        </div>
        <div title="Add to Cart">
          <ShoppingCart className="h-5 w-5 hover:text-orange-500 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
