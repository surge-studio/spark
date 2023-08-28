import { Badge } from '@/components/Badge';
import type { FC } from 'react';

export const BadgeDemo: FC = () => (
  <div className="flex gap-2">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="tertiary">Tertiary</Badge>
    <Badge variant="destructive">Destructive</Badge>
  </div>
);
