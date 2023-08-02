import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50',
        'border border-gray-200 dark:border-gray-800',
        'focus-visible:outline-none ring-offset-white dark:ring-offset-gray-950 focus:ring-gray-400 dark:focus:ring-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };
