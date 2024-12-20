import type { OutputLine } from "@/types/terminal";
import { formatOutput } from "@/utils/terminal";
import { createLineSeparator } from "./commands";

export const desktopWelcome: OutputLine[] = [
  formatOutput(
    `
 ██╗     ██╗   ██╗██╗  ██╗ █████╗ ██████╗ ███████╗████████╗██████╗  ██████╗ 
 ██║     ██║   ██║██║ ██╔╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗
 ██║     ██║   ██║█████╔╝ ███████║██████╔╝█████╗     ██║   ██████╔╝██║   ██║
 ██║     ██║   ██║██╔═██╗ ██╔══██║██╔═══╝ ██╔══╝     ██║   ██╔══██╗██║   ██║
 ███████╗╚██████╔╝██║  ██╗██║  ██║██║     ███████╗   ██║   ██║  ██║╚██████╔╝
 ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ 
 `,
    "title"
  ),
  formatOutput("", "default"),
  createLineSeparator(),
  formatOutput("Welcome to my terminal portfolio! 👋", "info"),
  formatOutput("Type 'help' to see available commands", "success"),
  formatOutput("", "default"),
];

export const mobileWelcome: OutputLine[] = [
  formatOutput("Welcome to my terminal portfolio! 👋", "info"),
  formatOutput("Type 'help' to see available commands", "success"),
  formatOutput("", "default"),
];
