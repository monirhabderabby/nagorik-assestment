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

// Schema defination for movie details
export const movieDetailsSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  belongs_to_collection: z.any().nullable(),
  budget: z.number(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  homepage: z.string().nullable(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(
    z.object({
      id: z.number(),
      logo_path: z.string().nullable(),
      name: z.string(),
      origin_country: z.string(),
    })
  ),
  production_countries: z.array(
    z.object({
      iso_3166_1: z.string(),
      name: z.string(),
    })
  ),
  release_date: z.string().nullable(),
  revenue: z.number(),
  runtime: z.number().nullable(),
  spoken_languages: z.array(
    z.object({
      english_name: z.string(),
      iso_639_1: z.string(),
      name: z.string(),
    })
  ),
  status: z.string(),
  tagline: z.string().nullable(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type movieDetailsSchemaType = z.infer<typeof movieDetailsSchema>;

// Cast
export const castSchema = z.object({
  adult: z.boolean(),
  gender: z.number().int().min(0),
  id: z.number().int(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  cast_id: z.number().int(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number().int(),
});

export type castSchemaType = z.infer<typeof castSchema>;

export const crewSchema = z.object({
  adult: z.boolean(),
  gender: z.number().int().min(0),
  id: z.number().int(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
  department: z.string(),
  job: z.string(),
});

export type crewSchemaType = z.infer<typeof crewSchema>;

// Combine cast and crew schemas into a new schema
export const castAndCrewCombinedSchema = z.object({
  cast: z.array(castSchema),
  crew: z.array(crewSchema),
});

export type castAndCrewResponseType = {
  cast: castSchemaType[];
  crew: crewSchemaType[];
  id: number;
};

export const watchListAndFavouriteSchema = z.object({
  id: z.number(),
  title: z.string(),
  banner_path: z.string().nullable(),
  release_date: z.string().nullable(),
  overview: z.string(),
});

export type watchListAndFavouriteType = {
  id: number;
  title: string;
  banner_path: string | null;
  release_date: string | null;
  overview: string;
};
