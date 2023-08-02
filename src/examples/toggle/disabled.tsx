import { Underline } from 'lucide-react';

import { Toggle } from '@/components/Toggle';
import type { FC } from 'react';

export const ToggleDisabled: FC = () => (
  <Toggle aria-label="Toggle italic" disabled>
    <Underline className="h-4 w-4" />
  </Toggle>
);
