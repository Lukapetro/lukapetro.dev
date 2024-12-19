interface GhostTextProps {
  input: string;
  suggestion: string;
}

export const GhostText = ({ input, suggestion }: GhostTextProps) => (
  <div className="absolute inset-0 flex items-center pointer-events-none">
    <span className="text-terminal-text">{input}</span>
    <span className="text-terminal-dim opacity-50">
      {suggestion.slice(input.length)}
    </span>
  </div>
);
