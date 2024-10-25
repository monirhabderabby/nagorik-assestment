"use client";
// Packages
import { Heart, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Local imports
import { addToWatchList } from "@/actions/watchlist";
import { fullImageSrc } from "@/lib/utils";
import { watchListAndFavouriteType } from "@/schemas/movie.schema";

const WatchlistCard = ({ data }: { data: watchListAndFavouriteType }) => {
  const router = useRouter();

  // constants
  const src = fullImageSrc(data.banner_path!);

  // handlers
  const handleRemove = () => {
    addToWatchList(data, "remove");
    router.refresh();
  };
  return (
    <div className="w-full shadow-[rgba(0,0,0,0.16)_0px_1px_4px] min-h-[200px] rounded-[4px] flex flex-col md:flex-row gap-x-6 items-center ">
      <div className="min-h-[220px] w-full md:w-[153px] relative flex-initial">
        <Image src={src} alt="profile" fill className="rounded-l-[4px]" />
      </div>
      <div className="h-full flex flex-col gap-y-4 flex-1 p-4 md:p-2">
        <div>
          <h1 className="text-[18px] font-semibold font-inter text-black">
            {data.title}
          </h1>
          <p className="text-[14px] text-black/60">{data.overview}</p>
        </div>
        <p className="text-[15px] text-black/60 w-[95%] md:w-[90%]">
          {data.overview}
        </p>

        <div className="flex gap-x-3">
          <button className="group flex items-center gap-x-1">
            <div className="w-[30px] h-[30px] group-hover:bg-gray-600 group-hover:text-white group-hover:border-white flex justify-center items-center rounded-full border-[1px] border-gray-400">
              <Heart className="h-4 w-4 " />
            </div>
            Favourite
          </button>
          <button
            onClick={handleRemove}
            className="group flex items-center gap-x-1"
          >
            <div className="w-[30px] h-[30px] group-hover:bg-gray-600 group-hover:text-white group-hover:border-white flex justify-center items-center rounded-full border-[1px] border-gray-400">
              <X className="h-4 w-4 " />
            </div>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistCard;
