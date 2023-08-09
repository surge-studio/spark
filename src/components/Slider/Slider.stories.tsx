import { Slider } from './Slider';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Slider>;

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

export const Default: Story = {};
