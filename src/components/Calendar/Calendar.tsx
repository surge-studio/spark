'use client';

import { DayPicker } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils';
import { buttonVariants } from '../Button/Button';
import type { ComponentProps, FC } from 'react';

export type CalendarProps = ComponentProps<typeof DayPicker>;

const IconLeft = () => <ChevronLeft className="w-4 h-4" />;

const IconRight = () => <ChevronRight className="w-4 h-4" />;

const Calendar: FC<CalendarProps> = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn('p-3', className)}
    classNames={{
      months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
      month: 'space-y-4',
      caption: 'flex justify-center pt-1 relative items-center',
      caption_label: 'text-sm font-medium',
      nav: 'space-x-1 flex items-center',
      nav_button: cn(
        buttonVariants({ variant: 'secondary' }),
        'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
      ),
      nav_button_previous: 'absolute left-1',
      nav_button_next: 'absolute right-1',
      table: 'w-full border-collapse space-y-1',
      head_row: 'flex',
      head_cell: 'text-gray-500 rounded w-9 font-normal text-[0.8rem]',
      row: 'flex w-full mt-2',
      cell: cn(
        'text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l last:[&:has([aria-selected])]:rounded-r focus-within:relative focus-within:z-20',
        '[&:has([aria-selected])]:bg-gray-100 dark:[&:has([aria-selected])]:bg-gray-800'
      ),
      day: cn(
        buttonVariants({ variant: 'tertiary' }),
        'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
      ),
      day_selected:
        'bg-primary-600 text-white hover:bg-primary-600 hover:text-white focus:bg-primary-600 focus:text-white',
      day_today: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50',
      day_outside: 'text-gray-500 opacity-50',
      day_disabled: 'text-gray-500 opacity-50',
      day_range_middle:
        'aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-gray-900 dark:aria-selected:text-gray-50',
      day_hidden: 'invisible',
      ...classNames,
    }}
    components={{
      IconLeft,
      IconRight,
    }}
    {...props}
  />
);
Calendar.displayName = 'Calendar';

export { Calendar };
