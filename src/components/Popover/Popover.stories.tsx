import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Popover>;

const meta: Meta<typeof Popover> = {
  component: Popover,
  args: {
    children: 'Popover',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Content</PopoverContent>
    </Popover>
  ),
};
