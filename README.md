# Spark

Surge Studio Design System.

## Usage

Install the package.

```bash
pnpm add @surge-studio/spark
```

Setup `tailwind.config.ts` using `presets` and `content`.

Use `extend` to update the colour scheme or any other properties.

```js
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { tailwindConfig } from '@surge-studio/spark';

const config: Config = {
  presets: [tailwindConfig],
  content: tailwindConfig.content,
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        gray: colors.zinc,
      },
    },
  },
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

_App directory_

```js
// app/layout.jsx

import { ThemeProvider } from '@surge-studio/spark';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

> As per `next-themes` if you do not add [suppressHydrationWarning](https://reactjs.org/docs/dom-elements.html#suppresshydrationwarning:~:text=It%20only%20works%20one%20level%20deep) to your `<html>` you will get warnings because next-themes updates that element. This property only applies one level deep, so it won't block hydration warnings on other elements.

_Pages directory_

```js
// pages/_app.tsx

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { ThemeProvider } from '@surge-studio/spark';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
);

export default App;
```

Ready to go!

```js
import { Button } from '@surge-studio/spark';
```

## Development

Install packages with `pnpm install`

Run Storybook with `pnpm dev:storybook` and navigate to `localhost:6006`

Run Next.js landing page with `pnpm dev:next` and navigate to `localhost:3000`

Run concurrently with `pnpm dev`

## Release workflow

Releases are created manually at this stage in the project.

- Prepare build with `pnpm package`

- Test locally with `pnpm pack --pack-destination ../ `

- Include in a test project with `"@surge-studio/spark": "file:../surge-studio-spark-0.3.0-rc1.tgz"`

- Publish with `npm publish`
