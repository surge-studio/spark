import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './Command';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof CommandDialog>;

const meta: Meta<typeof CommandDialog> = {
  title: 'Components/Command',
  component: CommandDialog,
  args: {
    open: true,
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <CommandDialog {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};
