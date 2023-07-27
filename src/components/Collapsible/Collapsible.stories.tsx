import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './Collapsible';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Collapsible>;

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  args: {
    children: 'Collapsible',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>Yes.</CollapsibleContent>
    </Collapsible>
  ),
};
