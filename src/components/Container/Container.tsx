import { forwardRef, type HTMLProps } from 'react';
import { cn } from '../utils';
import { VariantProps, cva } from 'class-variance-authority';

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
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(containerVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';

export { Container };
