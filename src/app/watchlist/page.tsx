import WatchlistCard from "@/components/ui/watchlist-card";

const Page = () => {
  return (
    <div className="container py-[30px]">
      <h1 className="text-[26px] font-semibold font-inter ">
        My Watchlist: 13
      </h1>
      <div className="mt-5">
        <WatchlistCard />
      </div>
    </div>
  );
};

export default Page;
