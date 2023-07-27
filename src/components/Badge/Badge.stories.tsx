import { Badge } from './Badge';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
};

export default meta;

export const Default: Story = {};
