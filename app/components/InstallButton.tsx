'use client';

import { cn } from '@/components/utils';
import { Button } from '@/components/Button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { FC, useState } from 'react';

type InstallButtonProps = {
  className?: string;
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
