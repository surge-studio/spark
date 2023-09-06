import { SurgeLogo } from './SurgeLogo';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof SurgeLogo>;

const meta: Meta<typeof SurgeLogo> = {
  component: SurgeLogo,
};

export default meta;

export const Default: Story = {};
