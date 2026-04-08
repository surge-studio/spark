'use client';

import {
  componentCatalog,
  componentCategories,
  docsNavigation,
} from '@spark/content/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const formatCategoryLabel = (category: string) =>
  category
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-xs space-y-8">
      <div className="space-y-3">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
          Docs
        </p>
        <nav className="space-y-1">
          {docsNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-muted-foreground hover:bg-muted hover:text-foreground block rounded-lg px-3 py-2 text-sm transition',
                pathname === item.href && 'bg-muted text-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {componentCategories.map((category) => (
        <div key={category} className="space-y-3">
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.22em] uppercase">
            {formatCategoryLabel(category)}
          </p>
          <nav className="space-y-1">
            {componentCatalog
              .filter((component) => component.categories.includes(category))
              .map((component) => {
                const href = `/components/${component.slug}`;

                return (
                  <Link
                    key={component.slug}
                    href={href}
                    className={cn(
                      'text-muted-foreground hover:bg-muted hover:text-foreground block rounded-lg px-3 py-2 text-sm transition',
                      pathname === href && 'bg-muted text-foreground'
                    )}
                  >
                    {component.title}
                  </Link>
                );
              })}
          </nav>
        </div>
      ))}
    </aside>
  );
}
