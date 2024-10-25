import { create } from "zustand";

export type ThemeOptions = "dark" | "light";

type Store = {
  theme: ThemeOptions;
  setTheme: (nextTheme: ThemeOptions) => void;
};

export const useTheme = create<Store>()((set) => ({
  theme: "dark",
  setTheme: (nextTheme: ThemeOptions) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    set(() => ({
      theme: nextTheme,
    })),
}));
