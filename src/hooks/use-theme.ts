// src/store/theme.ts
import { themes, type Theme } from "@/themes/terminal-themes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: themes.tokyo,
      setTheme: (themeName) => set({ currentTheme: themes[themeName] }),
    }),
    {
      name: "terminal-theme",
    }
  )
);
