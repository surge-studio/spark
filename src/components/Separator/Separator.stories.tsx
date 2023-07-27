import { Separator } from './Separator';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Separator>;

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
};

export default meta;

export const Default: Story = {};
