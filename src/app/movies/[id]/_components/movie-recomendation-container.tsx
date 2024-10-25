import MovieRecomendationCard from "@/components/ui/movie-recomendation-card";
import { movieCardSchemaType } from "@/types";

interface Props {
  recomendations?: movieCardSchemaType[];
}

const MovieRecomendationContainer = ({ recomendations }: Props) => {
  return (
    <div className="container">
      <h1 className="text-[26px]">Recommendation</h1>

      <div className="w-full flex flex-wrap mt-3 gap-y-10 gap-x-5">
        {recomendations?.slice(0, 10).map((movie: movieCardSchemaType) => (
          <MovieRecomendationCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRecomendationContainer;
