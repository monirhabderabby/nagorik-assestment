"use client";

// Packages
import { getCookie } from "cookies-next";
import { Bookmark, BookmarkCheck, Heart, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Local imports
import { addToWatchList, cookiesResponse } from "@/actions/watchlist";
import {
  movieDetailsSchemaType,
  watchListAndFavouriteType,
} from "@/schemas/movie.schema";

interface Props {
  movie: movieDetailsSchemaType;
}

const BannerActions = ({ movie }: Props) => {
  const [isWatched, setWatched] = useState(false);

  // check if the card is already in watchlists . if found then bookmark icon will be hidden
  useEffect(() => {
    const data = getCookie("watchlist");

    const parsedData: watchListAndFavouriteType[] | [] = data
      ? JSON.parse(data)
      : [];
    const ids = parsedData.map((m: watchListAndFavouriteType) => m.id);

    const exist = ids.includes(movie.id);

    if (exist) setWatched(true);
  }, [movie.id]);

  // handlers
  const handleWatchlist = async (action: "add" | "remove") => {
    const res: cookiesResponse = await addToWatchList(
      {
        id: movie.id,
        banner_path: movie.poster_path!,
        overview: movie.overview,
        release_date: movie.release_date,
        title: movie.original_title,
        watchList: true,
      },
      action
    );

    if (!res.success) {
      toast.error(res.message, {
        className: "text-red-500",
      });
    } else {
      toast.success(res.message);
      setWatched(!isWatched);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <button className="px-5 py-2 h-10 bg-white/20 hover:bg-white/40 transition-colors duration-300 flex items-center gap-x-2 rounded-md">
        <Play className="h-5 w-5" /> Play
      </button>
      <button
        title="Add to Wishlist"
        className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center"
      >
        <Heart className="h-5 w-5" />
      </button>
      <button
        onClick={() => handleWatchlist(isWatched ? "remove" : "add")}
        title="Add to Watchlist"
        className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center "
      >
        {isWatched ? (
          <BookmarkCheck className="h-5 w-5 " />
        ) : (
          <Bookmark className="h-5 w-5 " />
        )}
      </button>
    </div>
  );
};

export default BannerActions;
