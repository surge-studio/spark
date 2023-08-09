import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger>TooltipTrigger</TooltipTrigger>
        <TooltipContent>TooltipContent</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
