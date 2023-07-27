import { Textarea } from './Textarea';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Textarea>;

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Textarea',
  },
};

export default meta;

export const Default: Story = {};
