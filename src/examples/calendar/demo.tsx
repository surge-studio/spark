'use client';

import { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import type { FC } from 'react';

export const CalendarDemo: FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
