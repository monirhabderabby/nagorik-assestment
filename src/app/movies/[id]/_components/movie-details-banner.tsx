// Packages
import { Heart, Play, ShoppingCart } from "lucide-react";

// Local imports
import Poster from "@/components/ui/poster";
import { getGenreNames } from "@/lib/utils";
import { movieDetailsSchemaType } from "@/schemas/movie.schema";

interface Props {
  movie: movieDetailsSchemaType;
}

const MovieDetailsBanner = ({ movie }: Props) => {
  // here are the genres
  const genres = getGenreNames(movie.genres);
  return (
    <section
      style={{ backgroundImage: "url(/harry-poter.jpg)" }}
      className="h-[80vh] bg-no-repeat bg-cover  mix-blend-darken relative"
    >
      <div className="bg-black/70 absolute top-0 right-0 w-full h-full -z-20" />
      <div className="flex items-center h-full container z-50 gap-x-8">
        <Poster
          src={movie.poster_path!}
          alt={movie.original_title}
          containerClass="w-[300px] h-[500px] relative"
        />
        <div className="text-white space-y-4">
          <MovieInfo title={movie.original_title} genres={genres} />
          <BannerActions />
          <BannerOverview
            tagline={movie.tagline!}
            overview={movie.overview}
            release_date={movie.release_date!}
            status={movie.status}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsBanner;

// Movie Info Components
interface MovieInfoProps {
  title: string;
  genres: string;
}

const MovieInfo = ({ title, genres }: MovieInfoProps) => {
  return (
    <div>
      <h1 className="text-[40px] font-bold tracking-wider">{title}</h1>
      <p className="text-[18px] tracking-wide">{genres}</p>
    </div>
  );
};

// Banner Actions Components

const BannerActions = () => (
  <div className="flex items-center gap-x-4">
    <button className="px-5 py-2 h-10 bg-white/20 hover:bg-white/40 transition-colors duration-300 flex items-center gap-x-2 rounded-md">
      <Play className="h-5 w-5" /> Play
    </button>
    <button
      title="Add to Wishlist"
      className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center"
    >
      <Heart className="h-5 w-5" />
    </button>
    <button
      title="Add to Cart"
      className=" bg-white/20 h-10 w-10 hover:bg-white/40 transition-colors duration-300 gap-x-2 rounded-full flex justify-center items-center"
    >
      <ShoppingCart className="h-5 w-5" />
    </button>
  </div>
);

// Banner Overview

interface BannerOverviewProps {
  tagline: string;
  overview: string;
  status: string;
  release_date: string;
}

const BannerOverview = ({
  tagline,
  overview,
  status,
  release_date,
}: BannerOverviewProps) => {
  return (
    <div className="pt-5">
      <p className="text-white tracking-wide font-bold">{tagline}</p>
      <p className="text-white/80 max-w-[600px] tracking-wider">{overview}</p>
      {status && release_date && (
        <p className="mt-3">
          {status} {release_date}
        </p>
      )}
    </div>
  );
};
