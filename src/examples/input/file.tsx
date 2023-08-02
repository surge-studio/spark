import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import type { FC } from 'react';

export const InputFile: FC = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="picture">Picture</Label>
    <Input id="picture" type="file" />
  </div>
);
