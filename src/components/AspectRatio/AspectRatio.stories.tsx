import Image from 'next/image';
import { AspectRatio } from './AspectRatio';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof AspectRatio>;

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  args: {
    children: 'AspectRatio',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-gray-900" />
    </div>
  ),
};
