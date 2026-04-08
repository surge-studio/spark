import { componentCatalog } from '@spark/content/components';
import Link from 'next/link';

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-muted-foreground text-sm font-semibold tracking-[0.22em] uppercase">
          Components
        </p>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">
          Registry components
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-7">
          Spark components are documented individually, with a dedicated install
          command, preview surface, and API reference for each item.
        </p>
      </section>

      <div className="grid gap-4">
        {componentCatalog.map((component) => (
          <Link
            key={component.slug}
            href={`/components/${component.slug}`}
            className="border-border bg-card hover:border-foreground/20 rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="space-y-2">
              <h2 className="text-foreground text-xl font-semibold tracking-tight">
                {component.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-6">
                {component.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
