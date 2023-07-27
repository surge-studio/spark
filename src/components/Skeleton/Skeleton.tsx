import { cn } from '@/lib/utils';
import type { FC, HTMLAttributes } from 'react';

const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('animate-pulse rounded-md bg-muted', className)}
    {...props}
  />
);

export { Skeleton };
