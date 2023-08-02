import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes } from 'react';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex h-20 w-full rounded bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50',
        'border border-gray-200 dark:border-gray-800',
        'focus-visible:outline-none ring-offset-white dark:ring-offset-gray-950 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };
