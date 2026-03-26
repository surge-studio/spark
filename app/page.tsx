import type { FC } from 'react';

import { SurgeLogo } from '@/registry/default/surge-logo/surge-logo';

import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { LogoPreviewCard } from './components/logo-preview-card';
import { Snippet } from './components/snippet';

/* ------------------------------------------------------------------ */
/*  Page                                                                 */
/* ------------------------------------------------------------------ */

const Home: FC = () => (
  <div className="flex min-h-screen flex-col">
    <Hero />

    <main className="flex flex-col gap-24 pb-24">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <LogoPreviewCard label="symbol">
            <SurgeLogo variant="symbol" className="w-12 text-foreground" />
          </LogoPreviewCard>
          <LogoPreviewCard label="wordmark">
            <SurgeLogo variant="wordmark" className="text-foreground" />
          </LogoPreviewCard>
          <LogoPreviewCard label="default">
            <SurgeLogo className="text-foreground" />
          </LogoPreviewCard>
        </div>
        <div className="mt-6 space-y-3">
          <p className="text-sm text-muted-foreground">Command</p>
          <Snippet cmd="pnpm dlx shadcn@latest add https://spark.surge.studio/r/surge-logo.json" />
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Home;
