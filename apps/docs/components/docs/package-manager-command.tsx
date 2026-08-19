'use client';

import type {
  PackageManager,
  PackageManagerCommands,
} from '@spark/content/components';
import { Snippet } from '@spark/ui/snippet';
import { useState } from 'react';

import { cn } from '@/lib/utils';

const packageManagers: readonly PackageManager[] = [
  'pnpm',
  'npm',
  'yarn',
  'bun',
];

interface PackageManagerCommandProps {
  readonly commands: PackageManagerCommands;
}

export function PackageManagerCommand({
  commands,
}: PackageManagerCommandProps) {
  const [packageManager, setPackageManager] = useState<PackageManager>('pnpm');

  return (
    <div className="space-y-2">
      <div
        className="flex flex-wrap gap-1"
        aria-label="Package manager"
        role="group"
      >
        {packageManagers.map((item) => {
          const isActive = packageManager === item;

          return (
            <button
              key={item}
              type="button"
              aria-pressed={isActive}
              onClick={() => setPackageManager(item)}
              className={cn(
                'text-muted-foreground hover:bg-muted hover:text-foreground rounded px-2.5 py-1 text-xs font-medium transition',
                isActive && 'bg-muted text-foreground'
              )}
            >
              {item}
            </button>
          );
        })}
      </div>
      <Snippet cmd={commands[packageManager]} />
    </div>
  );
}
