'use client';

import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/Button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/Collapsible';
import type { FC } from 'react';

export const CollapsibleDemo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">
          @haydenbarnett starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="tertiary" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
