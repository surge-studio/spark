import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import type { FC } from 'react';

export const AvatarDemo: FC = () => (
  <Avatar>
    <AvatarImage
      src="https://github.com/haydenbarnett.png"
      alt="@haydenbarnett"
    />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);
