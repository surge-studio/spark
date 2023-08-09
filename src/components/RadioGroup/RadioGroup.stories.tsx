import { Label } from '../Label';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof RadioGroup>;

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  args: {
    children: 'RadioGroup',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option one</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option two</Label>
      </div>
    </RadioGroup>
  ),
};
