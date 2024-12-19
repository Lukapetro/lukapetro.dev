import { useTheme } from "@/hooks/use-theme";
import { themes } from "@/themes/terminal-themes";
import type { Commands, OutputLine, OutputType } from "@/types/terminal";

const formatOutput = (
  content: string,
  type: OutputType = "default"
): OutputLine => ({
  content,
  type,
});

export const commands: Commands = {
  help: {
    description: "List all available commands",
    usage: "help",
    handler: () => {
      const lines: OutputLine[] = [
        formatOutput("Available Commands:", "title"),
        ...Object.entries(commands).map(([cmd, info]) =>
          formatOutput(`${cmd.padEnd(15)} - ${info.description}`, "info")
        ),
      ];
      return lines;
    },
  },
  clear: {
    description: "Clear terminal screen",
    usage: "clear",
    handler: () => formatOutput("CLEAR_TERMINAL", "default"),
  },
  about: {
    description: "About me",
    usage: "about",
    handler: () => {
      const lines: OutputLine[] = [
        formatOutput("Hey! I'm Luka👋", "title"),
        formatOutput("", "default"),
        formatOutput("Just a chill dev.", "info"),
        formatOutput("", "default"),
        formatOutput("Tech I enjoy:", "title"),
        formatOutput("ts • react • node • next • postgres", "info"),
        formatOutput("", "default"),
        formatOutput("type 'projects' for my work", "success"),
      ];
      return lines;
    },
  },
  theme: {
    description: "Change terminal theme",
    usage: "theme [name]",
    handler: (args?: string) => {
      const themeStore = useTheme.getState();
      const currentThemeName = themeStore.currentTheme.name;

      if (!args) {
        const lines: OutputLine[] = [
          formatOutput("Available Themes:", "title"),
          ...Object.keys(themes).map((theme) =>
            formatOutput(
              `${theme}${theme === currentThemeName ? " (current)" : ""}`,
              "info"
            )
          ),
        ];
        return lines;
      }

      const themeName = args.toLowerCase();
      if (!themes[themeName]) {
        return formatOutput(`Theme '${themeName}' not found`, "error");
      }

      useTheme.setState({ currentTheme: themes[themeName] });
      return formatOutput(`Theme changed to ${themeName}`, "success");
    },
  },
};
