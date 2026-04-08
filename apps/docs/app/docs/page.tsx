import {
  componentCatalog,
  firstComponentHref,
} from '@spark/content/components';
import { docsOverviewContent } from '@spark/content/docs';
import { Snippet } from '@spark/ui/snippet';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
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
        <Link
          href={firstComponentHref}
          className="border-border text-foreground hover:bg-muted inline-flex items-center rounded border px-3 py-1.5 text-sm font-medium transition"
        >
          View components
        </Link>
      </section>
    </div>
  );
}
