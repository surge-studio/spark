'use client';

import { Calendar, MoreHorizontal, Tags, Trash, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/Command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import { Badge } from '@/components/Badge';
import type { FC } from 'react';

const labels = [
  'feature',
  'bug',
  'enhancement',
  'documentation',
  'design',
  'question',
  'maintenance',
];

export const CommandDropdownMenu: FC = () => {
  const [label, setLabel] = useState('feature');
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border border-gray-dark dark:border-gray-800 px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <Badge className="mr-2">{label}</Badge>
        <span>Create a new project</span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="tertiary" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Assign to...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="mr-2 h-4 w-4" />
              Set due date...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Tags className="mr-2 h-4 w-4" />
                Apply label
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput placeholder="Filter label..." autoFocus />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((item) => (
                        <CommandItem
                          key={item}
                          onSelect={(value) => {
                            setLabel(value);
                            setOpen(false);
                          }}
                        >
                          {item}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-error">
              <Trash className="mr-2 h-4 w-4" />
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
