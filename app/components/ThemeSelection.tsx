'use client';

import { SunIcon, MoonIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import { Skeleton } from '@/components/Skeleton';
import type { FC } from 'react';

export const ThemeSelection: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="w-8 h-8" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="tertiary" className="w-8 px-0">
          <SunIcon
            size={16}
            strokeWidth={1}
            absoluteStrokeWidth
            className="scale-100 dark:scale-0"
          />
          <MoonIcon
            size={16}
            strokeWidth={1}
            absoluteStrokeWidth
            className="absolute scale-0 dark:scale-100"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
