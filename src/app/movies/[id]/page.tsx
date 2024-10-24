// Next.js will invalidate the cache when a

import {
  movieCardSchemaType,
  movieDetailsSchema,
  movieDetailsSchemaType,
  populerMoviesResponseSchemaType,
} from "@/schemas/movie.schema";
import MovieDetailsContainer from "./_components/movie-details-container";

// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const res: populerMoviesResponseSchemaType = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process
      .env.NEXT_PUBLIC_TMDB_API_KEY!}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch movie, received status ${res.status}`);
    }

    return res.json();
  });

  return res.results.map((movie: movieCardSchemaType) => ({
    id: String(movie.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const movie: movieDetailsSchemaType = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env
      .NEXT_PUBLIC_TMDB_API_KEY!}`
  )
    .then((res) => res.json())
    .then((response) => {
      const parsedMovieDetails = movieDetailsSchema.safeParse(response);

      if (!parsedMovieDetails.success) {
        throw new Error(parsedMovieDetails.error.message);
      }

      return parsedMovieDetails.data;
    });

  return <MovieDetailsContainer movie={movie} />;
}