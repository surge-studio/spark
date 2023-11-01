import { Inter as loadInter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: 'Spark // Design System',
  description: 'Design System by Surge Studio.',
};

const inter = loadInter({ subsets: ['latin'] });

const Layout: FC<{
  readonly children: ReactNode;
}> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default Layout;
