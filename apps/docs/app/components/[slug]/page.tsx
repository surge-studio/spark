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
    title: component.title,
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
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">
          {component.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-7">
          {component.description}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          Installation
        </h2>
        <Snippet cmd={component.installCommand} />
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          Preview
        </h2>
        <Preview />
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          Props
        </h2>
        <div className="border-border overflow-hidden rounded-2xl border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="text-foreground px-4 py-3 font-medium">Prop</th>
                <th className="text-foreground px-4 py-3 font-medium">Type</th>
                <th className="text-foreground px-4 py-3 font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {component.props.map((prop) => (
                <tr key={prop.name} className="border-border border-t">
                  <td className="text-foreground px-4 py-3 font-mono">
                    {prop.name}
                  </td>
                  <td className="text-muted-foreground px-4 py-3 font-mono">
                    {prop.type}
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
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
