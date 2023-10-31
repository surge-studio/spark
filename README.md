# Spark

Surge Studio Design System.

## Installation

Install the package.

```
pnpm add @surge-studio/spark
```

Setup Tailwind config using `presets`. Define your `content`.

```
import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@surge-studio/spark';

const config: Config = {
  presets: [tailwindConfig],
  content: tailwindConfig.content,
};

export default config;
```

Apply global styles.

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-white text-gray-900;
  }

  .dark {
    @apply bg-gray-950 text-white;
  }
}
```

Add the ThemeProvider and Inter font.

```
import { ThemeProvider } from '@surge-studio/spark';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
```

Ready to go!

```
import { Button } from '@surge-studio/spark';
```
