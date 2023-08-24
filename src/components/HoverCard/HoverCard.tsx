'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { forwardRef } from 'react';
import { cn } from '../utils';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef<
  ElementRef<typeof HoverCardPrimitive.Content>,
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded  p-4 shadow-md outline-none animate-in zoom-in-90',
      'border border-gray-200 dark:border-gray-800',
      'text-gray-900 bg-white dark:text-gray-400 dark:bg-gray-900',
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
