import { SurgeLogo } from '@spark/registry/surge-logo';
import Link from 'next/link';
import type { HTMLAttributeAnchorTarget } from 'react';

import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const links = [
  {
    href: '/docs',
    label: 'Docs',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: 'https://github.com/surge-studio/spark',
    label: 'GitHub',
  },
] as const;

export function SiteHeader() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 relative z-40 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="text-foreground inline-flex items-center gap-3 text-sm font-semibold tracking-tight"
        >
          <SurgeLogo variant="symbol" className="w-5" />
          <span>Spark</span>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="text-muted-foreground flex items-center gap-4 text-sm">
            {links.map((link) => {
              const externalLinkProps: {
                rel?: string;
                target?: HTMLAttributeAnchorTarget;
              } = {};

              if (link.href.startsWith('http')) {
                externalLinkProps.target = '_blank';
                externalLinkProps.rel = 'noopener noreferrer';
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition"
                  {...externalLinkProps}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
