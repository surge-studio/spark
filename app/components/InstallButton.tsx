'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/components/utils';
import { Button } from '@/components/Button';
import type { FC } from 'react';

type InstallButtonProps = {
  readonly className?: string;
};

export const InstallButton: FC<InstallButtonProps> = ({ className }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const value = 'pnpm add @surge-studio/spark';

  return (
    <Button
      size="sm"
      variant="secondary"
      className={cn('group font-mono text-xs', className)}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        if (hasCopied) return;
        setHasCopied(true);
        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      }}
    >
      {hasCopied ? (
        <CheckIcon className="w-3 h-3 text-success-500" />
      ) : (
        <CopyIcon className="w-3 h-3 transition opacity-50 group-hover:opacity-100" />
      )}
      {value}
    </Button>
  );
};
