import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center rounded text-sm font-medium transition-colors',
    'disabled:opacity-30 disabled:pointer-events-none disabled:saturate-0',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 dark:focus-visible:ring-primary-900 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-gray-950'
  ),
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary:
          'text-gray-900 dark:text-gray-50 bg-gray-100 hover:bg-gray-100/80 dark:bg-gray-800 dark:hover:bg-gray-800/80',
        tertiary:
          'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50',
        destructive: 'bg-error text-white hover:bg-error/90',
        link: 'underline-offset-4 underline text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    readonly asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
