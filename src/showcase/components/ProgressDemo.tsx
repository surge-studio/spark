'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/Progress';
import type { FC } from 'react';

export const ProgressDemo: FC = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.floor(Math.random() * 100) + 1;
      setProgress(random);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return <Progress value={progress} className="w-full" />;
};
