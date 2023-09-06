import { Loader2Icon } from 'lucide-react';
import { FC } from 'react';
import { cn } from '../utils';

type LoaderProps = {
  className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <Loader2Icon
      className={cn('inline-flex h-4 w-4 animate-spin', className)}
    />
  );
};

export { Loader };
