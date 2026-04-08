'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  CheckIcon,
  ChevronDownIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type ThemeOption = 'dark' | 'light' | 'system';

const themeOptions: readonly {
  readonly icon: typeof SunIcon;
  readonly label: string;
  readonly value: ThemeOption;
}[] = [
  {
    label: 'Light',
    value: 'light',
    icon: SunIcon,
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: MoonIcon,
  },
  {
    label: 'System',
    value: 'system',
    icon: MonitorIcon,
  },
];

const getTriggerIcon = (theme: ThemeOption | undefined) => {
  switch (theme) {
    case 'light': {
      return SunIcon;
    }
    case 'dark': {
      return MoonIcon;
    }
    default: {
      return MonitorIcon;
    }
  }
};

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let activeTheme: ThemeOption | undefined = 'system';

  if (mounted) {
    activeTheme = theme as ThemeOption | undefined;
  }

  const TriggerIcon = getTriggerIcon(activeTheme);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground inline-flex h-9 items-center gap-2 rounded border px-2.5 text-sm transition"
          aria-label="Change color theme"
        >
          <TriggerIcon className="h-4 w-4" />
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="border-border bg-popover text-popover-foreground z-60 min-w-40 rounded-[10px] border p-1.5 shadow-lg"
        >
          {themeOptions.map((option) => {
            const Icon = option.icon;
            const isActive = activeTheme === option.value;
            let itemClassName =
              'text-muted-foreground hover:bg-muted hover:text-foreground';
            let trailingIcon = undefined;

            if (isActive) {
              itemClassName = 'bg-muted text-foreground';
              trailingIcon = <CheckIcon className="h-4 w-4" />;
            }

            return (
              <DropdownMenu.Item
                key={option.value}
                onSelect={() => setTheme(option.value)}
                className={cn(
                  'flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-sm transition outline-none',
                  itemClassName
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {option.label}
                </span>
                {trailingIcon}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
