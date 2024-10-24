// Local imports
import { movieDetailsSchemaType } from "@/schemas/movie.schema";
import CastCrewContainer from "./cast-crew-container";
import MovieDetailsBanner from "./movie-details-banner";

interface Props {
  movie: movieDetailsSchemaType;
}

const MovieDetailsContainer = ({ movie }: Props) => {
  return (
    <div>
      <MovieDetailsBanner movie={movie} />
      <CastCrewContainer movieId={movie.id!} />
    </div>
  );
};

export default MovieDetailsContainer;
