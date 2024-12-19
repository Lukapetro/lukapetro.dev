import { commands } from "@/data/commands";
import { contacts } from "@/data/contact";

export const useSuggestions = () => {
  const getSuggestion = (input: string): string => {
    const [command, ...args] = input.toLowerCase().split(" ");

    if (command === "open" || command === "copy") {
      const platform = args.join(" ");
      const platformSuggestions = contacts.filter((c) =>
        c.platform.startsWith(platform)
      );
      return platformSuggestions.length === 1
        ? `${command} ${platformSuggestions[0].platform}`
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
