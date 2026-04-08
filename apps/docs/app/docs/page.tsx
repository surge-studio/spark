import { componentCatalog } from '@spark/content/components';
import { docsOverviewContent } from '@spark/content/docs';
import { Snippet } from '@spark/ui/snippet';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-muted-foreground text-sm font-semibold tracking-[0.22em] uppercase">
          {docsOverviewContent.overviewLabel}
        </p>
        <div className="space-y-3">
          <h1 className="text-foreground text-4xl font-semibold tracking-tight">
            {docsOverviewContent.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-7">
            {docsOverviewContent.description}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          {docsOverviewContent.installTitle}
        </h2>
        <p className="text-muted-foreground text-sm leading-6">
          {docsOverviewContent.installDescription}
        </p>
        <div className="space-y-3">
          <Snippet cmd="pnpm dlx shadcn@latest init" />
          <Snippet cmd={componentCatalog[0]!.installCommand} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-foreground text-xl font-semibold tracking-tight">
          Browse components
        </h2>
        <p className="text-muted-foreground text-sm leading-6">
          Each component page includes install instructions, previews, and API
          details.
        </p>
        <Link
          href="/components"
          className="border-border text-foreground hover:bg-muted inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition"
        >
          View components
        </Link>
      </section>
    </div>
  );
}
