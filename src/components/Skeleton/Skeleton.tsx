import { cn } from '@/lib/utils';
import type { FC, HTMLAttributes } from 'react';

const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      'animate-pulse rounded bg-gray-100 dark:bg-gray-900',
      className
    )}
    {...props}
  />
);

export { Skeleton };
