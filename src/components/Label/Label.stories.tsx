import { Label } from './Label';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Label>;

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  args: {
    children: 'Label',
  },
};

export default meta;

export const Default: Story = {};
