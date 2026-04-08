# Spark

Spark is a custom shadcn/ui component registry for building web apps.

## Usage

Start from a project that has already been initialized with shadcn. If it has not been initialized yet, run:

```bash
pnpm dlx shadcn@latest init
```

Then add a registry item directly from Spark:

```bash
pnpm dlx shadcn@latest add https://spark.surge.studio/r/surge-logo.json
```

## Development

Install dependencies:

```bash
pnpm install
```

Run the docs app locally:

```bash
pnpm dev
```

Build the registry JSON files:

```bash
pnpm registry:build
```

Verify the generated `/packages/registry/public/r` output matches `packages/registry/registry.json`:

```bash
pnpm registry:check
```

Build everything for production:

```bash
pnpm build
```

`pnpm build` regenerates and verifies the registry artifacts before running the Next.js production build.

## Registry Structure

Spark serves a flat registry endpoint from the docs app at:

- `/r/registry.json`
- `/r/surge-logo.json`

Registry source files live in `packages/registry/registry/**` and are transformed into public JSON payloads in `packages/registry/public/r` by `shadcn build`. The docs build then syncs those files into `apps/docs/public/r` so they are shipped as static assets at `/r/*.json`.

## Workspace Structure

- `apps/docs` contains the deployable Next.js docs and marketing app.
- `packages/content` contains editorial docs content and docs-only metadata layered on top of the registry.
- `packages/registry` contains registry source and generated registry output.
- `packages/ui` contains shared presentational components used by the docs app.

## Deployment notes

- Keep `packages/registry/registry.json` as the source of truth for item metadata.
- Regenerate `packages/registry/public/r` whenever a registry item changes.
- The landing page is only a preview site. The actual distribution contract is the JSON served from `/r`.
