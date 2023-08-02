import { Label } from '@/components/Label';
import { Switch } from '@/components/Switch';
import type { FC } from 'react';

export const SwitchDemo: FC = () => (
  <div className="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
);
