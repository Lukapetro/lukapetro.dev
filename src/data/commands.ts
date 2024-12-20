import { handleContactCommand } from "@/hooks/use-terminal/handle-contact-command";
import { handleProjectCommand } from "@/hooks/use-terminal/handle-project-command";
import { useTheme } from "@/hooks/use-theme";
import { themes } from "@/themes/terminal-themes";
import type { Commands, OutputLine } from "@/types/terminal";
import { formatOutput } from "@/utils/terminal";
import { easterEggs } from "./easteregges";

export const createLineSeparator = (): OutputLine =>
  formatOutput("---------------------------", "info");
export const createEmptyLine = (): OutputLine => formatOutput(" ", "default");

export const commands: Commands = {
  about: {
    description: "About me",
    usage: "about",
    handler: () => {
      const lines: OutputLine[] = [
        formatOutput("Hey! I'm Luka👋", "title"),
        formatOutput("", "default"),
        formatOutput("Just a chill dev.", "info"),
        createEmptyLine(),
        formatOutput("Tech I enjoy:", "title"),
        formatOutput("ts • react • nextjs • trpc • tailwind • drizzle", "info"),
        createLineSeparator(),
        formatOutput("type 'projects' for my work", "success"),
      ];
      return lines;
    },
  },

  contact: {
    description: "Display contact information",
    usage: "contact",
    handler: (args?: string) =>
      handleContactCommand("contact", args?.split(" ") || []).output,
  },

  clear: {
    description: "Clear terminal screen",
    usage: "clear",
    handler: () => formatOutput("CLEAR_TERMINAL", "default"),
  },

  help: {
    description: "List available commands",
    usage: "help",
    handler: () => [
      formatOutput("Available Commands:", "title"),
      ...Object.entries(commands)
        .filter(([_, info]) => info.description) // Only show commands with descriptions
        .map(([cmd, info]) =>
          formatOutput(`${cmd.padEnd(15)} - ${info.description}`, "info")
        ),
    ],
  },

  projects: {
    description: "View my projects",
    usage: "projects",
    handler: (args?: string) => handleProjectCommand("projects", []).output,
  },

  theme: {
    description: "Change terminal theme",
    usage: "theme [name]",
    handler: (args?: string) => {
      const themeStore = useTheme.getState();
      const currentThemeName = themeStore.currentTheme.name;

      if (!args) {
        return [
          formatOutput("Available Themes:", "title"),
          ...Object.keys(themes).map((theme) =>
            formatOutput(
              `${theme}${theme === currentThemeName ? " (current)" : ""}`,
              "info"
            )
          ),
          formatOutput(
            "Hint: Type 'theme [name]' to change the theme",
            "success"
          ),
        ];
      }

      const themeName = args.toLowerCase();
      if (!themes[themeName]) {
        return formatOutput(`Theme '${themeName}' not found`, "error");
      }

      useTheme.setState({ currentTheme: themes[themeName] });
      return formatOutput(`Theme changed to ${themeName}`, "success");
    },
  },

  ...easterEggs.reduce(
    (acc, egg) => ({
      ...acc,
      [egg.trigger]: {
        description: egg.hidden ? undefined : "Easter egg command",
        usage: egg.trigger,
        handler: () => egg.output,
      },
    }),
    {}
  ),
};
