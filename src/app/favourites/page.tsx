import { getAllFavouriteList } from "@/actions/favourite";
import { cookiesResponse } from "@/actions/watchlist";
import WatchlistCard from "@/components/ui/watchlist-card";
import { watchListAndFavouriteType } from "@/schemas/movie.schema";

const Page = async () => {
  const favourites = (await getAllFavouriteList()) as cookiesResponse & {
    data: watchListAndFavouriteType[];
  };

  return (
    <div className="container py-[30px]">
      <h1 className="text-[26px] font-semibold font-inter ">
        Favourites: {favourites.data.length}
      </h1>
      <div className="mt-5 space-y-4 ">
        {favourites.data.map((favourite: watchListAndFavouriteType) => (
          <WatchlistCard
            data={favourite}
            key={favourite.id}
            as="favouriteList"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
