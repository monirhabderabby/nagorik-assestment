import { Heart, ShoppingCart, User } from "lucide-react";
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
          <User className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300" />
          <Link href="/wishlist">
            <Heart className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300" />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300" />
            <p className="bg-orange-500 rounded-full text-white h-4 w-4 text-[13px] flex justify-center items-center absolute -top-1 -right-2">
              5
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
