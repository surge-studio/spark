import { Italic } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleSm: FC = () => (
  <Toggle size="sm" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
);
