import { Badge } from '@/components/Badge';
import type { FC } from 'react';

export const BadgeDemo: FC = () => (
  <div className="flex gap-2 flex-wrap">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="tertiary">Tertiary</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="success">Success</Badge>
  </div>
);
