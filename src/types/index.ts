// Import schemas from the movie.schema file. These schemas are used to validate and type-check
// the structure of various movie-related objects like cast, crew, movie card, movie details,
// and popular movies responses.
import {
  castSchema,
  crewSchema,
  movieCardSchema,
  movieDetailsSchema,
  populerMoviesResponseSchema,
} from "@/schemas/movie.schema";
import { z } from "zod";

// Define a genre type with id and name properties, representing movie genre data.
export type genre = {
  id: number;
  name: string;
};

// Define a type for movieCardSchema, inferred from the movieCardSchema schema.
// This is used for data structures related to individual movie cards.
export type movieCardSchemaType = z.infer<typeof movieCardSchema>;

// Define a type for popularMoviesResponseSchema, inferred from the
// populerMoviesResponseSchema schema. This is used for data structures that
// handle responses containing popular movies.
export type populerMoviesResponseSchemaType = z.infer<
  typeof populerMoviesResponseSchema
>;

// Define a type for movieDetailsSchema, inferred from the movieDetailsSchema schema.
// This is used for detailed movie data.
export type movieDetailsSchemaType = z.infer<typeof movieDetailsSchema>;

// Define a type for castSchema, inferred from the castSchema schema.
// This type is used for individual cast member data.
export type castSchemaType = z.infer<typeof castSchema>;

// Define a type for crewSchema, inferred from the crewSchema schema.
// This type is used for individual crew member data.
export type crewSchemaType = z.infer<typeof crewSchema>;

// Define a type for a response that includes both cast and crew data.
// This type contains an array of cast and crew objects and an id property.
export type castAndCrewResponseType = {
  cast: castSchemaType[];
  crew: crewSchemaType[];
  id: number;
};

// Define a type for items in a user's watchlist or favorites list.
// This type includes properties for id, title, banner image, release date, and overview.
export type watchListAndFavouriteType = {
  id: number;
  title: string;
  banner_path: string | null;
  release_date: string | null;
  overview: string;
};
