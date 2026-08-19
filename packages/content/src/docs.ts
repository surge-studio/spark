import type { PackageManagerCommands } from './components';

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
  description: 'Spark is a custom registry built on top of shadcn/ui.',
  installDescription:
    'Initialize shadcn in your consumer app first, then add the component directly from the hosted registry endpoint.',
  installTitle: 'Installation',
  title: 'Overview',
} as const;

export const shadcnInitCommands: PackageManagerCommands = {
  bun: 'bunx --bun shadcn@latest init',
  npm: 'npx shadcn@latest init',
  pnpm: 'pnpm dlx shadcn@latest init',
  yarn: 'yarn dlx shadcn@latest init',
};
