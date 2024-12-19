import { commands } from "@/data/commands";
import { themes } from "@/themes/terminal-themes";

export const useSuggestions = () => {
  const getSuggestion = (input: string): string => {
    const [command, ...args] = input.toLowerCase().split(" ");

    if (command === "theme" && args.length <= 1) {
      const themeArg = args[0] || "";
      const themeSuggestions = Object.keys(themes).filter((t) =>
        t.startsWith(themeArg)
      );
      return themeSuggestions.length === 1
        ? `theme ${themeSuggestions[0]}`
        : "";
    }

    if (!input.includes(" ")) {
      const cmdSuggestions = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      return cmdSuggestions.length === 1 ? cmdSuggestions[0] : "";
    }

    return "";
  };

  return { getSuggestion };
};
