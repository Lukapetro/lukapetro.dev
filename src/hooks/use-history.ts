import { create } from "zustand";
import { persist } from "zustand/middleware";

interface HistoryState {
  history: string[];
  addToHistory: (command: string) => void;
  clearHistory: () => void;
}

export const useHistory = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (command) =>
        set((state) => ({
          history: [...state.history, command].slice(-50),
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "terminal-history",
    }
  )
);
