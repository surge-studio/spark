import type { FC, ReactNode } from 'react';

interface LogoPreviewCardProps {
  readonly children: ReactNode;
  readonly label: string;
}

export const LogoPreviewCard: FC<LogoPreviewCardProps> = ({
  children,
  label,
}) => (
  <div className="border-border flex flex-col overflow-hidden rounded-[10px] border bg-transparent">
    <div className="flex h-48 items-center justify-center bg-transparent">
      {children}
    </div>
    <div className="border-border border-t p-4">
      <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
        {label}
      </p>
    </div>
  </div>
);
