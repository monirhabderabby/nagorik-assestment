"use client";
// Packages
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Local imports
import { addToFavouriteList } from "@/actions/favourite";
import { addToWatchList } from "@/actions/watchlist";
import { fullImageSrc } from "@/lib/utils";
import { watchListAndFavouriteType } from "@/types";

interface Props {
  data: watchListAndFavouriteType;
  as: "watchlist" | "favouriteList";
}

const WatchlistCard = ({ data, as }: Props) => {
  const router = useRouter();

  // constants
  const src = fullImageSrc(data.banner_path!);

  const handleMoveToDynamicMoviePage = () => {
    router.push(`/movies/${data.id}`);
  };

  // handlers for remove watchlist or favourite list item from cookies based on the as property recived from parent
  const handleRemove = async () => {
    //eslint-disable-next-line @typescript-eslint/no-unused-expressions
    let res;

    if (as === "watchlist") {
      res = await addToWatchList(data, "remove");
    } else if (as === "favouriteList") {
      res = await addToFavouriteList(data, "remove");
    }

    console.log(res);

    // refresh the page for re-render
    router.refresh();
  };
  return (
    <div
      onClick={handleMoveToDynamicMoviePage}
      className="w-full shadow-[rgba(0,0,0,0.16)_0px_1px_4px] min-h-[200px] rounded-[4px] flex flex-col md:flex-row gap-x-6 items-center dark:bg-white/10"
    >
      <div className="min-h-[220px] w-full md:w-[153px] relative flex-initial">
        <Image
          src={src}
          alt="profile"
          fill
          className="rounded-l-[4px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="h-full flex flex-col gap-y-4 flex-1 p-4 md:p-2">
        <div>
          <h1 className="text-[18px] font-semibold font-inter ">
            {data.title}
          </h1>
          <p className="text-[14px] text-black/60 dark:text-white/70">
            {data.overview}
          </p>
        </div>
        <p className="text-[15px] text-black/60 dark:text-white/70 w-[95%] md:w-[90%]">
          {data.overview}
        </p>

        <div className="flex gap-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
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
