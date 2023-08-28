import type { FC, ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';

import '@/styles/tailwind.css';

export const metadata = {
  title: 'Spark',
  description: 'Surge Studio Design System.',
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
