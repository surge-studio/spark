export const heroContent = {
  title:
    'Spark is a custom shadcn/ui component registry for building web apps.',
} as const;

export const homeContent = {
  documentation: {
    href: '/docs',
    label: 'Docs',
  },
} as const;

export const docsOverviewContent = {
  description:
    'Spark publishes installation-ready shadcn registry items and documents how to use them inside real product codebases.',
  installDescription:
    'Initialize shadcn in your consumer app first, then add the component directly from the hosted registry endpoint.',
  installTitle: 'Install from the registry',
  overviewLabel: 'Overview',
  title: 'Component docs for the Spark registry.',
} as const;
