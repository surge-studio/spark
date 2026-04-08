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
    <header className="relative z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
        >
          <SurgeLogo variant="symbol" className="w-5" />
          <span>Spark</span>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  className="transition hover:text-foreground"
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
