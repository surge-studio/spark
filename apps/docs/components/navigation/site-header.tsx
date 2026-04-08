import { firstComponentHref } from '@spark/content/components';
import { SurgeLogo } from '@spark/registry/surge-logo';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const links = [
  {
    href: '/docs',
    label: 'Docs',
  },
  {
    href: firstComponentHref,
    label: 'Components',
  },
] as const;

const githubHref = 'https://github.com/surge-studio/spark';

function GithubBadge() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 relative z-40 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-foreground inline-flex items-center gap-3 text-sm font-semibold tracking-tight"
          >
            <SurgeLogo variant="symbol" className="w-5" />
            <span>Spark</span>
          </Link>
          <nav className="text-muted-foreground flex items-center gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link
          href="/"
          className="text-foreground inline-flex items-center gap-3 text-sm font-semibold tracking-tight md:hidden"
        >
          <SurgeLogo variant="symbol" className="w-5" />
          <span>Spark</span>
        </Link>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition hover:opacity-85"
            aria-label="GitHub"
          >
            <GithubBadge />
          </Link>
          <ThemeSwitcher />
        </div>
        <details className="group relative md:hidden">
          <summary className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground flex h-9 list-none items-center justify-center rounded border px-2.5 transition">
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <div className="border-border bg-popover absolute top-full right-0 z-[70] mt-3 w-64 rounded-[10px] border p-1.5 shadow-lg">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground block rounded px-2.5 py-1.5 text-sm transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex items-center gap-2 rounded px-2.5 py-1.5 text-sm transition"
              >
                <GithubBadge />
                <span>GitHub</span>
              </Link>
            </nav>
            <div className="border-border mt-1.5 flex items-center justify-between border-t pt-1.5">
              <span className="text-muted-foreground px-2.5 text-sm">
                Theme
              </span>
              <ThemeSwitcher />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
