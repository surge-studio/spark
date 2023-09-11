import type { FC, ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';

import '@/styles/tailwind.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spark',
  description: 'Design System by Surge Studio.',
};

const inter = Inter({ subsets: ['latin'] });

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <html suppressHydrationWarning>
    <body className={inter.className}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default Layout;
