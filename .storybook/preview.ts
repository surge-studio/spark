import { withThemeByClassName } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

import '@/styles/tailwind.css';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Theme', 'Components'],
      },
    },
  },
};

export default preview;
