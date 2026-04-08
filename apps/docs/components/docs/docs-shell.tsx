import type { ReactNode } from 'react';

import { DocsSidebar } from './docs-sidebar';

export function DocsShell({ children }: { readonly children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-10 px-4 py-12 sm:px-8 xl:flex-row xl:gap-20">
      <DocsSidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
