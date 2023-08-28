import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleDemo: FC = () => (
  <div className="flex justify-between w-full items-center">
    <div className="flex space-x-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="secondary" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic" disabled>
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
    </div>
    <div className="flex space-x-2 items-center">
      <Toggle size="sm" aria-label="Toggle italic">
        Small
      </Toggle>
      <Toggle size="lg" aria-label="Toggle italic">
        Large
      </Toggle>
    </div>
  </div>
);
