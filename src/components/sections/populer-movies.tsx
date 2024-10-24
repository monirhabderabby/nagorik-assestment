"use client";
// Packages
import { useInfiniteQuery } from "@tanstack/react-query";
import { AlertCircleIcon, Loader2 } from "lucide-react";

// Local imports
import {
  movieCardSchemaType,
  populerMoviesResponseSchema,
  populerMoviesResponseSchemaType,
} from "@/schemas/movie.schema";
import MovieCard from "../ui/movie-card";
import SkeletonWrapper from "../ui/skeleton-wrapper";

const PopulerMovies = () => {
  const {
    data: response,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<populerMoviesResponseSchemaType>({
    queryKey: ["populerMovies"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: ({ pageParam = 1 }: any) =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageParam}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
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

  // Content rendering based on loading, error, or fetched data

  let content;

  if (isLoading) {
    // loading state
    content = (
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonWrapper isLoading={isLoading} key={index}>
            <div className="w-[260px] h-auto rounded-[4px]"></div>
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    // Error state
    content = (
      <div className="mt-10 h-[200px] flex justify-center items-center text-red-500 text-[18px] flex-col gap-y-2">
        <AlertCircleIcon />
        {error?.message || "Something went wrong"}
      </div>
    );
  } else if (response?.pages) {
    // data renderaing state
    content = (
      <>
        {response?.pages?.map((p) => (
          <div
            key={p.page}
            className="container grid grid-cols-1 md:grid-cols-4  mt-10 gap-y-8"
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
        {hasNextPage && (
          <button
            className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-sm font-medium text-black hover:bg-gray-100"
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
                <Loader2 className="animate-spin h-4 w-4 text-black" />
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