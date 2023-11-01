import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLProps } from 'react';

const containerVariants = cva(cn('mx-auto w-full px-4 sm:px-8'), {
  variants: {
    size: {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[1920px]',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

type ContainerProps = Omit<HTMLProps<HTMLDivElement>, 'size'> &
  VariantProps<typeof containerVariants>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, children, ...props }, ref) => (
    <div
      className={cn(containerVariants({ size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);
Container.displayName = 'Container';

export { Container };
