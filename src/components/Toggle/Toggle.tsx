'use client';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../utils';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

const toggleVariants = cva(
  cn(
    'inline-flex items-center justify-center rounded text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
    'data-[state=on]:bg-gray-100 dark:data-[state=on]:bg-gray-800 data-[state=on]:text-gray-900 dark:data-[state=on]:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-600 dark:hover:text-gray-400',
    'focus-visible:outline-none ring-offset-white dark:ring-offset-gray-950 focus-visible:ring-primary-100 dark:focus-visible:ring-primary-900 focus-visible:ring-2 focus-visible:ring-offset-2'
  ),
  {
    variants: {
      variant: {
        primary: 'bg-transparent',
        secondary:
          'bg-transparent border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50',
      },
      size: {
        sm: 'h-9 px-2.5',
        md: 'h-10 px-3',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
