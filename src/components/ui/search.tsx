"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

// Local imports
import { SearchTermSchema, SearchTermType } from "@/schemas/search.schema";
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

  // handle form submit
  const onSubmit = (data: SearchTermType) => {
    console.log("Search data:", data);
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
