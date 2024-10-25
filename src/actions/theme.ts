"use server";

import { ThemeOptions } from "@/hooks/theme";
import { cookies } from "next/headers";
import { cookiesResponse } from "./watchlist";

export const themePersist = (nextTheme: ThemeOptions) => {
  const cookieStore = cookies();

  cookieStore.set("theme", nextTheme);

  return {
    success: true,
    message: `Theme changed to ${nextTheme}`,
  } as cookiesResponse;
};
