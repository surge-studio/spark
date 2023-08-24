import { cn } from '../utils';
import type { FC, HTMLAttributes } from 'react';

const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      'animate-pulse rounded bg-black/10 dark:bg-white/10',
      className
    )}
    {...props}
  />
);

export { Skeleton };
