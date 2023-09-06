import { Container } from './Container';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  component: Container,
  args: {
    children: 'Container',
  },
};

export default meta;

export const Default: Story = {
  render: ({ children, ...args }) => (
    <Container {...args}>
      <div className="text-white bg-gray-500 p-4">
        {children} {args.size}
      </div>
    </Container>
  ),
};
