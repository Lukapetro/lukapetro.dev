import type { OutputLine, OutputType } from "@/types/terminal";

export const formatOutput = (
  content: string,
  type: OutputType = "default"
): OutputLine => ({
  content,
  type,
});

export const openInNewTab = (url: string) => {
  window.open(url, "_blank")?.focus();
  return [formatOutput(`Opening ${url}...`, "success")];
};

export const copyToClipboard = (text: string): OutputLine[] => {
  try {
    navigator.clipboard.writeText(text);
    return [formatOutput(`Copied ${text} to clipboard!`, "success")];
  } catch (error) {
    return [formatOutput("Failed to copy to clipboard", "error")];
  }
};
