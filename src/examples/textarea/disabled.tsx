import { Textarea } from '@/components/Textarea';
import type { FC } from 'react';

export const TextareaDisabled: FC = () => (
  <Textarea placeholder="Type your message here." disabled />
);
