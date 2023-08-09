import { Alert, AlertDescription, AlertTitle } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Descrition</AlertDescription>
    </Alert>
  ),
};
