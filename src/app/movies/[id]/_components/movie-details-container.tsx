// Local imports
import { movieDetailsSchemaType } from "@/schemas/movie.schema";
import MovieDetailsBanner from "./movie-details-banner";

interface Props {
  movie: movieDetailsSchemaType;
}

const MovieDetailsContainer = ({ movie }: Props) => {
  return (
    <div>
      <MovieDetailsBanner movie={movie} />
    </div>
  );
};

export default MovieDetailsContainer;
