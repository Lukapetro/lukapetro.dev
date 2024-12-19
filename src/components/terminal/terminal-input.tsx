import { useSuggestions } from "@/hooks/use-suggestions";
import { useTheme } from "@/hooks/use-theme";
import React, { type RefObject } from "react";

interface TerminalInputProps {
  input: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  input,
  inputRef,
  onInputChange,
  onKeyDown,
}) => {
  const { currentTheme } = useTheme();
  const { getSuggestion } = useSuggestions();

  const suggestion = getSuggestion(input);

  return (
    <div className="terminal-input-line">
      <div className="flex items-center">
        <span style={{ color: currentTheme.colors.accent }} className="mr-2">
          $
        </span>
        <div className="relative flex-1">
          {suggestion && (
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <span className="text-terminal-text">{input}</span>
              <span
                style={{ color: currentTheme.colors.dim }}
                className="opacity-50"
              >
                {suggestion.slice(input.length)}
              </span>
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            style={{ color: currentTheme.colors.text }}
            className="bg-transparent border-none outline-none w-full
                     text-terminal-text caret-terminal-accent font-mono
                     focus:ring-0 focus:outline-none relative z-10"
            autoFocus
            aria-label="terminal input"
          />
        </div>
      </div>
    </div>
  );
};
