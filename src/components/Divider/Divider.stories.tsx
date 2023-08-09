import { Divider } from './Divider';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Divider>;

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;

export const Default: Story = {};
