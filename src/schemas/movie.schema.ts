import { z } from "zod";

// Schema defination for movie card
export const movieCardSchema = z.object({
  adult: z.boolean({
    required_error: "The 'adult' field is required.",
    invalid_type_error: "The 'adult' field must be a boolean value.",
  }),
  backdrop_path: z
    .string({
      invalid_type_error: "The 'backdrop_path' field must be a string.",
    })
    .nullable(),
  genre_ids: z.array(z.number(), {
    required_error: "The 'genre_ids' field is required.",
    invalid_type_error: "The 'genre_ids' field must be an array of numbers.",
  }),
  id: z.number({
    required_error: "The 'id' field is required.",
    invalid_type_error: "The 'id' field must be a number.",
  }),
  original_language: z.string({
    required_error: "The 'original_language' field is required.",
    invalid_type_error: "The 'original_language' field must be a string.",
  }),
  original_title: z.string({
    required_error: "The 'original_title' field is required.",
    invalid_type_error: "The 'original_title' field must be a string.",
  }),
  overview: z.string({
    required_error: "The 'overview' field is required.",
    invalid_type_error: "The 'overview' field must be a string.",
  }),
  popularity: z.number({
    required_error: "The 'popularity' field is required.",
    invalid_type_error: "The 'popularity' field must be a number.",
  }),
  poster_path: z
    .string({
      invalid_type_error: "The 'poster_path' field must be a string.",
    })
    .nullable(),
  release_date: z.string({
    required_error: "The 'release_date' field is required.",
    invalid_type_error: "The 'release_date' field must be a string.",
  }),
  title: z.string({
    required_error: "The 'title' field is required.",
    invalid_type_error: "The 'title' field must be a string.",
  }),
  video: z.boolean({
    required_error: "The 'video' field is required.",
    invalid_type_error: "The 'video' field must be a boolean value.",
  }),
  vote_average: z.number({
    required_error: "The 'vote_average' field is required.",
    invalid_type_error: "The 'vote_average' field must be a number.",
  }),
  vote_count: z.number({
    required_error: "The 'vote_count' field is required.",
    invalid_type_error: "The 'vote_count' field must be a number.",
  }),
});

// Schema defination for populer movies api response
export const populerMoviesResponseSchema = z.object({
  page: z.number({
    required_error: "The 'page' field is required.",
    invalid_type_error:
      "The 'page' field must be a number representing the current page of results.",
  }),
  results: z.array(movieCardSchema, {
    required_error: "The 'results' field is required.",
    invalid_type_error:
      "The 'results' field must be an array of movie objects.",
  }),
  total_pages: z.number({
    required_error: "The 'total_pages' field is required.",
    invalid_type_error:
      "The 'total_pages' field must be a number representing the total number of pages available.",
  }),
  total_results: z.number({
    required_error: "The 'total_results' field is required.",
    invalid_type_error:
      "The 'total_results' field must be a number representing the total number of results available.",
  }),
});

// Schema defination for movie details
export const movieDetailsSchema = z.object({
  adult: z.boolean({
    required_error: "The 'adult' field is required.",
    invalid_type_error: "The 'adult' field must be a boolean value.",
  }),
  backdrop_path: z
    .string({
      invalid_type_error: "The 'backdrop_path' field must be a string.",
    })
    .nullable(),
  belongs_to_collection: z.any().nullable().or(z.null()).optional(),
  budget: z.number({
    required_error: "The 'budget' field is required.",
    invalid_type_error:
      "The 'budget' field must be a number representing the movie's budget.",
  }),
  genres: z.array(
    z.object({
      id: z.number({
        required_error: "Each genre must include an 'id' field.",
        invalid_type_error: "The 'id' field in genres must be a number.",
      }),
      name: z.string({
        required_error: "Each genre must include a 'name' field.",
        invalid_type_error: "The 'name' field in genres must be a string.",
      }),
    }),
    {
      required_error: "The 'genres' field is required.",
      invalid_type_error:
        "The 'genres' field must be an array of genre objects.",
    }
  ),
  homepage: z
    .string({
      invalid_type_error: "The 'homepage' field must be a string.",
    })
    .nullable(),
  id: z.number({
    required_error: "The 'id' field is required.",
    invalid_type_error: "The 'id' field must be a number.",
  }),
  imdb_id: z
    .string({
      invalid_type_error: "The 'imdb_id' field must be a string.",
    })
    .nullable(),
  origin_country: z.array(z.string(), {
    required_error: "The 'origin_country' field is required.",
    invalid_type_error:
      "The 'origin_country' field must be an array of strings.",
  }),
  original_language: z.string({
    required_error: "The 'original_language' field is required.",
    invalid_type_error: "The 'original_language' field must be a string.",
  }),
  original_title: z.string({
    required_error: "The 'original_title' field is required.",
    invalid_type_error: "The 'original_title' field must be a string.",
  }),
  overview: z.string({
    required_error: "The 'overview' field is required.",
    invalid_type_error: "The 'overview' field must be a string.",
  }),
  popularity: z.number({
    required_error: "The 'popularity' field is required.",
    invalid_type_error: "The 'popularity' field must be a number.",
  }),
  poster_path: z
    .string({
      invalid_type_error: "The 'poster_path' field must be a string.",
    })
    .nullable(),
  production_companies: z.array(
    z.object({
      id: z.number({
        required_error: "Each production company must include an 'id' field.",
        invalid_type_error:
          "The 'id' field in production companies must be a number.",
      }),
      logo_path: z
        .string({
          invalid_type_error:
            "The 'logo_path' field in production companies must be a string.",
        })
        .nullable(),
      name: z.string({
        required_error: "Each production company must include a 'name' field.",
        invalid_type_error:
          "The 'name' field in production companies must be a string.",
      }),
      origin_country: z.string({
        required_error:
          "Each production company must include an 'origin_country' field.",
        invalid_type_error:
          "The 'origin_country' field in production companies must be a string.",
      }),
    }),
    {
      required_error: "The 'production_companies' field is required.",
      invalid_type_error:
        "The 'production_companies' field must be an array of production company objects.",
    }
  ),
  production_countries: z.array(
    z.object({
      iso_3166_1: z.string({
        required_error:
          "Each production country must include an 'iso_3166_1' field.",
        invalid_type_error:
          "The 'iso_3166_1' field in production countries must be a string.",
      }),
      name: z.string({
        required_error: "Each production country must include a 'name' field.",
        invalid_type_error:
          "The 'name' field in production countries must be a string.",
      }),
    }),
    {
      required_error: "The 'production_countries' field is required.",
      invalid_type_error:
        "The 'production_countries' field must be an array of production country objects.",
    }
  ),
  release_date: z
    .string({
      invalid_type_error: "The 'release_date' field must be a string.",
    })
    .nullable(),
  revenue: z.number({
    required_error: "The 'revenue' field is required.",
    invalid_type_error: "The 'revenue' field must be a number.",
  }),
  runtime: z
    .number({
      invalid_type_error: "The 'runtime' field must be a number.",
    })
    .nullable(),
  spoken_languages: z.array(
    z.object({
      english_name: z.string({
        required_error:
          "Each spoken language must include an 'english_name' field.",
        invalid_type_error:
          "The 'english_name' field in spoken languages must be a string.",
      }),
      iso_639_1: z.string({
        required_error:
          "Each spoken language must include an 'iso_639_1' field.",
        invalid_type_error:
          "The 'iso_639_1' field in spoken languages must be a string.",
      }),
      name: z.string({
        required_error: "Each spoken language must include a 'name' field.",
        invalid_type_error:
          "The 'name' field in spoken languages must be a string.",
      }),
    }),
    {
      required_error: "The 'spoken_languages' field is required.",
      invalid_type_error:
        "The 'spoken_languages' field must be an array of spoken language objects.",
    }
  ),
  status: z.string({
    required_error: "The 'status' field is required.",
    invalid_type_error: "The 'status' field must be a string.",
  }),
  tagline: z
    .string({
      invalid_type_error: "The 'tagline' field must be a string.",
    })
    .nullable(),
  title: z.string({
    required_error: "The 'title' field is required.",
    invalid_type_error: "The 'title' field must be a string.",
  }),
  video: z.boolean({
    required_error: "The 'video' field is required.",
    invalid_type_error: "The 'video' field must be a boolean value.",
  }),
  vote_average: z.number({
    required_error: "The 'vote_average' field is required.",
    invalid_type_error: "The 'vote_average' field must be a number.",
  }),
  vote_count: z.number({
    required_error: "The 'vote_count' field is required.",
    invalid_type_error: "The 'vote_count' field must be a number.",
  }),
});

// Cast
export const castSchema = z.object({
  adult: z.boolean({
    required_error: "The 'adult' field is required.",
    invalid_type_error: "The 'adult' field must be a boolean value.",
  }),
  gender: z.number().int().min(0, {
    message: "The 'gender' field is required.",
  }),
  id: z.number().int({
    message: "The 'id' field is required.",
  }),
  known_for_department: z.string({
    required_error: "The 'known_for_department' field is required.",
    invalid_type_error:
      "The 'known_for_department' field must be a string indicating the department.",
  }),
  name: z.string({
    required_error: "The 'name' field is required.",
    invalid_type_error: "The 'name' field must be a string.",
  }),
  original_name: z.string({
    required_error: "The 'original_name' field is required.",
    invalid_type_error: "The 'original_name' field must be a string.",
  }),
  popularity: z.number({
    required_error: "The 'popularity' field is required.",
    invalid_type_error: "The 'popularity' field must be a number.",
  }),
  profile_path: z
    .string({
      invalid_type_error: "The 'profile_path' field must be a string.",
    })
    .nullable(),
  cast_id: z.number().int({
    message: "The 'cast_id' field is required.",
  }),
  character: z.string({
    required_error: "The 'character' field is required.",
    invalid_type_error:
      "The 'character' field must be a string indicating the character name.",
  }),
  credit_id: z.string({
    required_error: "The 'credit_id' field is required.",
    invalid_type_error:
      "The 'credit_id' field must be a string representing the credit ID.",
  }),
  order: z.number().int({
    message: "The 'order' field is required.",
  }),
});

export const crewSchema = z.object({
  adult: z.boolean({
    required_error: "The 'adult' field is required.",
    invalid_type_error: "The 'adult' field must be a boolean value.",
  }),
  gender: z.number().int().min(0, {
    message: "The 'gender' field is required.",
  }),
  id: z.number().int({
    message: "The 'id' field is required.",
  }),
  known_for_department: z.string({
    required_error: "The 'known_for_department' field is required.",
    invalid_type_error:
      "The 'known_for_department' field must be a string representing the department.",
  }),
  name: z.string({
    required_error: "The 'name' field is required.",
    invalid_type_error: "The 'name' field must be a string.",
  }),
  original_name: z.string({
    required_error: "The 'original_name' field is required.",
    invalid_type_error: "The 'original_name' field must be a string.",
  }),
  popularity: z.number({
    required_error: "The 'popularity' field is required.",
    invalid_type_error: "The 'popularity' field must be a number.",
  }),
  profile_path: z
    .string({
      invalid_type_error: "The 'profile_path' field must be a string.",
    })
    .nullable(),
  credit_id: z.string({
    required_error: "The 'credit_id' field is required.",
    invalid_type_error:
      "The 'credit_id' field must be a string representing the credit ID.",
  }),
  department: z.string({
    required_error: "The 'department' field is required.",
    invalid_type_error:
      "The 'department' field must be a string representing the department.",
  }),
  job: z.string({
    required_error: "The 'job' field is required.",
    invalid_type_error:
      "The 'job' field must be a string representing the job title.",
  }),
});

// Combine cast and crew schemas into a new schema
export const castAndCrewCombinedSchema = z.object({
  cast: z.array(castSchema, {
    required_error: "The 'cast' field is required.",
    invalid_type_error: "The 'cast' field must be an array of cast objects.",
  }),
  crew: z.array(crewSchema, {
    required_error: "The 'crew' field is required.",
    invalid_type_error: "The 'crew' field must be an array of crew objects.",
  }),
});

export const watchListAndFavouriteSchema = z.object({
  id: z.number({
    message: "The 'id' field is required.",
  }),
  title: z.string({
    required_error: "The 'title' field is required.",
    invalid_type_error: "The 'title' field must be a string.",
  }),
  banner_path: z
    .string({
      invalid_type_error: "The 'banner_path' field must be a string.",
    })
    .nullable(),
  release_date: z
    .string({
      invalid_type_error: "The 'release_date' field must be a string.",
    })
    .nullable(),
  overview: z.string({
    required_error: "The 'overview' field is required.",
    invalid_type_error: "The 'overview' field must be a string.",
  }),
});
