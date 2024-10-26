"use client";
// Packages
import dynamic from "next/dynamic";

// Local imports
import { useTheme } from "@/hooks/theme";
const SearchField = dynamic(() => import("./search"), { ssr: false });

const Hero = () => {
  const { theme } = useTheme();
  return (
    <main
      className="h-[50vh] w-full  border-t border-white/15 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          theme === "light" ? "url(/wildrobot.webp)" : "url(/banner.jpg)",
      }}
    >
      <div className="text-white/80 container h-full flex items-start flex-col justify-center gap-y-4">
        <div>
          <h1 className="text-[50px] font-bold font-courgette">Welcome.</h1>
          <p className="text-white/70 text-[18px] md:text-[20px] tracking-wider">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <SearchField />
      </div>
    </main>
  );
};

export default Hero;
