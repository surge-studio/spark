import { cva } from 'class-variance-authority';
import { cn } from '../utils.js';
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
        primary: 'bg-primary border-transparent text-white',
        secondary:
          'text-gray-900 dark:text-gray-50 bg-gray-100 dark:bg-gray-800 border-transparent',
        tertiary:
          'border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200',
        destructive:
          'bg-error-600 dark:bg-error-700 border-transparent text-gray-50',
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
