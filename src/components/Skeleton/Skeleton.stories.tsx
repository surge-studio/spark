import { Skeleton } from './Skeleton';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  args: {
    className: 'w-[300px] h-[200px]',
  },
};

export default meta;

export const Default: Story = {};
