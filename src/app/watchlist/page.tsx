import { cookiesResponse, getAllWatchList } from "@/actions/watchlist";
import WatchlistCard from "@/components/common/cards/watchlist-card";
import { watchListAndFavouriteType } from "@/types";

const Page = async () => {
  const watchlists = (await getAllWatchList()) as cookiesResponse & {
    data: watchListAndFavouriteType[];
  };

  // Variable to hold the JSX for the watchlists content (handle empty watchlist).
  let content;

  if (watchlists.data.length <= 0) {
    content = (
      <div className="mt-5 text-gray-400">
        You haven&&apos;t added any item shows to your watchlist.
      </div>
    );
  } else {
    content = (
      <div className="mt-5 space-y-4 ">
        {watchlists.data.map((watchlist: watchListAndFavouriteType) => (
          <WatchlistCard data={watchlist} key={watchlist.id} as="watchlist" />
        ))}
      </div>
    );
  }

  return (
    <div className="container py-[30px]">
      <h1 className="text-[26px] font-semibold font-inter ">
        My Watchlist: {watchlists.data.length}
      </h1>
      <>{content}</>
    </div>
  );
};

export default Page;
