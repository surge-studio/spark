import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  description:
    'Spark is a custom shadcn/ui component registry for building web applications.',
  metadataBase: new URL('https://spark.surge.studio'),
  title: 'Spark',
};

const Layout: FC<{
  readonly children: ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className="font-sans">{children}</body>
  </html>
);

export default Layout;
