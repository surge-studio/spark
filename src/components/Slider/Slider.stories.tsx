import { Slider } from './Slider';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Slider>;

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
};

export default meta;

export const Default: Story = {};
