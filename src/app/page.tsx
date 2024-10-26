// Packages
import dynamic from "next/dynamic";

// Local imports
import Hero from "@/components/ui/hero";
const PopulerMovies = dynamic(
  () => import("@/components/sections/populer-movies"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Hero />
      <PopulerMovies />
    </>
  );
}
