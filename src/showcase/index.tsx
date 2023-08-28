'use client';

import { HTMLAttributes } from 'react';
import { cn } from '@/components/utils';
import Link from 'next/link';

import { AccordionDemo } from './components/AccordionDemo';
import { AlertDialogDemo } from './components/AlertDialogDemo';
import { AlertDemo } from './components/AlertDemo';
import { AlertDestructive } from './components/AlertDestructiveDemo';
import { AspectRatioDemo } from './components/AspectRatioDemo';
import { AvatarDemo } from './components/AvatarDemo';
import { BadgeDemo } from './components/BadgeDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { CalendarDemo } from './components/CalendarDemo';
import { CardDemo } from './components/CardDemo';
import { CheckboxDemo } from './components/CheckboxDemo';
import { CollapsibleDemo } from './components/CollapsibleDemo';
import { CommandCombobox } from './components/CommandCombobox';
import { CommandDemo } from './components/CommandDemo';
import { CommandDialogDemo } from './components/CommandDialogDemo';
import { CommandDropdownMenu } from './components/CommandDropdownMenu';
import { ContextMenuDemo } from './components/ContextMenuDemo';
import { DialogDemo } from './components/DialogDemo';
import { DropdownMenuCheckboxDemo } from './components/DropdownMenuCheckboxDemo';
import { DropdownMenuDemo } from './components/DropdownMenuDemo';
import { DropdownMenuRadioGroupDemo } from './components/DropdownMenuRadioGroupDemo';
import { HoverCardDemo } from './components/HoverCardDemo';
import { InputDemo } from './components/InputDemo';
import { MenubarDemo } from './components/MenubarDemo';
import { NavigationMenuDemo } from './components/NavigationMenuDemo';
import { PopoverDemo } from './components/PopoverDemo';
import { ProgressDemo } from './components/ProgressDemo';
import { RadioGroupDemo } from './components/RadioGroupDemo';
import { ScrollAreaDemo } from './components/ScrollAreaDemo';
import { SelectDemo } from './components/SelectDemo';
import { SheetDemo } from './components/SheetDemo';
import { SkeletonDemo } from './components/SkeletonDemo';
import { SliderDemo } from './components/SliderDemo';
import { SwitchDemo } from './components/SwitchDemo';
import { TabsDemo } from './components/TabsDemo';
import { TextareaDemo } from './components/TextareaDemo';
import { TooltipDemo } from './components/TooltipDemo';
import { ProseDemo } from './components/ProseDemo';
import { DividerDemo } from './components/DividerDemo';
import { ToggleDemo } from './components/ToggleDemo';
import { ThemeSelectionDemo } from './components/ThemeSelectionDemo';

const Wrapper = ({ className, children }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex items-center justify-between space-x-4 py-4',
      className
    )}
  >
    {children}
  </div>
);

export const Showcase = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-12 xl:grid-cols-3">
      <div className="grid gap-4">
        <Wrapper>
          <ThemeSelectionDemo />
        </Wrapper>
        <Wrapper>
          <CardDemo className="w-full" />
        </Wrapper>
        <Wrapper>
          <SliderDemo className="w-full" />
        </Wrapper>
        <Wrapper className="spa flex-col items-start space-x-0 space-y-2">
          <p className="text-gray-500 text-sm">Documentation</p>
          <p className="text-sm font-medium leading-none">
            You can customize the theme using{' '}
            <code className="relative rounded bg-gray-100 dark:bg-gray-900 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-gray-900 dark:text-gray-200">
              tailwind.config.ts
            </code>
            .{' '}
            <Link
              href="#"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400 underline underline-offset-4"
            >
              Click here
            </Link>{' '}
            to learn more.
          </p>
        </Wrapper>
        <Wrapper>
          <CheckboxDemo />
          <HoverCardDemo />
        </Wrapper>
        <Wrapper>
          <TabsDemo />
        </Wrapper>
        <Wrapper>
          <TextareaDemo />
        </Wrapper>
        <Wrapper>
          <ScrollAreaDemo />
        </Wrapper>
      </div>
      <div className="grid gap-4">
        <Wrapper>
          <MenubarDemo />
        </Wrapper>
        <Wrapper>
          <ButtonDemo />
        </Wrapper>
        <Wrapper>
          <AccordionDemo />
        </Wrapper>
        <Wrapper>
          <CalendarDemo />
        </Wrapper>
        <Wrapper>
          <InputDemo />
        </Wrapper>
        <Wrapper>
          <SkeletonDemo />
        </Wrapper>
        <Wrapper>
          <NavigationMenuDemo />
        </Wrapper>
        <Wrapper className="justify-between">
          <SwitchDemo />
          <SelectDemo />
        </Wrapper>
        <Wrapper>
          <AspectRatioDemo />
        </Wrapper>
        <Wrapper className="justify-between">
          <DividerDemo />
          <CommandCombobox />
        </Wrapper>
      </div>
      <div className="grid gap-4">
        <Wrapper>
          <TooltipDemo />
          <SheetDemo />
          <ProgressDemo />
          <AvatarDemo />
        </Wrapper>
        <Wrapper>
          <CommandDemo />
        </Wrapper>
        <Wrapper>
          <DropdownMenuCheckboxDemo />
          <DropdownMenuRadioGroupDemo />
          <CommandDialogDemo />
        </Wrapper>
        <Wrapper>
          <CommandDropdownMenu />
        </Wrapper>
        <Wrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
          <RadioGroupDemo />
          <ContextMenuDemo />
        </Wrapper>
        <Wrapper>
          <div className="flex space-x-2">
            <DropdownMenuDemo />
            <AlertDialogDemo />
            <DialogDemo />
            <PopoverDemo />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="flex space-x-2">
            <AlertDemo />
            <AlertDestructive />
          </div>
        </Wrapper>
        <Wrapper>
          <BadgeDemo />
        </Wrapper>
        <Wrapper className="[&>div]:w-full">
          <CollapsibleDemo />
        </Wrapper>
        <Wrapper>
          <ToggleDemo />
        </Wrapper>
        <Wrapper>
          <ProseDemo />
        </Wrapper>
      </div>
    </div>
  );
};
