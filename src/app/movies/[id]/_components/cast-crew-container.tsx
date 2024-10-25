"use client";
// Packages
import { useQuery } from "@tanstack/react-query";

// Local imports
import CastCrewCard from "@/components/ui/cast-crew-card";
import ResponseError from "@/components/ui/error";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { castAndCrewCombinedSchema } from "@/schemas/movie.schema";
import { castSchemaType } from "@/types";

// Interface for the component props
interface Props {
  movieId: number;
}

const CastCrewContainer = ({ movieId }: Props) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cast"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process
          .env.NEXT_PUBLIC_TMDB_API_KEY!}`
      )
        .then((res) => res.json())
        .then((response) => {
          // Validating the fetched data against the schema.
          const parsedCastAndCrew =
            castAndCrewCombinedSchema.safeParse(response);

          // Throwing an error if the validation fails.
          if (!parsedCastAndCrew.success) {
            throw new Error(parsedCastAndCrew.error.message);
          }

          // Returning the validated data.
          return parsedCastAndCrew.data;
        }),
  });

  // Variable to hold the JSX for the cast content (loading, error, or actual data).
  let castContent;

  // If data is still loading, show a skeleton loader
  if (isLoading) {
    castContent = (
      <div className="pt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <SkeletonWrapper isLoading={isLoading} key={n}>
            <div className="w-[175px] h-[275px]"></div>
          </SkeletonWrapper>
        ))}
      </div>
    );
  }
  // If there is an error, display an error message.
  else if (isError) {
    castContent = <ResponseError message={error.message} />;
  }
  // If data is successfully fetched, display the cast cards.
  else if (data) {
    castContent = (
      <div className="pt-3 flex flex-wrap gap-6 w-full">
        {data.cast.slice(0, 6).map((cast: castSchemaType) => (
          <CastCrewCard key={cast.id} data={cast} />
        ))}
      </div>
    );
  }

  // Main component return with cast name and the profile (loading, error, or data).
  return (
    <div className="mt-[20px] space-y-10 container">
      <div>
        <div className="w-full flex justify-between">
          <h1 className=" text-[30px] font-bold pb-6">Cast</h1>
          <button className="hover:underline w-fit">View all</button>
        </div>
        {castContent}
      </div>
    </div>
  );
};

export default CastCrewContainer;
