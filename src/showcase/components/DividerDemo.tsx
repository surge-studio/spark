import { Text } from '@/components/Text';
import { Divider } from '@/components/Divider';
import Link from 'next/link';
import type { FC } from 'react';

export const DividerDemo: FC = () => (
  <div>
    <div className="space-y-1">
      <Text size="sm" className="text-gray-500">
        Divider
      </Text>
    </div>
    <Divider className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-sm">
      <Link
        href="/docs"
        className="outline-none hover:underline focus-visible:underline"
      >
        Docs
      </Link>
      <Divider orientation="vertical" />
      <Link
        href="https://github.com/surge-studio/spark"
        className="outline-none hover:underline focus-visible:underline"
      >
        Source
      </Link>
      <Divider orientation="vertical" />
      <Link
        href="https://surge.studio"
        className="outline-none hover:underline focus-visible:underline"
      >
        Surge
      </Link>
    </div>
  </div>
);
