import { SurgeLogo } from '@spark/registry/surge-logo';
import Link from 'next/link';
import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className="px-4 py-14 sm:px-6">
    <div className="mx-auto flex w-full max-w-[1480px] items-center justify-center gap-4">
      <Link
        href="https://surge.studio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground transition hover:opacity-80"
      >
        <SurgeLogo variant="symbol" />
      </Link>
    </div>
  </footer>
);
