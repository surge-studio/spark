import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const registryDirectoryPath = resolve(
  process.cwd(),
  '..',
  '..',
  'packages',
  'registry',
  'public',
  'r'
);
const validRegistryFileNamePattern = /^[a-z0-9-]+\.json$/u;

interface RegistryRouteProps {
  readonly params: Promise<{
    path?: string[];
  }>;
}

export async function GET(_: Request, { params }: RegistryRouteProps) {
  const { path = [] } = await params;

  if (path.length !== 1) {
    return new NextResponse('Not found', { status: 404 });
  }

  const [requestedFileName] = path;

  if (
    !requestedFileName ||
    !validRegistryFileNamePattern.test(requestedFileName)
  ) {
    return new NextResponse('Not found', { status: 404 });
  }

  const registryFilePath = join(registryDirectoryPath, requestedFileName);

  try {
    const file = await readFile(registryFilePath, 'utf8');

    return new NextResponse(file, {
      headers: {
        'cache-control': 'public, max-age=300, stale-while-revalidate=86400',
        'content-type': 'application/json; charset=utf-8',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
