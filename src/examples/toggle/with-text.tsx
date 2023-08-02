import { Italic } from 'lucide-react';
import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleWithText: FC = () => (
  <Toggle aria-label="Toggle italic">
    <Italic className="mr-2 h-4 w-4" />
    Italic
  </Toggle>
);
