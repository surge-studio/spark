# Spark

Spark is a custom shadcn/ui component registry for building web applications.

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

Run the site locally:

```bash
pnpm dev
```

Build the registry JSON files:

```bash
pnpm registry:build
```

Verify the generated `/public/r` output matches `registry.json`:

```bash
pnpm registry:check
```

Build everything for production:

```bash
pnpm build
```

`pnpm build` regenerates and verifies the registry artifacts before running the Next.js production build.

## Registry structure

Spark serves a flat registry endpoint from `public/r`:

- `/r/registry.json`
- `/r/surge-logo.json`

Source files live in `registry/default/**` and are transformed into public JSON payloads by `shadcn build`.

## Deployment notes

- Keep `registry.json` as the source of truth for item metadata.
- Regenerate `public/r` whenever a registry item changes.
- The landing page is only a preview site. The actual distribution contract is the JSON served from `/r`.
