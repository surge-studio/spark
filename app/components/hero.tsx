import type { FC } from 'react';

import { SurgeLogo } from '@/registry/default/surge-logo/surge-logo';

export const Hero: FC = () => (
  <section className="flex flex-col items-center justify-center px-4 py-24 text-center sm:px-8">
    <div className="max-w-lg space-y-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <SurgeLogo variant="symbol" />
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Spark
        </h1>
      </div>
      <p className="text-balance text-muted-foreground">
        Spark is a custom shadcn/ui component registry for building web
        applications.
      </p>
    </div>
  </section>
);
