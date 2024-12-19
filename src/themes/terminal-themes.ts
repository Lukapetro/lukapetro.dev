export interface Theme {
  name: string;
  colors: {
    background: string; // Page background
    window: string; // Terminal window
    text: string; // Main text color
    accent: string; // Prompt and highlights
    dim: string; // Secondary text
    border: string; // Window border
  };
}

export const themes: { [key: string]: Theme } = {
  tokyo: {
    name: "tokyo",
    colors: {
      background: "#1a1b26",
      window: "#0f172a",
      text: "#e2e8f0",
      accent: "#38bdf8",
      dim: "#64748b",
      border: "#2d3548",
    },
  },
  dracula: {
    name: "dracula",
    colors: {
      background: "#282a36",
      window: "#1e1f29",
      text: "#f8f8f2",
      accent: "#bd93f9",
      dim: "#6272a4",
      border: "#44475a",
    },
  },
  gruvbox: {
    name: "gruvbox",
    colors: {
      background: "#282828",
      window: "#1d2021",
      text: "#ebdbb2",
      accent: "#b8bb26",
      dim: "#928374",
      border: "#504945",
    },
  },
  nord: {
    name: "nord",
    colors: {
      background: "#2e3440",
      window: "#3b4252",
      text: "#d8dee9",
      accent: "#88c0d0",
      dim: "#4c566a",
      border: "#434c5e",
    },
  },
  solarized: {
    name: "solarized",
    colors: {
      background: "#002b36",
      window: "#073642",
      text: "#839496",
      accent: "#2aa198",
      dim: "#586e75",
      border: "#093642",
    },
  },
};
