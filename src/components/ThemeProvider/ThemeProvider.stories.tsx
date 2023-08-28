/* eslint-disable storybook/no-title-property-in-meta */

import { ThemeProvider } from './ThemeProvider';
import type { Meta, StoryObj } from '@storybook/react';
import { Showcase } from '@/showcase';

type Story = StoryObj<typeof ThemeProvider>;

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
  tags: [],
  parameters: {
    docs: {
      toc: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <Showcase />
    </ThemeProvider>
  ),
};
