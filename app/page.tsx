import type { FC } from 'react';
import { SurgeLogo } from '@/registry/default/surge-logo/surge-logo';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

/* ------------------------------------------------------------------ */
/*  Inline CLI snippet component                                         */
/* ------------------------------------------------------------------ */

const Snippet: FC<{ cmd: string }> = ({ cmd }) => (
  <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2.5 font-mono text-sm">
    <span className="select-none text-muted-foreground">$</span>
    <span className="text-foreground/80">{cmd}</span>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                                 */
/* ------------------------------------------------------------------ */

const Home: FC = () => (
  <div className="flex min-h-screen flex-col">
    <Hero />

    <main className="flex flex-col gap-24 pb-24">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-48 items-center justify-center bg-muted">
              <SurgeLogo variant="symbol" className="w-12 text-foreground" />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                symbol
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-48 items-center justify-center bg-muted">
              <SurgeLogo variant="wordmark" className="text-foreground" />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                wordmark
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-48 items-center justify-center bg-muted">
              <SurgeLogo className="text-foreground" />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                default
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Snippet cmd="npx shadcn@latest add https://spark.surge.studio/r/surge-logo.json" />
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Home;
