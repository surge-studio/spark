import { Skeleton } from '@/components/Skeleton';
import type { FC } from 'react';

export const SkeletonDemo: FC = () => (
  <div className="flex items-center space-x-4">
    <Skeleton className="w-12 h-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[160px]" />
    </div>
  </div>
);
