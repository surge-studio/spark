import { Loader2Icon } from 'lucide-react';
import { cn } from '../utils';
import type { FC } from 'react';

type LoaderProps = {
  readonly className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => (
  <Loader2Icon className={cn('inline-flex h-4 w-4 animate-spin', className)} />
);

export { Loader };
