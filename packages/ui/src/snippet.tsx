import type { FC } from 'react';

interface SnippetProps {
  readonly cmd: string;
}

export const Snippet: FC<SnippetProps> = ({ cmd }) => (
  <div className="flex w-fit max-w-full items-start gap-2 rounded-md border border-border bg-muted px-4 py-2.5 font-mono text-sm">
    <span className="select-none text-muted-foreground">$</span>
    <span className="whitespace-pre-wrap break-all text-foreground/80">
      {cmd}
    </span>
  </div>
);
