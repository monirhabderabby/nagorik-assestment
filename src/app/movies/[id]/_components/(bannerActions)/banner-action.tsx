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
import { movieDetailsSchemaType, watchListAndFavouriteType } from "@/types";
import Action from "./action";

interface Props {
  movie: movieDetailsSchemaType;
}

export type action = "add" | "remove";

const BannerActions = ({ movie }: Props) => {
  const [isWatched, setWatched] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  // Prepare a plain object for store in cookies
  const movieData: watchListAndFavouriteType = {
    id: movie.id,
    banner_path: movie.poster_path,
    overview: movie.overview,
    release_date: movie.release_date,
    title: movie.original_title,
  };

  useEffect(() => {
    // Retrieve "watchlist" cookies and "favouriteList" cookies for the user
    const watchlistCookiesRes = getCookie("watchlist");
    const favouriteCookiesRes = getCookie("favouriteList");

    // Parse the "watchlist" cookie if it exists; otherwise, initialize an empty array
    const watchlists: watchListAndFavouriteType[] | [] = watchlistCookiesRes
      ? JSON.parse(watchlistCookiesRes)
      : [];

    // Parse the "favouriteList" cookie if it exists; otherwise, initialize an empty array
    const favouriteLists: watchListAndFavouriteType[] | [] = favouriteCookiesRes
      ? JSON.parse(favouriteCookiesRes)
      : [];

    // Extract IDs of movies in the watchlist
    const idsOfWatchlists = watchlists.map(
      (m: watchListAndFavouriteType) => m.id
    );

    // Extract IDs of movies in the favourite list
    const idsOfFavouriteLists = favouriteLists.map((f) => f.id);

    // Check if the current movie exists in the watchlist
    const isWatchListExist = idsOfWatchlists.includes(movie.id);

    // Check if the current movie exists in the favourite list
    const isFavouriteExist = idsOfFavouriteLists.includes(movie.id);

    if (isWatchListExist) setWatched(true);

    if (isFavouriteExist) setIsFavourite(true);
  }, [movie.id]);

  // handler for add to watchlist list on the cookies by server action
  const handleWatchlist = async (action: action) => {
    setWatched(!isWatched);
    const res: cookiesResponse = await addToWatchList(movieData, action);

    if (!res.success) {
      toast.error(res.message, {
        className: "text-red-500",
      });
      setWatched(!isWatched);
    } else {
      toast.success(res.message);
    }
  };

  // handler for add to favourite list on the cookies by server action
  const handleFavouriteList = async (action: action) => {
    setIsFavourite(action === "add" ? true : false);
    const res: cookiesResponse = await addToFavouriteList(movieData, action);

    console.log(res);

    if (!res.success) {
      toast.error(res.message, {
        className: "text-red-500",
      });
      setIsFavourite(false);
    } else {
      toast.success(res.message);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <button className="px-5 py-2 h-10 bg-white/20 hover:bg-white/40 transition-colors duration-300 flex items-center gap-x-2 rounded-md">
        <Play className="h-5 w-5" /> Play
      </button>
      <Action
        isChecked={isFavourite}
        title="Add to favourite"
        onMarked={handleFavouriteList}
      >
        {isFavourite ? (
          <IoHeart className="h-5 w-5" />
        ) : (
          <IoHeartOutline className="h-5 w-5" />
        )}
      </Action>

      <Action
        isChecked={isWatched}
        title="Add to Watchlist"
        onMarked={handleWatchlist}
      >
        {isWatched ? (
          <IoBookmark className="h-5 w-5 " />
        ) : (
          <IoBookmarkOutline className="h-5 w-5 " />
        )}
      </Action>
    </div>
  );
};

export default BannerActions;
