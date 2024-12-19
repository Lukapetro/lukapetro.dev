// src/components/Terminal.tsx
import { useTerminal } from "@/hooks/use-terminal";
import { useTheme } from "@/hooks/use-theme";
import React, { useRef } from "react";
import { TerminalInput } from "./terminal-input";

const Terminal: React.FC = () => {
  const { currentTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const { input, setInput, output, handleKeyDown, path } = useTerminal({
    terminalRef,
    inputRef,
  });

  React.useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        backgroundColor: currentTheme.colors.window,
        borderColor: currentTheme.colors.border,
        color: currentTheme.colors.text,
      }}
      className="terminal-container relative min-h-[200px] max-h-[80vh] overflow-y-auto p-4 
                 rounded-lg border shadow-terminal"
      onClick={() => inputRef.current?.focus()}
    >
      <div>
        {output.length > 0 && (
          <div className="space-y-1 mb-4">
            {output.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap ${
                  line.type === "error"
                    ? "text-red-400"
                    : line.type === "success"
                    ? "text-green-400"
                    : line.type === "warning"
                    ? "text-yellow-400"
                    : line.type === "title"
                    ? "text-terminal-accent font-bold"
                    : line.type === "info"
                    ? "text-terminal-dim"
                    : "text-terminal-text"
                }`}
              >
                {line.content}
              </div>
            ))}
          </div>
        )}
        <TerminalInput
          input={input}
          inputRef={inputRef}
          onInputChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          path={path}
        />
      </div>
    </div>
  );
};

export default Terminal;
