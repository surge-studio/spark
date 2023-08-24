import { forwardRef } from 'react';
import clsx from 'clsx';
import type { HTMLProps } from 'react';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSizes = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl';

type HeadingProps = Omit<HTMLProps<HTMLHeadingElement>, 'size'> & {
  as?: HeadingTags;
  size?: HeadingSizes;
};

const HeadingSizeTag: Record<HeadingSizes, HeadingTags> = {
  xxl: 'h1',
  xl: 'h1',
  lg: 'h2',
  md: 'h3',
  sm: 'h4',
  xs: 'h5',
};

const headingSizeClassName: Record<HeadingSizes, string> = {
  xxl: 'text-5xl sm:text-7xl tracking-[-0.022em]',
  xl: 'text-4xl sm:text-6xl tracking-[-0.022em]',
  lg: 'text-3xl sm:text-5xl tracking-[-0.022em]',
  md: 'text-2xl sm:text-4xl tracking-[-0.022em]',
  sm: 'text-xl sm:text-3xl tracking-[-0.021em]',
  xs: 'text-lg sm:text-2xl tracking-[-0.019em]',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, size = 'md', className, ...props }, ref) => {
    const Element = as ?? HeadingSizeTag[size];

    return (
      <Element
        className={clsx('font-bold', headingSizeClassName[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';
