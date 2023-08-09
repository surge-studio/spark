import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof HoverCard>;

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  args: {
    children: 'HoverCard',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>Content</HoverCardContent>
    </HoverCard>
  ),
};
