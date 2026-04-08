import { componentCatalog } from '@spark/content/components';
import Link from 'next/link';

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Registry components
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Spark components are documented individually, with a dedicated install
          command, preview surface, and API reference for each item.
        </p>
      </section>

      <div className="grid gap-4">
        {componentCatalog.map((component) => (
          <Link
            key={component.slug}
            href={`/components/${component.slug}`}
            className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {component.title}
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                {component.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
