'use client';

import { Zap } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '@/components/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/NavigationMenu';
import type { ComponentPropsWithoutRef, ElementRef, FC } from 'react';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50',
            'focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-gray-900 dark:focus:text-gray-50',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = 'ListItem';

export const NavigationMenuDemo: FC = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  href="#"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary-600 dark:bg-primary-500 text-white p-6 no-underline outline-none focus:shadow-md"
                >
                  <Zap className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">Surge</div>
                  <p className="text-sm leading-tight">Design System</p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="#" title="Introduction">
              Re-usable components built using Radix UI and Tailwind CSS.
            </ListItem>
            <ListItem href="#" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem href="#" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
