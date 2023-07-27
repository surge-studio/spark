import { Toggle } from './Toggle';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  args: {
    children: 'Toggle',
  },
};

export default meta;

export const Default: Story = {};
