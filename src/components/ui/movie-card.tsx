// Packages
import { Heart, ShoppingCart } from "lucide-react";

// Local imports
import { movieCardSchemaType } from "@/schemas/movie.schema";
import Link from "next/link";
import Poster from "./poster";

const MovieCard = ({ movie }: { movie: movieCardSchemaType }) => {
  if (!movie) return;
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="w-[260px] h-auto cursor-pointer mx-auto"
    >
      <div className="relative w-full h-[330px] overflow-hidden rounded-[4px]">
        <Poster
          src={movie.poster_path!}
          alt={movie.original_title}
          containerClass="w-[220px] h-[330px]"
          className="rounded-[4px] hover:scale-110 transition-transform duration-300"
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
    </Link>
  );
};

export default MovieCard;
