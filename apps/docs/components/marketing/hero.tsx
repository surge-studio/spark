import { heroContent } from '@spark/content/docs';
import Link from 'next/link';
import type { FC } from 'react';

export const Hero: FC = () => (
  <section className="px-4 py-32 sm:px-8">
    <div className="mx-auto flex w-full max-w-[1480px] justify-center">
      <div className="max-w-2xl space-y-8 text-center">
        <div className="space-y-3">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {heroContent.title}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            Open docs
          </Link>
          <Link
            href="/components"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Browse components
          </Link>
        </div>
      </div>
    </div>
  </section>
);
