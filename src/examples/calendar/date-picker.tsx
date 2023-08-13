'use client';

import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils.js';
import { Button } from '@/components/Button';
import { Calendar } from '@/components/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import type { FC } from 'react';

export const CalendarDatePicker: FC = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-gray-500'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? 'Date' : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
