import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { Inter as loadInter } from 'next/font/google';
import type { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  description:
    'A curated shadcn registry of WebGL shader backgrounds for React and Next.js hero sections.',
  title: 'Spark — WebGL component registry by Surge Studio',
};

const inter = loadInter({ subsets: ['latin'] });

const Layout: FC<{
  readonly children: ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default Layout;
