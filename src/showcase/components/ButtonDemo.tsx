import { Button } from '@/components/Button';
import { Loader } from '@/components/Loader';
import { Zap } from 'lucide-react';
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
        <Zap className="h-4 w-4" /> Icon
      </Button>
      <Button disabled>
        <Loader />
        Disabled
      </Button>
    </div>
    <div className="flex space-x-2">
      <Button variant="secondary" size="sm">
        Small
      </Button>
      <Button variant="secondary">Medium</Button>
      <Button variant="secondary" size="lg">
        Large
      </Button>
    </div>
  </div>
);
