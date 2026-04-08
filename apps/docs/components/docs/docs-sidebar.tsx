'use client';

import { componentCatalog, docsNavigation } from '@spark/content/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-xs space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Docs
        </p>
        <nav className="space-y-1">
          {docsNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground',
                (pathname === item.href ||
                  (item.href === '/components' &&
                    pathname.startsWith('/components/'))) &&
                  'bg-muted text-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Components
        </p>
        <nav className="space-y-1">
          {componentCatalog.map((component) => {
            const href = `/components/${component.slug}`;

            return (
              <Link
                key={component.slug}
                href={href}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground',
                  pathname === href && 'bg-muted text-foreground'
                )}
              >
                {component.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
