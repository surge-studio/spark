'use client';

import {
  type ComponentEntry,
  componentCatalog,
  componentCategories,
  docsNavigation,
} from '@spark/content/components';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const formatCategoryLabel = (category: string) =>
  category
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

const getCurrentLabel = (pathname: string) => {
  if (pathname === '/docs') {
    return 'Overview';
  }

  if (pathname === '/components') {
    return 'Components';
  }

  const matchingComponent = componentCatalog.find(
    (component) => pathname === `/components/${component.slug}`
  );

  if (matchingComponent) {
    return matchingComponent.title;
  }

  return 'Navigation';
};

const renderComponentLinks = (
  components: readonly ComponentEntry[],
  pathname: string
) =>
  components.map((component) => {
    const href = `/components/${component.slug}`;

    return (
      <Link
        key={component.slug}
        href={href}
        className={cn(
          'text-muted-foreground hover:bg-muted hover:text-foreground block rounded px-2.5 py-1.5 text-sm transition',
          pathname === href && 'bg-muted text-foreground'
        )}
      >
        {component.title}
      </Link>
    );
  });

export function DocsSidebar() {
  const pathname = usePathname();
  const currentLabel = getCurrentLabel(pathname);

  return (
    <>
      <details className="border-border bg-card group rounded-[10px] border xl:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5">
          <span className="text-foreground text-sm font-medium">
            {currentLabel}
          </span>
          <ChevronDownIcon className="text-muted-foreground h-4 w-4 transition group-open:rotate-180" />
        </summary>
        <div className="border-border space-y-5 border-t px-3 py-3">
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
                    'text-muted-foreground hover:bg-muted hover:text-foreground block rounded px-2.5 py-1.5 text-sm transition',
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
                {renderComponentLinks(
                  componentCatalog.filter((component) =>
                    component.categories.includes(category)
                  ),
                  pathname
                )}
              </nav>
            </div>
          ))}
        </div>
      </details>

      <aside className="hidden w-full max-w-xs space-y-8 xl:block">
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
                  'text-muted-foreground hover:bg-muted hover:text-foreground block rounded px-2.5 py-1.5 text-sm transition',
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
              {renderComponentLinks(
                componentCatalog.filter((component) =>
                  component.categories.includes(category)
                ),
                pathname
              )}
            </nav>
          </div>
        ))}
      </aside>
    </>
  );
}
