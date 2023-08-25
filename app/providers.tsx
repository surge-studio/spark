'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import { FC, ReactNode } from 'react';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
