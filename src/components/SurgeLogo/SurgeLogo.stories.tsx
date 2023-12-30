/* eslint-disable storybook/no-title-property-in-meta */

import { SurgeLogo } from './SurgeLogo';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof SurgeLogo>;

const meta: Meta<typeof SurgeLogo> = {
  title: 'Brand/SurgeLogo',
  component: SurgeLogo,
};

export default meta;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Symbol: Story = {
  args: {
    variant: 'symbol',
  },
};

export const Wordmark: Story = {
  args: {
    variant: 'wordmark',
  },
};
