import { commands } from "@/data/commands";
import type { OutputLine } from "@/types/terminal";
import { useEffect, useState, type RefObject } from "react";
import { useHistory } from "./use-history";
import { useSuggestions } from "./use-suggestions";

interface UseTerminalProps {
  terminalRef: RefObject<HTMLDivElement | null>;
  inputRef: RefObject<HTMLInputElement | null>;
}

export const useTerminal = ({ terminalRef, inputRef }: UseTerminalProps) => {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<OutputLine[]>([]);
  const { history, addToHistory } = useHistory();

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const handleCommand = (commandLine: string) => {
    const [command, ...args] = commandLine.trim().toLowerCase().split(" ");
    const cmd = commands[command];

    if (!cmd) {
      return [
        {
          content: `Command not found: ${command}. Type 'help' for available commands.`,
          type: "error" as const,
        },
      ];
    }

    return cmd.handler(args.join(" "));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      const command = input.trim().toLowerCase();
      const response = handleCommand(command);

      addToHistory(command);

      if (!Array.isArray(response) && response.content === "CLEAR_TERMINAL") {
        setOutput([]);
      } else {
        setOutput([
          ...output,
          { content: `$ ${command}`, type: "default" as const },
          ...(Array.isArray(response) ? response : [response]),
        ]);
      }

      setCommandHistory([...commandHistory, command]);
      setHistoryIndex(-1);
      setInput("");
      setTimeout(scrollToBottom, 0);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      if (newIndex < history.length) {
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const { getSuggestion } = useSuggestions();
      const suggestion = getSuggestion(input);
      if (suggestion) {
        setInput(suggestion);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    scrollToBottom();
  }, [output]);

  return {
    input,
    setInput,
    output,
    handleKeyDown,
  };
};
