import { z } from "zod";

// Schema defination for movie card
export const movieCardSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type movieCardSchemaType = z.infer<typeof movieCardSchema>;

// Schema defination for populer movies api response
export const populerMoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(movieCardSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type populerMoviesResponseSchemaType = z.infer<
  typeof populerMoviesResponseSchema
>;
