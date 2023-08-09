import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

export const Default: Story = {};
