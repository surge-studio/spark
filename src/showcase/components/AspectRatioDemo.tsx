import Image from 'next/image';
import { AspectRatio } from '@/components/AspectRatio';
import type { FC } from 'react';

export const AspectRatioDemo: FC = () => (
  <AspectRatio ratio={16 / 9} className="bg-gray-100 dark:bg-gray-900">
    <Image
      src="https://images.unsplash.com/photo-1520188740392-665a13f453fc?w=800&dpr=2&q=80"
      alt="Photo by Lou Brassard"
      fill
      className="rounded-md object-cover"
    />
  </AspectRatio>
);
