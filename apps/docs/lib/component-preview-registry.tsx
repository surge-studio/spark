import { componentCatalog } from '@spark/content/components';
import type { ComponentType } from 'react';

import { SurgeLogoPreview } from '@/components/previews/surge-logo-preview';

interface ComponentPreviewRegistryEntry {
  readonly Preview: ComponentType;
}

const componentPreviewRegistry: Record<string, ComponentPreviewRegistryEntry> =
  {
    'surge-logo': {
      Preview: SurgeLogoPreview,
    },
  };

const assertComponentPreviewCoverage = () => {
  const componentSlugs = new Set(
    componentCatalog.map((component) => component.slug)
  );
  const previewSlugs = Object.keys(componentPreviewRegistry);
  const missingPreviewSlugs = [...componentSlugs].filter(
    (slug) => !componentPreviewRegistry[slug]
  );
  const extraPreviewSlugs = previewSlugs.filter(
    (slug) => !componentSlugs.has(slug)
  );

  if (missingPreviewSlugs.length === 0 && extraPreviewSlugs.length === 0) {
    return;
  }

  const issues: string[] = [];

  if (missingPreviewSlugs.length > 0) {
    issues.push(`missing previews for: ${missingPreviewSlugs.join(', ')}`);
  }

  if (extraPreviewSlugs.length > 0) {
    issues.push(`unexpected previews for: ${extraPreviewSlugs.join(', ')}`);
  }

  throw new Error(`Component preview registry mismatch: ${issues.join('; ')}`);
};

assertComponentPreviewCoverage();

export const getComponentPreviewBySlug = (slug: string) => {
  const previewEntry = componentPreviewRegistry[slug];

  if (!previewEntry) {
    throw new Error(`Missing preview registry entry for "${slug}".`);
  }

  return previewEntry;
};
