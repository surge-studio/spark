import { Label } from '@/components/Label';
import type { FC } from 'react';
import { Textarea } from '@/components/Textarea';

export const TextareaWithLabel: FC = () => (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="message">Your message</Label>
    <Textarea placeholder="Type your message here." id="message" />
  </div>
);
