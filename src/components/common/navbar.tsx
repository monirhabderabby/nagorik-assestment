import { User } from "lucide-react";
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
        <div>
          <User className="text-white/70 hover:text-white/90 cursor-pointer transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
