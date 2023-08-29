import { forwardRef } from 'react';
import { cn } from '../utils';
import type { TextareaHTMLAttributes } from 'react';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex transition h-20 w-full rounded bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50',
        'border border-gray-200 dark:border-gray-800',
        'focus-visible:outline-none focus-visible:ring-[3px] focus:ring-primary-100 focus:border-primary-600 dark:focus:ring-primary-900 dark:focus:border-primary-500',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };
