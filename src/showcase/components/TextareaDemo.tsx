import { Label } from '@/components/Label';
import { Textarea } from '@/components/Textarea';
import type { FC } from 'react';

export const TextareaDemo: FC = () => (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="message-2">Your Message</Label>
    <Textarea placeholder="Type your message here." id="message-2" />
    <p className="text-sm text-gray-500">
      Your message will be copied to the support team.
    </p>
  </div>
);
