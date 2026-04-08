import { componentCatalog } from '@spark/content/components';
import { docsOverviewContent } from '@spark/content/docs';
import { Snippet } from '@spark/ui/snippet';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {docsOverviewContent.overviewLabel}
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            {docsOverviewContent.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {docsOverviewContent.description}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          {docsOverviewContent.installTitle}
        </h2>
        <p className="text-sm leading-6 text-muted-foreground">
          {docsOverviewContent.installDescription}
        </p>
        <div className="space-y-3">
          <Snippet cmd="pnpm dlx shadcn@latest init" />
          <Snippet cmd={componentCatalog[0]!.installCommand} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Browse components
        </h2>
        <p className="text-sm leading-6 text-muted-foreground">
          Each component page includes install instructions, previews, and API
          details.
        </p>
        <Link
          href="/components"
          className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
        >
          View components
        </Link>
      </section>
    </div>
  );
}
