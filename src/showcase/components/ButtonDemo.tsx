import { Button } from '@/components/Button';
import { Loader2, Zap } from 'lucide-react';
import type { FC } from 'react';

export const ButtonDemo: FC = () => (
  <div className="flex-col items-start space-x-0 space-y-2">
    <div className="flex space-x-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
    <div className="flex space-x-2">
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
    <div className="flex space-x-2">
      <Button>
        <Zap className="mr-2 h-4 w-4" /> Icon
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Disabled
      </Button>
    </div>
  </div>
);
