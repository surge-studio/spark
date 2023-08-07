import Link from 'next/link';
import { CardDemo } from '@/examples/card/demo';
import { SliderDemo } from '@/examples/slider/demo';
import { cn } from '@/lib/utils';
import { CheckboxDemo } from '@/examples/checkbox/demo';
import { HoverCardDemo } from '@/examples/hoverCard/demo';
import { TabsDemo } from '@/examples/tabs/demo';
import { MenubarDemo } from '@/examples/menubar/demo';
import { AvatarDemo } from '@/examples/avatar/demo';
import { ButtonDemo } from '@/examples/button/demo';
import { ButtonSecondary } from '@/examples/button/secondary';
import { ButtonDestructive } from '@/examples/button/destructive';
import { ButtonLink } from '@/examples/button/link';
import { ButtonWithIcon } from '@/examples/button/with-icon';
import { ButtonLoading } from '@/examples/button/loading';
import { CalendarDatePicker } from '@/examples/calendar/date-picker';
import { AccordionDemo } from '@/examples/accordion/demo';
import { NavigationMenuDemo } from '@/examples/navigationMenu/demo';
import { SwitchDemo } from '@/examples/switch/demo';
import { SelectDemo } from '@/examples/select/demo';
import { SeparatorDemo } from '@/examples/separator/demo';
import { AspectRatioDemo } from '@/examples/aspectRatio/demo';
import { PopoverDemo } from '@/examples/popover/demo';
import { TooltipDemo } from '@/examples/tooltip/demo';
import { SheetDemo } from '@/examples/sheet/demo';
import { ProgressDemo } from '@/examples/progress/demo';
import { CommandDemo } from '@/examples/command/demo';
import { RadioGroupDemo } from '@/examples/radioGroup/demo';
import { ContextMenuDemo } from '@/examples/contextMenu/demo';
import { DropdownMenuDemo } from '@/examples/dropdown-menu/demo';
import { AlertDialogDemo } from '@/examples/alertDialog/demo';
import { DialogDemo } from '@/examples/dialog/demo';
import { BadgeDemo } from '@/examples/badge/demo';
import { BadgeSecondary } from '@/examples/badge/secondary';
import { BadgeDestructive } from '@/examples/badge/destructive';
import { SkeletonDemo } from '@/examples/skeleton/demo';
import { CollapsibleDemo } from '@/examples/collapsible/demo';
import { ToggleDemo } from '@/examples/toggle/demo';
import { ToggleDisabled } from '@/examples/toggle/disabled';
import { ToggleWithText } from '@/examples/toggle/with-text';
import { ScrollAreaDemo } from '@/examples/scrollArea/demo';
import { ToggleSecondary } from '@/examples/toggle/secondary';
import { BadgeTertiary } from '@/examples/badge/tertiary';
import { ButtonTertiary } from '@/examples/button/tertiary';
import { CommandDropdownMenu } from '@/examples/command/dropdown-menu';
import { TypographyDemo } from '@/examples/typography/demo';
import { ThemeProvider } from './ThemeProvider';
import type { HTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ThemeProvider>;

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theme/ThemeProvider',
  component: ThemeProvider,
  tags: [],
  parameters: {
    docs: {
      toc: {
        disable: true,
      },
    },
  },
};

export default meta;

const ComponentWrapper = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex items-center justify-between space-x-4 rounded-xl p-4',
      className
    )}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-3">
        <div className="grid gap-4">
          <ComponentWrapper>
            <CardDemo className="w-full" />
          </ComponentWrapper>
          <ComponentWrapper>
            <SliderDemo className="w-full" />
          </ComponentWrapper>
          <ComponentWrapper className="spa flex-col items-start space-x-0 space-y-2">
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
          </ComponentWrapper>
          <ComponentWrapper>
            <CheckboxDemo />
            <HoverCardDemo />
          </ComponentWrapper>
          <ComponentWrapper className="[&>div]:w-full">
            <TabsDemo />
          </ComponentWrapper>
        </div>
        <div className="grid gap-4">
          <ComponentWrapper>
            <MenubarDemo />
            <AvatarDemo />
          </ComponentWrapper>
          <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
            <div className="flex space-x-2">
              <ButtonDemo />
              <ButtonSecondary />
              <ButtonTertiary />
            </div>
            <div className="flex space-x-2">
              <ButtonDestructive />
              <ButtonLink />
            </div>
            <div className="flex space-x-2">
              <ButtonWithIcon />
              <ButtonLoading />
            </div>
          </ComponentWrapper>
          <ComponentWrapper>
            <CalendarDatePicker />
          </ComponentWrapper>
          <ComponentWrapper>
            <AccordionDemo />
          </ComponentWrapper>
          <ComponentWrapper className="[&_ul>li:last-child]:hidden">
            <NavigationMenuDemo />
          </ComponentWrapper>
          <ComponentWrapper className="justify-between">
            <SwitchDemo />
            <SelectDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <SeparatorDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <AspectRatioDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <PopoverDemo />
          </ComponentWrapper>
        </div>
        <div className="grid gap-4">
          <ComponentWrapper>
            <TooltipDemo />
            <SheetDemo />
            <ProgressDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <CommandDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <CommandDropdownMenu />
          </ComponentWrapper>
          <ComponentWrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
            <RadioGroupDemo />
            <ContextMenuDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <div className="flex space-x-2">
              <DropdownMenuDemo />
              <AlertDialogDemo />
              <DialogDemo />
            </div>
          </ComponentWrapper>
          <ComponentWrapper>
            <div className="flex space-x-2">
              <BadgeDemo />
              <BadgeSecondary />
              <BadgeDestructive />
              <BadgeTertiary />
            </div>
          </ComponentWrapper>
          <ComponentWrapper>
            <SkeletonDemo />
          </ComponentWrapper>
          <ComponentWrapper className="[&>div]:w-full">
            <CollapsibleDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <div className="flex space-x-2">
              <ToggleDemo />
              <ToggleSecondary />
              <ToggleDisabled />
              <ToggleWithText />
            </div>
          </ComponentWrapper>
          <ComponentWrapper>
            <ScrollAreaDemo />
          </ComponentWrapper>
          <ComponentWrapper>
            <TypographyDemo />
          </ComponentWrapper>
        </div>
      </div>
    </ThemeProvider>
  ),
};
