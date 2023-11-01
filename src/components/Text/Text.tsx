import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

const textVariants = cva('', {
  variants: {
    size: {
      xxl: 'text-2xl tracking-[-0.022em]',
      xl: 'text-xl tracking-[-0.021em]',
      lg: 'text-lg tracking-[-0.019em]',
      md: 'text-base tracking-[-0.011em]',
      sm: 'text-sm tracking-[-0.006em]',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type TextProps = Omit<HTMLAttributes<HTMLParagraphElement>, 'size'> &
  VariantProps<typeof textVariants> & {
    readonly asChild?: boolean;
  };

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, size, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';

    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ size, className }))}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
