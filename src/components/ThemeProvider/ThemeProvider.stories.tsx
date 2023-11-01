/* eslint-disable storybook/no-title-property-in-meta */

import { Showcase } from '@/showcase';
import { ThemeProvider } from './ThemeProvider';
import type { Meta, StoryObj } from '@storybook/react';

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
