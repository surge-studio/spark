import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import type { FC } from 'react';

export const InputWithButton: FC = () => (
  <div className="flex w-full max-w-sm items-center space-x-2">
    <Input type="email" placeholder="Email" />
    <Button type="submit">Subscribe</Button>
  </div>
);
