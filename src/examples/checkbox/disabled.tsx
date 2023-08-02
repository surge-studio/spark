import { Checkbox } from '@/components/Checkbox';
import type { FC } from 'react';

export const CheckboxDisabled: FC = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms2" disabled />
    <label
      htmlFor="terms2"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
);
