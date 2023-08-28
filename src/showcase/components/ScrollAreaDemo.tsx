import { ScrollArea } from '@/components/ScrollArea';
import { Divider } from '@/components/Divider';
import { Fragment, type FC } from 'react';

const tags = Array.from({ length: 50 }).map(
  (value, index, array) => `v1.2.0-beta.${array.length - index}`
);

export const ScrollAreaDemo: FC = () => (
  <ScrollArea className="h-72 w-48 rounded-md border border-gray-200 dark:border-gray-800">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Scroll Area</h4>
      {tags.map((tag) => (
        <Fragment key={tag}>
          <div className="text-sm">{tag}</div>
          <Divider className="my-2" />
        </Fragment>
      ))}
    </div>
  </ScrollArea>
);
