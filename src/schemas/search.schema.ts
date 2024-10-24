import { z } from "zod";

// Define a Zod schema
export const SearchTermSchema = z.object({
  searchTerm: z
    .string()
    .min(1, "Search term is required")
    .max(100, "Search term cannot exceed 100 characters"),
});

export type SearchTermType = z.infer<typeof SearchTermSchema>;
