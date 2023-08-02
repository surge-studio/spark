import { Label } from '@/components/Label';
import { Checkbox } from '@/components/Checkbox';
import type { FC } from 'react';

export const LabelDemo: FC = () => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
);
