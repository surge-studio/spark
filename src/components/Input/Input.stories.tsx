import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Input',
  },
};

export default meta;

export const Default: Story = {};
