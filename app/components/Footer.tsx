import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => (
  <footer className="mt-auto flex items-center justify-end px-4 py-6 sm:px-8">
    <Link
      href="https://github.com/surge-studio/spark"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:text-foreground"
    >
      GitHub
    </Link>
  </footer>
);
