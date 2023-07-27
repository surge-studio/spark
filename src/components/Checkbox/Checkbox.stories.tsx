import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;

export const Default: Story = {};
