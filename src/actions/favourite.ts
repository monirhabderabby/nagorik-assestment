"use server";
import { watchListAndFavouriteSchema } from "@/schemas/movie.schema";
import { watchListAndFavouriteType } from "@/types";
import { cookies } from "next/headers";
import { cookiesResponse } from "./watchlist";

export async function addToFavouriteList(
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

  // Retrieve and parse previous favourite list data
  const prevData = cookieStore.get("favouriteList")?.value;
  const favouriteList: watchListAndFavouriteType[] =
    prevData !== undefined ? JSON.parse(prevData) : [];

  // Handle add action
  if (action === "add") {
    // Check if favourite list already has 5 movies
    if (favouriteList.length >= 5) {
      return {
        success: false,
        message: "You cannot add more than 5 movies to your favourite list.",
      } as cookiesResponse;
    }

    // Check if the movie already exists in the favourite list
    const movieExists = favouriteList.some(
      (item) => item.id === parsedMovie.data.id
    );
    if (movieExists) {
      return {
        success: false,
        message: "This movie is already in your favourite list.",
      } as cookiesResponse;
    }

    // Add new movie to the favourite list and update the cookie
    const updatedFavouriteList = [...favouriteList, parsedMovie.data];
    cookieStore.set("favouriteList", JSON.stringify(updatedFavouriteList));
    return {
      success: true,
      message: `Movie "${parsedMovie.data.title}" has been successfully added to your favourite list.`,
    } as cookiesResponse;
  }

  // Handle remove action
  if (action === "remove") {
    // Check if the movie exists in the favourite list
    const movieIndex = favouriteList.findIndex(
      (item) => item.id === parsedMovie.data.id
    );
    if (movieIndex === -1) {
      return {
        success: false,
        message: "This movie is not in your favourite list.",
      } as cookiesResponse;
    }

    // Remove the movie from the favourite list and update the cookie
    const updatedFavouriteList = favouriteList.filter(
      (item) => item.id !== parsedMovie.data.id
    );
    cookieStore.set("favouriteList", JSON.stringify(updatedFavouriteList));
    return {
      success: true,
      message: `Movie "${parsedMovie.data.title}" has been successfully removed from your favourite list.`,
    } as cookiesResponse;
  }

  return {
    success: false,
    message: "Invalid action provided.",
  } as cookiesResponse;
}

export async function getAllFavouriteList() {
  const cookieStore = cookies();

  // Retrieve and parse previous watchlist data
  const prevData = cookieStore.get("favouriteList")?.value;
  const favouriteLists: watchListAndFavouriteType[] =
    prevData !== undefined ? JSON.parse(prevData) : [];

  return {
    success: true,
    message: "Retrieved all watchlist from cookies",
    data: favouriteLists,
  } as cookiesResponse & {
    data: watchListAndFavouriteType[];
  };
}
