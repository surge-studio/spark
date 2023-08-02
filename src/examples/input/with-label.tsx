import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import type { FC } from 'react';

export const InputWithLabel: FC = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
);
