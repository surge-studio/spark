import { Switch } from './Switch';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;

export const Default: Story = {};
