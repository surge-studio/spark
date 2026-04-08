import { componentCatalog } from '@spark/content/components';
import Link from 'next/link';

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-foreground text-4xl font-semibold tracking-tight">
        Components
      </h1>

      <div className="grid gap-4">
        {componentCatalog.map((component) => (
          <Link
            key={component.slug}
            href={`/components/${component.slug}`}
            className="border-border bg-card hover:border-foreground/20 rounded-[10px] border p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h2 className="text-foreground text-xl font-semibold tracking-tight">
              {component.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
