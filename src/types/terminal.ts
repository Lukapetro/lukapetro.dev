export interface Commands {
  [key: string]: Command;
}

export type OutputType =
  | "error"
  | "success"
  | "info"
  | "warning"
  | "title"
  | "default";

export interface OutputLine {
  content: string;
  type: OutputType;
}

export interface Command {
  description: string;
  usage: string;
  handler: (args?: string) => OutputLine | OutputLine[];
}
