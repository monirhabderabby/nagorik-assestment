import { Heart, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] bg-black">
      <div className="w-full flex justify-between container items-center h-full">
        <Link
          className="text-white/80 text-[24px] font-bold cursor-pointer hover:text-white/90 transition-colors duration-300"
          href="/"
        >
          TMDB
        </Link>
        <div className="flex items-center gap-x-3">
          <Link
            href="/watchlist"
            className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300"
          >
            Watchlist
          </Link>
          <User className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300" />
          <Link href="/favourites">
            <Heart className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
