"use client";
// Packages
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

// Local imports
import { useSearchTerm } from "@/hooks/searchTerm";
import { populerMoviesResponseSchema } from "@/schemas/movie.schema";
import { movieCardSchemaType, populerMoviesResponseSchemaType } from "@/types";
import MovieCard from "../common/cards/movie-card";
import ResponseError from "../ui/error";
import { Skeleton } from "../ui/skeleton";

const PopulerMovies = () => {
  const { searchTerm } = useSearchTerm();
  const {
    data: response,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<populerMoviesResponseSchemaType>({
    queryKey: ["populerMovies", searchTerm],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: ({ pageParam = 1 }: any) =>
      fetch(
        searchTerm
          ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
              searchTerm
            )}&page=${pageParam}&language=en-US&api_key=${
              process.env.NEXT_PUBLIC_TMDB_API_KEY
            }`
          : `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageParam}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((response) => {
          const parsedMovies = populerMoviesResponseSchema.safeParse(response);
          if (!parsedMovies.success) {
            throw new Error(
              parsedMovies.error.message || "Something went wrong"
            );
          }
          return parsedMovies.data; // Return validated data
        }),
    getNextPageParam: (lastPage) => {
      // Check if there are more pages
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1; // Return next page number if available
      }
      return undefined; // No more pages
    },
    initialPageParam: 1,
  });

  // Variable to hold the JSX for the cast content (loading, error, or actual data).
  let content;

  // If data is still loading, show a skeleton loader
  if (isLoading) {
    content = <Loader />;
  }
  // If there is an error, display an error message.
  else if (isError) {
    content = <ResponseError message={error.message} />;
  }
  // If data is successfully fetched, display the movie cards.
  else if (response?.pages) {
    content = (
      <>
        {response?.pages?.map((p) => (
          <div
            key={p.page}
            className="container flex flex-wrap gap-4  mt-10 gap-y-8"
          >
            {p.results.map((movie: movieCardSchemaType) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ))}
      </>
    );
  }

  return (
    <div>
      {content}
      <div className="mt-10 w-full flex justify-center">
        {hasNextPage && !isLoading && !isError && (
          <button
            className="flex items-center rounded-full border border-gray-200 bg-secondary-50 px-3 py-2 text-sm font-medium dark:hover:bg-white/5 hover:bg-gray-100"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              fetchNextPage();
            }}
            disabled={isFetchingNextPage} // Disable while fetching new data
            title="Click here to load more movies"
          >
            {isFetchingNextPage ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 " />
              </>
            ) : (
              "Load More"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default PopulerMovies;

const Loader = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  mt-10 gap-4 gap-y-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton>
          <div className="w-[260px] h-[340px] rounded-[4px] bg-black/5 dark:bg-white/5 flex justify-center items-center text-[14px]">
            Loading...
          </div>
        </Skeleton>
      ))}
    </div>
  );
};
