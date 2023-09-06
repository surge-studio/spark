import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../utils';
import { VariantProps, cva } from 'class-variance-authority';

const headingVariants = cva('font-bold', {
  variants: {
    size: {
      xxl: 'text-5xl sm:text-7xl tracking-[-0.022em]',
      xl: 'text-4xl sm:text-6xl tracking-[-0.022em]',
      lg: 'text-3xl sm:text-5xl tracking-[-0.022em]',
      md: 'text-2xl sm:text-4xl tracking-[-0.022em]',
      sm: 'text-xl sm:text-3xl tracking-[-0.021em] sm:tracking-[-0.022em]',
      xs: 'text-lg sm:text-2xl tracking-[-0.019em] sm:tracking-[-0.022em]',
      xxs: 'text-lg sm:text-xl tracking-[-0.011em] sm:tracking-[-0.021em]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSizes = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl' | 'xxs';

const headingSizeTag: Record<HeadingSizes, HeadingTags> = {
  xxl: 'h1',
  xl: 'h1',
  lg: 'h2',
  md: 'h3',
  sm: 'h4',
  xs: 'h5',
  xxs: 'h6',
};

type HeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'size'> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingTags;
  };

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, size, className, ...props }, ref) => {
    const Element = as ?? headingSizeTag[size ?? 'md'];

    return (
      <Element
        ref={ref}
        className={cn(headingVariants({ size, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
