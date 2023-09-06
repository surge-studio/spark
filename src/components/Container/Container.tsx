import type { FC, HTMLProps } from 'react';
import { cn } from '../utils';

type ContainerSizes = 'full' | 'lg' | 'md' | 'sm' | 'xl';

type ContainerProps = Omit<HTMLProps<HTMLDivElement>, 'size'> & {
  size?: ContainerSizes;
};

const containerSizeClassName: Record<ContainerSizes, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1920px]',
  full: 'max-w-full',
};

const Container: FC<ContainerProps> = ({
  size = 'lg',
  children,
  className,
}) => (
  <div
    className={cn(
      'mx-auto w-full px-4 sm:px-8',
      containerSizeClassName[size],
      className
    )}
  >
    {children}
  </div>
);

export { Container };
