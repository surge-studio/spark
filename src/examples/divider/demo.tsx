import { Divider } from '@/components/Divider';
import type { FC } from 'react';

export const DividerDemo: FC = () => (
  <div>
    <div className="space-y-1">
      <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      <p className="text-sm text-gray-500">
        An open-source UI component library.
      </p>
    </div>
    <Divider className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Divider orientation="vertical" />
      <div>Docs</div>
      <Divider orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
);
