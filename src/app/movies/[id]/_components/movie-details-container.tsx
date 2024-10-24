// Local imports
import { movieDetailsSchemaType } from "@/schemas/movie.schema";
import CastCrewContainer from "./cast-crew-container";
import MovieDetailsBanner from "./movie-details-banner";
import MovieDetailsSidebar from "./movie-details-sidebar";

interface Props {
  movie: movieDetailsSchemaType;
}

const MovieDetailsContainer = ({ movie }: Props) => {
  return (
    <div>
      <MovieDetailsBanner movie={movie} />
      <div className="flex container flex-col md:flex-row">
        <CastCrewContainer movieId={movie.id!} />
        <MovieDetailsSidebar movie={movie!} />
      </div>
    </div>
  );
};

export default MovieDetailsContainer;
