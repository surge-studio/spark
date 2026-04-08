import { firstComponentHref } from '@spark/content/components';
import { heroContent } from '@spark/content/docs';
import Link from 'next/link';
import type { FC } from 'react';

export const Hero: FC = () => (
  <section className="px-4 py-24 sm:px-6 sm:py-28">
    <div className="mx-auto flex w-full max-w-[1480px] justify-center">
      <div className="max-w-2xl space-y-6 text-center">
        <div className="space-y-3">
          <h2 className="text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {heroContent.title}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/docs"
            className="bg-foreground text-background inline-flex items-center rounded px-3 py-1.5 text-sm font-medium transition hover:opacity-90"
          >
            Open docs
          </Link>
          <Link
            href={firstComponentHref}
            className="border-border text-foreground hover:bg-muted inline-flex items-center rounded border px-3 py-1.5 text-sm font-medium transition"
          >
            Browse components
          </Link>
        </div>
      </div>
    </div>
  </section>
);
