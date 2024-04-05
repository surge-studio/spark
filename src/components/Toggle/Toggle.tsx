'use client';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../utils';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

const toggleVariants = cva(
  cn(
    'inline-flex gap-2 items-center justify-center rounded text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
    'text-gray-600 dark:text-gray-400 data-[state=on]:text-gray-900 dark:data-[state=on]:text-gray-50',
    'data-[state=on]:bg-gray-100 dark:data-[state=on]:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50',
    'border border-transparent',
    'focus-visible:outline-none ring-offset-white dark:ring-offset-gray-950 focus-visible:ring-primary-300 dark:focus-visible:ring-primary-800 focus-visible:ring-2 focus-visible:ring-offset-2'
  ),
  {
    variants: {
      variant: {
        primary:
          'bg-gray-900/5 dark:bg-gray-100/10 hover:text-gray-900 dark:hover:text-white data-[state=on]:bg-primary-600 dark:data-[state=on]:bg-primary-700 data-[state=on]:text-gray-50 dark:data-[state=on]:text-gray-50',
        secondary: 'bg-transparent border-gray-200 dark:border-gray-800',
        tertiary: 'bg-transparent',
      },
      size: {
        sm: 'h-8 px-2.5',
        md: 'h-10 px-3',
        lg: 'h-12 px-5',
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
