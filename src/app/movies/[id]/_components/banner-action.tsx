"use client";

// Packages
import { getCookie } from "cookies-next";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { toast } from "sonner";

// Local imports
import { addToFavouriteList } from "@/actions/favourite";
import { addToWatchList, cookiesResponse } from "@/actions/watchlist";
import {
  movieDetailsSchemaType,
  watchListAndFavouriteType,
} from "@/schemas/movie.schema";

interface Props {
  movie: movieDetailsSchemaType;
}

type action = "add" | "remove";

const BannerActions = ({ movie }: Props) => {
  const [isWatched, setWatched] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  // Create a plain object for the movie
  const movieData: watchListAndFavouriteType = {
    id: movie.id,
    banner_path: movie.poster_path,
    overview: movie.overview,
    release_date: movie.release_date,
    title: movie.original_title,
  };

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

  // handler for add to watchlist list on the cookies by server action
  const handleWatchlist = async (action: action) => {
    const res: cookiesResponse = await addToWatchList(movieData, action);

    if (!res.success) {
      toast.error(res.message, {
        className: "text-red-500",
      });
    } else {
      toast.success(res.message);
      setWatched(!isWatched);
    }
  };

  // handler for add to favourite list on the cookies by server action
  const handleFavouriteList = async (action: action) => {
    const res: cookiesResponse = await addToFavouriteList(movieData, action);

    if (!res.success) {
      toast.error(res.message, {
        className: "text-red-500",
      });
    } else {
      toast.success(res.message);
      setIsFavourite(!isFavourite);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <button className="px-5 py-2 h-10 bg-white/20 hover:bg-white/40 transition-colors duration-300 flex items-center gap-x-2 rounded-md">
        <Play className="h-5 w-5" /> Play
      </button>
      <button
        onClick={() => handleFavouriteList(isFavourite ? "remove" : "add")}
        title="Add to watchlist"
        className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center"
      >
        {isFavourite ? (
          <IoHeart className="h-5 w-5" />
        ) : (
          <IoHeartOutline className="h-5 w-5" />
        )}
      </button>
      <button
        onClick={() => handleWatchlist(isWatched ? "remove" : "add")}
        title="Add to Watchlist"
        className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center "
      >
        {isWatched ? (
          <IoBookmark className="h-5 w-5 " />
        ) : (
          <IoBookmarkOutline className="h-5 w-5 " />
        )}
      </button>
    </div>
  );
};

export default BannerActions;
