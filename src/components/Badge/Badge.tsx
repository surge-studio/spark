import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { FC, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  cn(
    'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
    'focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-800 focus:ring-2 focus:ring-offset-2'
  ),
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary/80 border-transparent text-white',
        secondary:
          'text-gray-900 dark:text-gray-50 bg-gray-100 hover:bg-gray-100/80 dark:bg-gray-900 dark:hover:bg-gray-900/80 border-transparent',
        tertiary:
          'border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200',
        destructive:
          'bg-error hover:bg-error/80 border-transparent text-gray-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const Badge: FC<BadgeProps> = ({ className, variant, ...props }) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge, badgeVariants };
