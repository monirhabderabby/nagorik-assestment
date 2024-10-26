import { create } from "zustand";

type Store = {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
};

export const useSearchTerm = create<Store>()((set) => ({
  searchTerm: "",
  setSearchTerm: (currentSearchTerm: string) =>
    set(() => ({
      searchTerm: currentSearchTerm,
    })),
}));
