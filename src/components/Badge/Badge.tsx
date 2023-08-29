import { cva } from 'class-variance-authority';
import { cn } from '../utils';
import type { FC, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  cn(
    'inline-flex items-center border border-transparent rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
    'focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-800 focus:ring-2 focus:ring-offset-2'
  ),
  {
    variants: {
      variant: {
        primary:
          'text-primary-700 dark:text-primary-500 bg-primary-100 dark:bg-primary-950',
        secondary:
          'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800',
        tertiary:
          'text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800',
        error:
          'text-error-700 dark:text-error-500 bg-error-100 dark:bg-error-950',
        success:
          'text-success-700 dark:text-success-500 bg-success-100 dark:bg-success-950',
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
