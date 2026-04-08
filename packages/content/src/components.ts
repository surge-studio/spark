import registryIndex from '@spark/registry/registry.json';

export interface ComponentProp {
  readonly description: string;
  readonly name: string;
  readonly type: string;
}

type RegistryItem = (typeof registryIndex.items)[number];
type RegistryComponentName = RegistryItem['name'];

interface ComponentContent {
  readonly props: readonly ComponentProp[];
}

export interface ComponentEntry extends ComponentContent {
  readonly categories: readonly string[];
  readonly description: string;
  readonly installCommand: string;
  readonly path: string;
  readonly slug: string;
  readonly title: string;
}

const componentContentBySlug: Record<RegistryComponentName, ComponentContent> =
  {
    'surge-logo': {
      props: [
        {
          name: 'variant',
          type: "'default' | 'symbol' | 'wordmark'",
          description:
            'Chooses whether the component renders the full lockup, symbol, or wordmark.',
        },
        {
          name: 'orientation',
          type: "'horizontal' | 'vertical'",
          description:
            'Controls the full logo layout when the default variant is used.',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Applies additional classes to the rendered element.',
        },
      ],
    },
  };

const assertComponentContentCoverage = () => {
  const registryItemNames = new Set(
    registryIndex.items.map((item) => item.name)
  );
  const contentSlugs = Object.keys(componentContentBySlug);
  const missingContentSlugs = [...registryItemNames].filter(
    (slug) => !componentContentBySlug[slug]
  );
  const extraContentSlugs = contentSlugs.filter(
    (slug) => !registryItemNames.has(slug)
  );

  if (missingContentSlugs.length === 0 && extraContentSlugs.length === 0) {
    return;
  }

  const issues: string[] = [];

  if (missingContentSlugs.length > 0) {
    issues.push(`missing docs metadata for: ${missingContentSlugs.join(', ')}`);
  }

  if (extraContentSlugs.length > 0) {
    issues.push(
      `unexpected docs metadata for: ${extraContentSlugs.join(', ')}`
    );
  }

  throw new Error(`Component catalog metadata mismatch: ${issues.join('; ')}`);
};

assertComponentContentCoverage();

const getInstallCommand = (slug: RegistryComponentName) =>
  `pnpm dlx shadcn@latest add ${registryIndex.homepage}/r/${slug}.json`;

export const componentCatalog: readonly ComponentEntry[] =
  registryIndex.items.map((item) => {
    const content = componentContentBySlug[item.name];
    const [primaryFile] = item.files;

    if (!content) {
      throw new Error(
        `Registry item "${item.name}" is missing docs metadata coverage.`
      );
    }

    if (!primaryFile) {
      throw new Error(
        `Registry item "${item.name}" does not define any files.`
      );
    }

    return {
      categories: item.categories ?? [],
      description: item.description,
      installCommand: getInstallCommand(item.name),
      path: primaryFile.path,
      props: content.props,
      slug: item.name,
      title: item.title,
    };
  });

export const docsNavigation = [
  {
    href: '/docs',
    title: 'Overview',
  },
] as const;

export const componentCategories = [
  ...new Set(componentCatalog.flatMap((component) => component.categories)),
].toSorted((left, right) => left.localeCompare(right));

export const getComponentBySlug = (slug: string) =>
  componentCatalog.find((component) => component.slug === slug);
