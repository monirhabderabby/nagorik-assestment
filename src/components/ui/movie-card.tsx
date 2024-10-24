// Packages
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

// Local imports
import { blurDataUrl } from "@/lib/blurDataUrl";
import { fullImageSrc } from "@/lib/utils";
import { movieCardSchemaType } from "@/schemas/movie.schema";

const MovieCard = ({ movie }: { movie: movieCardSchemaType }) => {
  if (!movie) return;
  const poster = fullImageSrc(movie.poster_path!);
  return (
    <div className="w-[260px] h-auto cursor-pointer mx-auto">
      <div className="relative w-full h-[330px] overflow-hidden rounded-[4px]">
        <Image
          src={poster}
          alt="image"
          fill
          className="w-[220px] h-full hover:scale-105 transition-all duration-300 rounded-[4px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div
          className="absolute text-orange-600 right-3 top-3"
          title="Add to Wishlist"
        >
          <Heart />
        </div>
      </div>
      <div className="pt-3 px-1 flex items-center justify-between">
        <div className="group">
          <h1 className="text-[16px] font-semibold group-hover:text-orange-500 transition-colors duration-300">
            {movie.original_title}
          </h1>
          <p className="text-[14px] text-gray-400">{movie.release_date}</p>
        </div>
        <div title="Add to Cart">
          <ShoppingCart className="h-5 w-5 hover:text-orange-500 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
