'use client';

import Link from 'next/link';
import { cn } from '@/components/utils';

import { AccordionDemo } from './components/AccordionDemo';
import { AlertDialogDemo } from './components/AlertDialogDemo';
import { AlertDemo } from './components/AlertDemo';
import { AvatarDemo } from './components/AvatarDemo';
import { BadgeDemo } from './components/BadgeDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { CalendarDemo } from './components/CalendarDemo';
import { CardDemo } from './components/CardDemo';
import { CheckboxDemo } from './components/CheckboxDemo';
import { CollapsibleDemo } from './components/CollapsibleDemo';
// import { CommandCombobox } from './components/CommandCombobox';
import { CommandDemo } from './components/CommandDemo';
import { CommandDialogDemo } from './components/CommandDialogDemo';
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
import type { FC, HTMLAttributes } from 'react';

const Wrapper = ({ className, children }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center space-x-4 py-4', className)}>
    {children}
  </div>
);

export const Showcase: FC = () => (
  <div className="grid grid-cols-1 items-start gap-12 xl:grid-cols-3">
    <div className="grid gap-4">
      <Wrapper>
        {/* <CommandCombobox /> */}
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
        <ContextMenuDemo />
      </Wrapper>
      <Wrapper>
        <CheckboxDemo />
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
        <BadgeDemo />
      </Wrapper>
      <Wrapper>
        <InputDemo />
      </Wrapper>
      <Wrapper>
        <RadioGroupDemo />
      </Wrapper>
      <Wrapper>
        <SkeletonDemo />
      </Wrapper>
      <Wrapper>
        <NavigationMenuDemo />
      </Wrapper>
      <Wrapper>
        <SwitchDemo />
      </Wrapper>
      <Wrapper>
        <AlertDemo />
      </Wrapper>
      <Wrapper>
        <DividerDemo />
      </Wrapper>
    </div>
    <div className="grid gap-4">
      <Wrapper>
        <AvatarDemo />
        <ProgressDemo />
      </Wrapper>
      <Wrapper>
        <CommandDemo />
      </Wrapper>
      <Wrapper>
        <SelectDemo />
        <CommandDialogDemo />
      </Wrapper>
      <Wrapper>
        <TooltipDemo />
        <SheetDemo />
        <HoverCardDemo />
      </Wrapper>
      <Wrapper>
        <AlertDialogDemo />
        <DialogDemo />
        <PopoverDemo />
      </Wrapper>
      <Wrapper>
        <DropdownMenuDemo />
        <DropdownMenuCheckboxDemo />
        <DropdownMenuRadioGroupDemo />
      </Wrapper>
      <Wrapper>
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
