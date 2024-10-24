// Packages
import Image from "next/image";
import Link from "next/link";

// Local imports

import { blurDataUrl } from "@/lib/blurDataUrl";
import { fullImageSrc } from "@/lib/utils";
import { movieCardSchemaType } from "@/schemas/movie.schema";

interface Props {
  data: movieCardSchemaType;
}

const MovieRecomendationCard = ({ data }: Props) => {
  const img = fullImageSrc(data.poster_path!);
  return (
    <Link
      href={`/movies/${data.id}`}
      className="w-full md:w-[224px] lg:w-[244px] h-auto relative"
    >
      <div className="relative h-[174px] w-full rounded-[8px] overflow-hidden">
        <Image
          src={img}
          alt="profile"
          fill
          className="rounded-[8px] shadow-md object-cover hover:scale-110 transition-all duration-300"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <p className="pl-3 pt-2 text-[18px] hover:text-orange-500 transition-colors duration-300">
        {data.original_title}
      </p>
    </Link>
  );
};

export default MovieRecomendationCard;
