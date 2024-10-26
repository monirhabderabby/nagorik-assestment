"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

// Local imports
import { SearchTermSchema, SearchTermType } from "@/schemas/search.schema";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { Input } from "./input";

const SearchField = () => {
  // react-hook-forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchTermType>({
    resolver: zodResolver(SearchTermSchema),
  });

  const { isPending, data, mutate } = useMutation({
    mutationFn: (queryText: string) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${queryText}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (data) {
      // do some stuff
    }
  }, [data]);

  // handle form submit
  const onSubmit = (data: SearchTermType) => {
    setTimeout(() => {
      mutate(data.searchTerm);
    }, 2000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-x-2"
      >
        <div className="max-w-[500px]">
          <Input
            className="text-black text-[18px] w-auto md:w-[500px]"
            placeholder="Search for a movie, tv show, person..."
            {...register("searchTerm")}
          />
        </div>
        <button className="bg-white text-black h-10 w-10 flex justify-center items-center rounded-md hover:text-black/80 hover:bg-white/80 transition-colors duration-300">
          <Search />
        </button>
      </form>
      {/* Display validation errors */}
      {errors.searchTerm && (
        <p className="text-red-500 text-sm mt-1">{errors.searchTerm.message}</p>
      )}
    </>
  );
};

export default SearchField;
