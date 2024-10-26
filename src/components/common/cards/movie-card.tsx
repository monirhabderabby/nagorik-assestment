// Packages
import Link from "next/link";

// Local imports
import { movieCardSchemaType } from "@/types";
import Poster from "../../ui/poster";

const MovieCard = ({ movie }: { movie: movieCardSchemaType }) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className=" w-full md:w-[240px] h-auto cursor-pointer mr-auto "
    >
      <div className="relative w-full h-[340px] md:h-[310px] overflow-hidden rounded-[4px]">
        <Poster
          src={movie.poster_path!}
          alt={movie.original_title}
          containerClass=" w-full md:w-[220px] h-[330px] relative"
          className="rounded-[4px] hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="pt-3 px-1 flex items-center justify-between">
        <div className="group">
          <h1 className="text-[16px] font-semibold group-hover:text-orange-500 transition-colors duration-300">
            {movie.original_title}
          </h1>
          <p className="text-[14px] text-gray-400">{movie.release_date!}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
