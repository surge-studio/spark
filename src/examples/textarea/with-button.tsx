import { Button } from '@/components/Button';
import type { FC } from 'react';
import { Textarea } from '@/components/Textarea';

export const TextareaWithButton: FC = () => (
  <div className="grid w-full gap-2">
    <Textarea placeholder="Type your message here." />
    <Button>Send message</Button>
  </div>
);
