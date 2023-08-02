import { Italic } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleSecondary: FC = () => (
  <Toggle variant="secondary" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
);
