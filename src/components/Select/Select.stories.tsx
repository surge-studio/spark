import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  component: Select,
  args: {
    children: 'Select',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="one">One</SelectItem>
        <SelectItem value="two">Two</SelectItem>
        <SelectItem value="three">Three</SelectItem>
      </SelectContent>
    </Select>
  ),
};
