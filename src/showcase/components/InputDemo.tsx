import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import type { FC } from 'react';

export const InputDemo: FC = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email-2">Email</Label>
    <Input type="email" id="email-2" placeholder="Email" />
    <p className="text-sm text-gray-500">Enter your email address.</p>
  </div>
);
