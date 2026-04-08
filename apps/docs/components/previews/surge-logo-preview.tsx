import { SurgeLogo } from '@spark/registry/surge-logo';
import { LogoPreviewCard } from '@spark/ui/logo-preview-card';

export function SurgeLogoPreview() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <LogoPreviewCard label="symbol">
        <SurgeLogo variant="symbol" className="text-foreground w-12" />
      </LogoPreviewCard>
      <LogoPreviewCard label="wordmark">
        <SurgeLogo variant="wordmark" className="text-foreground" />
      </LogoPreviewCard>
      <LogoPreviewCard label="default">
        <SurgeLogo className="text-foreground" />
      </LogoPreviewCard>
    </div>
  );
}
