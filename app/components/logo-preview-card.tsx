import type { FC, ReactNode } from 'react';

interface LogoPreviewCardProps {
  readonly children: ReactNode;
  readonly label: string;
}

export const LogoPreviewCard: FC<LogoPreviewCardProps> = ({
  children,
  label,
}) => (
  <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
    <div className="flex h-48 items-center justify-center bg-muted">
      {children}
    </div>
    <div className="p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  </div>
);
