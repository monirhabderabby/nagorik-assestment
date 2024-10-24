"use server";

import { movieCardSchema, movieCardSchemaType } from "@/schemas/movie.schema";
import { cookies } from "next/headers";

export async function addToWatchList(movie: movieCardSchemaType) {
  const cookieStore = cookies();

  // Validate movie schema
  const parsedMovie = movieCardSchema.safeParse(movie);
  if (!parsedMovie.success) {
    throw new Error(parsedMovie.error.name);
  }

  // Retrieve and parse previous watchlist data
  const prevData = cookieStore.get("watchlist")?.value;
  const watchlist: movieCardSchemaType[] = prevData ? JSON.parse(prevData) : [];

  // Check if the movie already exists in the watchlist
  const movieExists = watchlist.some((item) => item.id === parsedMovie.data.id);
  if (movieExists) return; // Movie is already in the watchlist, no further action needed

  // Add new movie to the watchlist and update the cookie
  const updatedWatchlist = [...watchlist, parsedMovie.data];
  cookieStore.set("watchlist", JSON.stringify(updatedWatchlist));
}

export async function getWatchlistIds() {
  const cookieStore = await cookies();

  // Retrieve and parse previous watchlist data
  const prevData = cookieStore.get("watchlist")?.value;
  const watchlist: movieCardSchemaType[] = prevData ? JSON.parse(prevData) : [];

  const ids = watchlist.map((w) => w.id);

  return ids;
}
