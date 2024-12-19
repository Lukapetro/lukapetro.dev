import { contacts } from "@/data/contact";
import { copyToClipboard, formatOutput, openInNewTab } from "@/utils/terminal";

export const handleContactCommand = (command: string, args: string[]) => {
  if (command === "back" || command === "..") {
    return {
      path: [],
      prompt: "~",
      output: [formatOutput("Back to home", "info")],
    };
  }

  if (command === "open" || command === "copy") {
    const platform = args[0];
    const contact = contacts.find((c) => c.platform === platform);
    if (!contact) {
      return {
        output: [formatOutput(`Invalid platform: ${platform}`, "error")],
      };
    }
    return {
      output:
        command === "open"
          ? openInNewTab(contact.url)
          : copyToClipboard(contact.username),
    };
  }

  return {
    path: ["contact"],
    prompt: "~/contact",
    output: [
      formatOutput("Contact Information:", "title"),
      ...contacts.map((c) =>
        formatOutput(`${c.platform}: ${c.username}`, "info")
      ),
      formatOutput("", "default"),
      formatOutput("Available commands:", "title"),
      formatOutput("open <platform>   - Visit profile", "info"),
      formatOutput("copy <platform>   - Copy username", "info"),
      formatOutput("back              - Return home", "info"),
      formatOutput("", "default"),
      formatOutput("Example: 'open github' or 'copy email'", "success"),
    ],
  };
};
