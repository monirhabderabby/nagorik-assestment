import Hero from "@/components/ui/hero";
import MovieCard from "@/components/ui/movie-card";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-10">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}
