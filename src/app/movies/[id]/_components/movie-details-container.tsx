// Packages
import dynamic from "next/dynamic";

// Local imports
import { movieCardSchemaType, movieDetailsSchemaType } from "@/types";
import MovieDetailsBanner from "./movie-details-banner";
import MovieDetailsSidebar from "./movie-details-sidebar";
import MovieRecomendationContainer from "./movie-recomendation-container";
const CastCrewContainer = dynamic(() => import("./cast-crew-container"), {
  ssr: false,
});

interface Props {
  movie: movieDetailsSchemaType;
  recomendations?: movieCardSchemaType[];
}

const MovieDetailsContainer = ({ movie, recomendations }: Props) => {
  return (
    <div>
      <MovieDetailsBanner movie={movie} />
      <div className="flex container flex-col md:flex-row">
        <CastCrewContainer movieId={movie.id!} />
        <MovieDetailsSidebar movie={movie!} />
      </div>
      <div className="mt-9">
        <MovieRecomendationContainer recomendations={recomendations} />
      </div>
    </div>
  );
};

export default MovieDetailsContainer;
