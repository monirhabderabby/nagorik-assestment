// Packages

// Local imports
import Poster from "@/components/ui/poster";
import { fullImageSrc, getGenreNames } from "@/lib/utils";
import { movieDetailsSchemaType } from "@/types";
import BannerActions from "./banner-action";

interface Props {
  movie: movieDetailsSchemaType;
}

const MovieDetailsBanner = ({ movie }: Props) => {
  // here are the genres
  const genres = getGenreNames(movie.genres);
  const bannerSrc = fullImageSrc(movie.poster_path!);
  return (
    <section
      style={{ backgroundImage: `url(${bannerSrc})` }}
      className="h-auto py-[30px] md:h-[80vh] bg-no-repeat bg-cover  mix-blend-darken dark:mix-blend-screen relative "
    >
      <div className="bg-black/70  absolute top-0 right-0 w-full h-full -z-20" />
      <div className="flex flex-col md:flex-row items-center h-full container z-50 gap-x-8">
        <Poster
          src={movie.poster_path!}
          alt={movie.original_title}
          containerClass="w-[300px] h-[500px] relative"
        />
        <div className="text-white space-y-4">
          <MovieInfo title={movie.original_title} genres={genres} />
          <BannerActions movie={movie} />
          <BannerOverview tagline={movie.tagline!} overview={movie.overview} />
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

// Banner Overview

interface BannerOverviewProps {
  tagline: string;
  overview: string;
}

const BannerOverview = ({ tagline, overview }: BannerOverviewProps) => {
  return (
    <div className="pt-5">
      <p className="text-white tracking-wide font-bold">{tagline}</p>
      <p className="pt-2 text-white/70 max-w-[600px] text-[15px] font-inter tracking-wider">
        {overview}
      </p>
    </div>
  );
};
