import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
  component: Loader,
};

export default meta;

export const Default: Story = {};
