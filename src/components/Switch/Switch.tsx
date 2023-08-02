'use client';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-800',
      'focus-visible:outline-none focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        'bg-white dark:bg-gray-950'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
