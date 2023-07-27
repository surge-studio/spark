import { Text } from './Text';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text',
  },
};

export default meta;

export const Default: Story = {};
