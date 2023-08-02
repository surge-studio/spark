import { Loader2 } from 'lucide-react';
import { Button } from '@/components/Button';
import type { FC } from 'react';

export const ButtonLoading: FC = () => (
  <Button disabled>
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    Disabled
  </Button>
);
