import type { OutputLine } from "@/types/terminal";
import { formatOutput } from "@/utils/terminal";

interface EasterEgg {
  trigger: string;
  hidden: boolean;
  output: OutputLine[];
}

export const easterEggs: EasterEgg[] = [
  {
    trigger: "matrix",
    hidden: true,
    output: [
      formatOutput("Entering the Matrix...", "success"),
      formatOutput("Wake up, Neo...", "info"),
    ],
  },
  {
    trigger: "sudo",
    hidden: true,
    output: [
      formatOutput("Nice try 😎", "error"),
      formatOutput("You have no power here!", "info"),
    ],
  },
  {
    trigger: "coffee",
    hidden: true,
    output: [formatOutput("☕ Here's your virtual coffee!", "success")],
  },
  {
    trigger: "ping",
    hidden: true,
    output: [formatOutput("pong! 🏓", "success")],
  },
];
