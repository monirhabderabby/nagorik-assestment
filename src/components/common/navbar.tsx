"use client";

// Packages
import { Heart, User } from "lucide-react";
import Link from "next/link";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

// Local imports
import { themePersist } from "@/actions/theme";
import { ThemeOptions, useTheme } from "@/hooks/theme";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  function handleTheme(nextTheme: ThemeOptions) {
    setTheme(nextTheme);
    themePersist(nextTheme);
  }
  return (
    <nav
      className={cn(
        "w-full h-[80px]",
        theme === "dark" ? "bg-black border-b-0" : "bg-white border-b"
      )}
    >
      <div className="w-full flex justify-between container items-center h-full">
        <Link
          className=" text-orange-500 text-[24px] font-bold cursor-pointer  transition-colors duration-300"
          href="/"
        >
          TMDB
        </Link>
        <div className="flex items-center gap-x-3">
          <Link
            href="/watchlist"
            className="dark:text-white/70  text-black/80 hover:text-orange-500 dark:hover:text-orange-500  cursor-pointer transition-colors duration-300"
          >
            Watchlist
          </Link>
          <User className="dark:text-white/70 text-black/80 hover:text-orange-500 dark:hover:text-orange-500 cursor-pointer transition-colors duration-300" />
          <Link href="/favourites">
            <Heart className="dark:text-white/70 dark:hover:text-white/90 text-black/80 hover:text-orange-500 dark:hover:text-orange-500 cursor-pointer transition-colors duration-300" />
          </Link>
          <button
            className={cn(
              " transition-colors duration-300  w-[40px] h-[40px] rounded-[4px] flex justify-center items-center",
              theme === "dark"
                ? "bg-white/10 hover:bg-orange-200/20"
                : "bg-black/5 hover:bg-orange-200/20"
            )}
            onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <AiOutlineMoon
                className={cn(
                  " cursor-pointer transition-colors duration-300 h-5 w-5 dark:text-white/70 text-black/80 hover:text-black/90"
                )}
              />
            ) : (
              <AiOutlineSun className="dark:text-white/70 dark:hover:text-white/90 cursor-pointer transition-colors duration-300 h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
