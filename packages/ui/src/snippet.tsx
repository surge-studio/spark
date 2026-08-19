'use client';

import { useEffect, useRef, useState } from 'react';

interface SnippetProps {
  readonly cmd: string;
}

const CopyIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
    className="size-3.5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
    className="size-3.5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path d="m20 6-11 11-5-5" />
  </svg>
);

export function Snippet({ cmd }: SnippetProps) {
  const [copied, setCopied] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(
    () => () => {
      clearTimeout(resetTimeout.current);
    },
    []
  );

  const copyCommand = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="border-border bg-muted flex w-full max-w-3xl items-start gap-2 rounded-[6px] border px-3 py-2 font-mono text-sm">
      <span className="text-muted-foreground select-none">$</span>
      <code className="text-foreground/80 min-w-0 flex-1 break-all whitespace-pre-wrap">
        {cmd}
      </code>
      <button
        type="button"
        onClick={copyCommand}
        className="text-muted-foreground hover:bg-background hover:text-foreground -my-0.5 grid size-6 shrink-0 place-items-center rounded transition"
        aria-label={copied ? 'Command copied' : 'Copy command'}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
}
