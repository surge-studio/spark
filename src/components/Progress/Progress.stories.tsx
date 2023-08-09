import { Progress } from './Progress';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Progress>;

const meta: Meta<typeof Progress> = {
  component: Progress,
  args: {
    value: 33,
  },
};

export default meta;

export const Default: Story = {};
