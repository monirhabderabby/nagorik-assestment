"use server";

import { watchListAndFavouriteSchema } from "@/schemas/movie.schema";
import { watchListAndFavouriteType } from "@/types";
import { cookies } from "next/headers";

export type cookiesResponse = {
  success: boolean;
  message: string;
};

export async function addToWatchList(
  movie: watchListAndFavouriteType,
  action: "add" | "remove"
) {
  const cookieStore = cookies();
  // Validate movie schema
  const parsedMovie = watchListAndFavouriteSchema.safeParse(movie);

  if (!parsedMovie.success) {
    return {
      success: false,
      message: "Something went wrong.",
    } as cookiesResponse;
  }

  // Retrieve and parse previous watchlist data
  const prevData = cookieStore.get("watchlist")?.value;
  const watchlist: watchListAndFavouriteType[] =
    prevData !== undefined ? JSON.parse(prevData) : [];

  // Handle add action
  if (action === "add") {
    // Check if watchlist already has 5 movies
    if (watchlist.length >= 5) {
      return {
        success: false,
        message: "You cannot add more than 5 movies to your watchlist.",
      } as cookiesResponse;
    }

    // Check if the movie already exists in the watchlist
    const movieExists = watchlist.some(
      (item) => item.id === parsedMovie.data.id
    );
    if (movieExists) {
      return {
        success: false,
        message: "This movie is already in your watchlist.",
      } as cookiesResponse;
    }

    // Add new movie to the watchlist and update the cookie
    const updatedWatchlist = [...watchlist, parsedMovie.data];
    cookieStore.set("watchlist", JSON.stringify(updatedWatchlist));
    return {
      success: true,
      message: `Movie "${parsedMovie.data.title}" has been successfully added to your watchlist.`,
    } as cookiesResponse;
  }

  // Handle remove action
  if (action === "remove") {
    // Check if the movie exists in the watchlist
    const movieIndex = watchlist.findIndex(
      (item) => item.id === parsedMovie.data.id
    );
    if (movieIndex === -1) {
      return {
        success: false,
        message: "This movie is not in your watchlist.",
      } as cookiesResponse;
    }

    // Remove the movie from the watchlist and update the cookie
    const updatedWatchlist = watchlist.filter(
      (item) => item.id !== parsedMovie.data.id
    );
    cookieStore.set("watchlist", JSON.stringify(updatedWatchlist));
    return {
      success: true,
      message: `Movie "${parsedMovie.data.title}" has been successfully removed from your watchlist.`,
    } as cookiesResponse;
  }

  return {
    success: false,
    message: "Invalid action provided.",
  } as cookiesResponse;
}

export async function getAllWatchList() {
  const cookieStore = cookies();

  // Retrieve and parse previous watchlist data
  const prevData = cookieStore.get("watchlist")?.value;
  const watchlist: watchListAndFavouriteType[] =
    prevData !== undefined ? JSON.parse(prevData) : [];

  return {
    success: true,
    message: "Retrieved all watchlist from cookies",
    data: watchlist,
  } as cookiesResponse & {
    data: watchListAndFavouriteType[];
  };
}
