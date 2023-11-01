'use client';

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import type { ComponentProps, FC } from 'react';

const ThemeProvider: FC<ComponentProps<typeof NextThemeProvider>> = ({
  children,
  ...props
}) => (
  <NextThemeProvider attribute="class" disableTransitionOnChange {...props}>
    {children}
  </NextThemeProvider>
);

export { ThemeProvider, useTheme };
