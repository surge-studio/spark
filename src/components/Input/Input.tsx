import { forwardRef } from 'react';
import { cn } from '../utils';
import type { InputHTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  cn(
    'flex h-10 w-full transition rounded bg-gray-50/30 dark:bg-gray-950/30 px-3 py-2 file:border-0 file:text-sm file:bg-transparent file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
    'border border-gray-200 dark:border-gray-700',
    'placeholder:text-gray-500 text-gray-900 dark:text-gray-100',
    'focus-visible:outline-none focus-visible:ring-[3px] focus:ring-primary-100 focus:border-primary-600 dark:focus:ring-primary-900 dark:focus:border-primary-500'
  ),
  {
    variants: {
      size: {
        sm: 'h-8 text-sm px-2',
        md: 'h-10 text-base sm:text-sm',
        lg: 'h-12 text-base sm:text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof inputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, ...props }, ref) => (
    <input
      type={type}
      className={cn(inputVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };
