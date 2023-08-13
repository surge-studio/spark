import { forwardRef } from 'react';
import { cn } from '../utils.js';
import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full transition rounded bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
        'border border-gray-200 dark:border-gray-700',
        'placeholder:text-gray-500 text-gray-900 dark:text-gray-100',
        'focus-visible:outline-none focus-visible:ring-[3px] focus:ring-primary-100 focus:border-primary-600 dark:focus:ring-primary-900 dark:focus:border-primary-500',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };
