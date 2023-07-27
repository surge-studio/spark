import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    children: 'Avatar',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/surge-studio.png" />
      <AvatarFallback>S</AvatarFallback>
    </Avatar>
  ),
};
