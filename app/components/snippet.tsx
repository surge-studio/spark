import type { FC } from 'react';

interface SnippetProps {
  readonly cmd: string;
}

export const Snippet: FC<SnippetProps> = ({ cmd }) => (
  <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2.5 font-mono text-sm">
    <span className="select-none text-muted-foreground">$</span>
    <span className="text-foreground/80">{cmd}</span>
  </div>
);
