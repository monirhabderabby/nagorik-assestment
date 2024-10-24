// Packages
import { Heart, X } from "lucide-react";
import Image from "next/image";

const WatchlistCard = () => {
  return (
    <div className="w-full shadow-[rgba(0,0,0,0.16)_0px_1px_4px] min-h-[200px] rounded-[4px] flex flex-col md:flex-row gap-x-6 items-center ">
      <div className="min-h-[220px] w-full md:w-[153px] relative flex-initial">
        <Image
          src="https://utfs.io/f/ENJYMqft5qDjB4iMoXa5hgGjvrnSMRF80cZxHKVo7kqdaQf5"
          alt="profile"
          fill
          className="rounded-l-[4px]"
        />
      </div>
      <div className="h-full flex flex-col gap-y-4 flex-1 p-4 md:p-2">
        <div>
          <h1 className="text-[18px] font-semibold font-inter text-black">
            Deadpool & Wolverine{" "}
          </h1>
          <p className="text-[14px] text-black/60">24 July 2024</p>
        </div>
        <p className="text-[15px] text-black/60 w-[95%] md:w-[90%]">
          A listless Wade Wilson toils away in civilian life with his days as
          the morally flexible mercenary, Deadpool, behind him. But when his
          homeworld faces an existential threat, Wade must reluctantly suit-up
          again with an even more reluctant Wolverine.
        </p>

        <div className="flex gap-x-3">
          <button className="group flex items-center gap-x-1">
            <div className="w-[30px] h-[30px] group-hover:bg-gray-600 group-hover:text-white group-hover:border-white flex justify-center items-center rounded-full border-[1px] border-gray-400">
              <Heart className="h-4 w-4 " />
            </div>
            Favourite
          </button>
          <button className="group flex items-center gap-x-1">
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
