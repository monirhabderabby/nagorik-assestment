import { cookiesResponse, getAllWatchList } from "@/actions/watchlist";
import WatchlistCard from "@/components/ui/watchlist-card";
import { watchListAndFavouriteType } from "@/schemas/movie.schema";

const Page = async () => {
  const watchlists = (await getAllWatchList()) as cookiesResponse & {
    data: watchListAndFavouriteType[];
  };

  return (
    <div className="container py-[30px]">
      <h1 className="text-[26px] font-semibold font-inter ">
        My Watchlist: {watchlists.data.length}
      </h1>
      <div className="mt-5 space-y-4 ">
        {watchlists.data.map((watchlist: watchListAndFavouriteType) => (
          <WatchlistCard data={watchlist} key={watchlist.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
