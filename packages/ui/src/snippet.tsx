import type { FC } from 'react';

interface SnippetProps {
  readonly cmd: string;
}

export const Snippet: FC<SnippetProps> = ({ cmd }) => (
  <div className="border-border bg-muted flex w-fit max-w-full items-start gap-2 rounded-[6px] border px-3 py-2 font-mono text-sm">
    <span className="text-muted-foreground select-none">$</span>
    <span className="text-foreground/80 break-all whitespace-pre-wrap">
      {cmd}
    </span>
  </div>
);
