import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import type { FC } from 'react';

export const AvatarDemo: FC = () => (
  <Avatar>
    <AvatarImage
      src="https://github.com/surge-studio.png"
      alt="@surge-studio"
    />
    <AvatarFallback>SS</AvatarFallback>
  </Avatar>
);
