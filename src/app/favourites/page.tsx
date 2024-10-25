import { getAllFavouriteList } from "@/actions/favourite";
import { cookiesResponse } from "@/actions/watchlist";
import WatchlistCard from "@/components/ui/watchlist-card";
import { watchListAndFavouriteType } from "@/types";

const Page = async () => {
  const favourites = (await getAllFavouriteList()) as cookiesResponse & {
    data: watchListAndFavouriteType[];
  };

  // Variable to hold the JSX for the watchlists content (handle empty watchlist).
  let content;

  if (favourites.data.length <= 0) {
    content = (
      <div className="mt-5 text-gray-400">
        You haven&apos;t added any item shows to your favouriteList.
      </div>
    );
  } else {
    content = (
      <div className="mt-5 space-y-4 ">
        {favourites.data.map((watchlist: watchListAndFavouriteType) => (
          <WatchlistCard data={watchlist} key={watchlist.id} as="watchlist" />
        ))}
      </div>
    );
  }

  return (
    <div className="container py-[30px]">
      <h1 className="text-[26px] font-semibold font-inter ">
        Favourites: {favourites.data.length}
      </h1>
      {content}
    </div>
  );
};

export default Page;
