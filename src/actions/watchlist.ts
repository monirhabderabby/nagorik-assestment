"use server";

import { watchListAndFavouriteSchema } from "@/schemas/movie.schema";
import { watchListAndFavouriteType } from "@/types";
import { cookies } from "next/headers";

export type cookiesResponse = {
  success: boolean;
  message: string;
};

/**
 * This function, `addToWatchList`, manages adding or removing a movie to/from a user's watchlist.
 * The function supports two actions, "add" and "remove", which are specified by the `action` parameter.
 *
 * It performs the following steps:
 * 1. Validates the movie data against a predefined schema (`watchListAndFavouriteSchema`) to ensure it conforms to the expected structure.
 * 2. Retrieves the current watchlist data from cookies, parsing it if available, and initializing an empty array if not.
 * 3. For the "add" action:
 *    - Checks if the watchlist already has a maximum of 5 movies, and returns an error if so.
 *    - Ensures the movie isn't already on the watchlist before adding.
 *    - Adds the movie to the watchlist and updates the cookie.
 * 4. For the "remove" action:
 *    - Verifies if the movie exists in the watchlist.
 *    - Removes the movie from the list if found and updates the cookie.
 * 5. Returns a success or error message based on the action outcome.
 *
 * @param movie - An object containing details about the movie, following the `watchListAndFavouriteType` structure.
 * @param action - A string specifying the action to perform, either "add" or "remove".
 * @returns An object containing a `success` flag and a `message` describing the result.
 */
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

/**
 * This function, `getAllWatchList`, retrieves the current list of movies in the user's watchlist from cookies.
 *
 * It performs the following steps:
 * 1. Accesses the `watchlist` cookie and retrieves its value, if available.
 * 2. Parses the cookie data to obtain the watchlist, initializing an empty array if no data exists.
 * 3. Returns an object containing:
 *    - `success`: A flag indicating successful data retrieval.
 *    - `message`: A success message confirming that the watchlist data was retrieved.
 *    - `data`: The list of movies in the watchlist.
 *
 * @returns An object with a `success` flag, a `message`, and `data` (an array of movies) from the user's watchlist.
 */
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
