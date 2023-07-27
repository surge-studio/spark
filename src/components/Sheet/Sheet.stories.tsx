import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Sheet>;

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  args: {
    children: 'Sheet',
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
