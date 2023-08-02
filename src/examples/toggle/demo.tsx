import { Bold } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleDemo: FC = () => (
  <Toggle aria-label="Toggle italic">
    <Bold className="h-4 w-4" />
  </Toggle>
);
