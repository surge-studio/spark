import { Avatar } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    children: 'Avatar',
  },
};

export default meta;

export const Default: Story = {
  render: () => <Avatar src="https://github.com/surge-studio.png" label="S" />,
};
