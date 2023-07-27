import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Heading>;

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
};

export default meta;

export const Default: Story = {};
