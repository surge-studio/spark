import {
  componentCatalog,
  getComponentBySlug,
} from '@spark/content/components';
import { Snippet } from '@spark/ui/snippet';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getComponentPreviewBySlug } from '@/lib/component-preview-registry';

interface ComponentPageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    return {};
  }

  return {
    title: `${component.title} | Spark`,
    description: component.description,
  };
}

export function generateStaticParams() {
  return componentCatalog.map((component) => ({
    slug: component.slug,
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  const { Preview } = getComponentPreviewBySlug(component.slug);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {component.summary}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          {component.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          {component.description}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Installation
        </h2>
        <Snippet cmd={component.installCommand} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Preview
        </h2>
        <Preview />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Props
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {component.props.map((prop) => (
                <tr key={prop.name} className="border-t border-border">
                  <td className="px-4 py-3 font-mono text-foreground">
                    {prop.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    {prop.type}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
