import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleDemo: FC = () => (
  <div className="flex flex-col gap-4 justify-between w-full items-center">
    <div className="flex space-x-2">
      <Toggle variant="primary" aria-label="Toggle bold">
        Primary
      </Toggle>
      <Toggle variant="secondary" aria-label="Toggle italic">
        Secondary
      </Toggle>
      <Toggle variant="tertiary" aria-label="Toggle underline">
        Tertiary
      </Toggle>
    </div>
    <div className="flex space-x-2 items-center">
      <Toggle size="sm" variant="secondary" aria-label="Toggle small">
        Small
      </Toggle>
      <Toggle size="md" variant="secondary" aria-label="Toggle medium">
        Medium
      </Toggle>
      <Toggle size="lg" variant="secondary" aria-label="Toggle large">
        Large
      </Toggle>
    </div>
  </div>
);
