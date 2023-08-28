'use client';

import { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import type { FC } from 'react';
import { Card } from '@/components/Card';

export const CalendarDemo: FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </Card>
  );
};
