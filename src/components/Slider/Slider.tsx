'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { forwardRef } from 'react';
import { cn } from '../utils';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        'relative h-1.5 w-full grow overflow-hidden rounded-full',
        'bg-gray-100 dark:bg-gray-900'
      )}
    >
      <SliderPrimitive.Range className="absolute h-full bg-primary-600 dark:bg-primary-700" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block h-4 w-4 rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50',
        'border-2 border-primary-600 dark:border-white',
        'bg-white',
        'focus-visible:outline-none ring-offset-white dark:ring-offset-gray-950 focus-visible:ring-primary-100 dark:focus-visible:ring-primary-900 focus-visible:ring-2 focus-visible:ring-offset-2'
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
