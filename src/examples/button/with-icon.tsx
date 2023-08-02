import { Zap } from 'lucide-react';
import { Button } from '@/components/Button';
import type { FC } from 'react';

export const ButtonWithIcon: FC = () => (
  <Button>
    <Zap className="mr-2 h-4 w-4" /> Icon
  </Button>
);
