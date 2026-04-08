import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import { Footer } from '@/components/navigation/footer';
import { SiteHeader } from '@/components/navigation/site-header';
import { ThemeProvider } from '@/components/ui/theme-provider';

export const metadata: Metadata = {
  description:
    'Spark is a custom shadcn/ui component registry for building web apps.',
  metadataBase: new URL('https://spark.surge.studio'),
  title: 'Spark',
};

const Layout: FC<{
  readonly children: ReactNode;
}> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-background font-sans text-foreground">
      <ThemeProvider>
        <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
