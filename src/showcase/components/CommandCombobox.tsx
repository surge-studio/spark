/* eslint-disable jsx-a11y/prefer-tag-over-role */
'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/components/utils';
import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/Command';
import type { FC } from 'react';

const colors = [
  {
    value: 'emerald',
    label: 'Emerald',
    background: 'bg-emerald-600',
  },
  {
    value: 'blue',
    label: 'Blue',
    background: 'bg-blue-600',
  },
  {
    value: 'purple',
    label: 'Purple',
    background: 'bg-purple-600',
  },
  {
    value: 'pink',
    label: 'Pink',
    background: 'bg-pink-600',
  },
];

export const CommandCombobox: FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('blue');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <div className="flex items-center gap-2">
            {value ? (
              <div
                className={cn(
                  'h-4 w-4 rounded-full flex-shrink-0',
                  colors.find((framework) => framework.value === value)
                    ?.background
                )}
              />
            ) : null}
            {value
              ? colors.find((framework) => framework.value === value)?.label
              : 'Select color...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search color..." />
          <CommandEmpty>No color found.</CommandEmpty>
          <CommandGroup>
            {colors.map((color) => (
              <CommandItem
                key={color.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <div
                  className={cn(
                    'h-4 w-4 rounded-full flex-shrink-0',
                    color.background,
                    value === color.value &&
                      'ring-2 ring-offset-2 ring-offset-gray-900 ring-white'
                  )}
                />
                {color.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
