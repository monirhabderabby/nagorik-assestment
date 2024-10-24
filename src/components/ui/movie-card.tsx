"use client";
// Packages
import { Bookmark, Heart } from "lucide-react";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useEffect, useState } from "react";

// Local imports
import { addToWatchList } from "@/actions/watchlist";
import { movieCardSchemaType } from "@/schemas/movie.schema";
import Poster from "./poster";

const MovieCard = ({ movie }: { movie: movieCardSchemaType }) => {
  // state for is watchlists or note
  const [isBookmarked, setBookMark] = useState(false);

  const cookies = useCookies();

  // check if the card is already in watchlists . if found then bookmark icon will be hidden
  useEffect(() => {
    const data = cookies.get("watchlist");

    const parsedData: movieCardSchemaType[] | [] = data ? JSON.parse(data) : [];
    const ids = parsedData.map((m: movieCardSchemaType) => m.id);

    const exist = ids.includes(movie.id);

    if (exist) setBookMark(true);
  }, [movie.id, cookies]);

  const handleWatchlist = () => {
    addToWatchList(movie);
    setBookMark(true);
  };
  return (
    <div className=" w-full md:w-[240px] h-auto cursor-pointer mx-auto">
      <div className="relative w-full h-[340px] md:h-[310px] overflow-hidden rounded-[4px]">
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
        <Link href={`/movies/${movie.id}`} className="group">
          <h1 className="text-[16px] font-semibold group-hover:text-orange-500 transition-colors duration-300">
            {movie.original_title}
          </h1>
          <p className="text-[14px] text-gray-400">{movie.release_date!}</p>
        </Link>
        {!isBookmarked && (
          <button title="Add to watchlist" onClick={handleWatchlist}>
            <Bookmark className="h-5 w-5 hover:text-orange-500 transition-colors duration-300" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
