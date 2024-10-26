"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { debounce } from "lodash"; // Import debounce
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports
import { useSearchTerm } from "@/hooks/searchTerm";
import { SearchTermSchema, SearchTermType } from "@/schemas/search.schema";
import { useMemo } from "react";
import { Input } from "./input";

const SearchField = () => {
  const { setSearchTerm, searchTerm } = useSearchTerm();

  // react-hook-forms
  const { register, handleSubmit } = useForm<SearchTermType>({
    resolver: zodResolver(SearchTermSchema),
    defaultValues: {
      searchTerm: searchTerm,
    },
  });

  // Create a debounced version of setSearchTerm
  const debouncedSetSearchTerm = useMemo(
    () => debounce((value) => setSearchTerm(value), 500),
    [setSearchTerm]
  );

  // Handle input change with debouncing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debouncedSetSearchTerm(value);
  };

  // handle form submit
  const onSubmit = (data: z.infer<typeof SearchTermSchema>) => {
    setSearchTerm(data.searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-x-2"
    >
      <div className="max-w-[500px]">
        <Input
          className="text-black text-[18px] w-auto md:w-[500px]"
          placeholder="Search for a movie, tv show, person..."
          {...register("searchTerm", { onChange: handleInputChange })} // Use handleInputChange
        />
      </div>
    </form>
  );
};

export default SearchField;
