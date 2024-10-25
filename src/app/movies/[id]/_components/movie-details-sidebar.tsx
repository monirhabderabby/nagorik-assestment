// Packages
import { Link } from "lucide-react";

// Local imports
import { genre, movieDetailsSchemaType } from "@/types";

interface Props {
  movie: movieDetailsSchemaType;
}

const MovieDetailsSidebar = ({ movie }: Props) => {
  return (
    <>
      <div className="w-[400px] h-auto dark:bg-white/5 border-t md:border-t-0 border-l-0 md:border-l dark:md:border-l-0 mt-[50px] pt-[20px]">
        <div className="pl-4 space-y-8">
          {movie.homepage && (
            <a
              target="_blank"
              href={movie.homepage!}
              className="flex items-center gap-x-2 hover:text-orange-500 transition-colors duration-300"
              title="Click here to visit home page"
            >
              <Link /> Visit Home page
            </a>
          )}
          <Info title="Status" value={movie.status} />
          <Info title="Original Language" value={movie.original_language} />
          <Info title="Budget" value={`$${movie.budget.toString()}`} />
          <Info title="Revenue" value={`$${movie.revenue.toString()}`} />
          <div className="text-[18px]">
            <p className="font-semibold">Keywords</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {movie.genres.map((g: genre) => (
                <p
                  className="bg-gray-100 dark:bg-gray-100/10 border-[.5px] border-gray-200 rounded-[5px] w-fit px-2 text-[14px]"
                  key={g.id}
                >
                  {g.name}
                </p>
              ))}
            </div>
          </div>

          <Info title="Vote" value={movie.vote_count.toString()} />
        </div>
      </div>
    </>
  );
};

export default MovieDetailsSidebar;

interface InfoProps {
  title: string;
  value?: string;
}
const Info = ({ title, value }: InfoProps) => {
  return (
    <div className="text-[16px]">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-700 dark:text-white/60 font-inter text-[15px]">
        {value ? value : "-"}
      </p>
    </div>
  );
};
