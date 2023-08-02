import type { FC, ReactNode } from 'react';

type ThemeProviderProps = {
  readonly children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => children;

export { ThemeProvider };
