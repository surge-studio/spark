import type { FC, ReactNode } from 'react';

interface LogoPreviewCardProps {
  readonly children: ReactNode;
  readonly label: string;
}

export const LogoPreviewCard: FC<LogoPreviewCardProps> = ({
  children,
  label,
}) => (
  <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-transparent">
    <div className="flex h-48 items-center justify-center bg-transparent">
      {children}
    </div>
    <div className="border-t border-border p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  </div>
);
