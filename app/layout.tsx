import type { FC, ReactNode } from 'react';
import { Providers } from './providers';

import '@/styles/tailwind.css';

export const metadata = {
  title: 'Spark',
  description: 'Surge Studio Design System.',
};

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <html suppressHydrationWarning>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default Layout;
