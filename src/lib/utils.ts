import { genre } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// generating full image with tmdb base url
export const fullImageSrc = (url: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL!}${url}`;
};

export function getGenreNames(genres: genre[]) {
  return genres.map((genre) => genre.name).join(", ");
}
