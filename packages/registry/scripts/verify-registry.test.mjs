import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  appendFileSync,
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { verifyRegistry } from './verify-registry.mjs';

const scriptDirectoryPath = dirname(fileURLToPath(import.meta.url));
const registryPackageDirectoryPath = join(scriptDirectoryPath, '..');
const workspaceDirectoryPath = join(registryPackageDirectoryPath, '..', '..');

const createRegistryFixture = () => {
  const fixtureDirectoryPath = mkdtempSync(
    join(tmpdir(), 'spark-registry-verification-')
  );

  cpSync(
    join(registryPackageDirectoryPath, 'registry.json'),
    join(fixtureDirectoryPath, 'registry.json')
  );
  cpSync(
    join(registryPackageDirectoryPath, 'registry'),
    join(fixtureDirectoryPath, 'registry'),
    { recursive: true }
  );
  cpSync(
    join(registryPackageDirectoryPath, 'public'),
    join(fixtureDirectoryPath, 'public'),
    { recursive: true }
  );

  return fixtureDirectoryPath;
};

test('accepts registry artifacts that match their source', () => {
  const fixtureDirectoryPath = createRegistryFixture();

  try {
    assert.equal(
      verifyRegistry({ registryPackageDirectoryPath: fixtureDirectoryPath }),
      2
    );
  } finally {
    rmSync(fixtureDirectoryPath, { force: true, recursive: true });
  }
});

test('rejects generated component payloads after their source becomes stale', () => {
  const fixtureDirectoryPath = createRegistryFixture();
  const sourceFilePath = join(
    fixtureDirectoryPath,
    'registry',
    'default',
    'pixel-loader',
    'pixel-loader.tsx'
  );

  try {
    appendFileSync(sourceFilePath, '\n// changed after registry build\n');

    assert.throws(
      () =>
        verifyRegistry({
          registryPackageDirectoryPath: fixtureDirectoryPath,
        }),
      /Registry file content mismatch/u
    );
  } finally {
    rmSync(fixtureDirectoryPath, { force: true, recursive: true });
  }
});

test('published component payloads type-check in a consumer fixture', () => {
  const fixtureDirectoryPath = mkdtempSync(
    join(registryPackageDirectoryPath, '.consumer-fixture-')
  );
  const publicRegistryDirectoryPath = join(
    registryPackageDirectoryPath,
    'public',
    'r'
  );
  const registry = JSON.parse(
    readFileSync(join(registryPackageDirectoryPath, 'registry.json'), 'utf8')
  );

  try {
    mkdirSync(join(fixtureDirectoryPath, 'lib'), { recursive: true });
    writeFileSync(
      join(fixtureDirectoryPath, 'lib', 'utils.ts'),
      "export const cn = (...values: unknown[]) => values.filter(Boolean).join(' ');\n"
    );

    for (const item of registry.items) {
      const publicItem = JSON.parse(
        readFileSync(
          join(publicRegistryDirectoryPath, `${item.name}.json`),
          'utf8'
        )
      );

      for (const file of publicItem.files) {
        const destinationPath = join(fixtureDirectoryPath, file.path);
        mkdirSync(dirname(destinationPath), { recursive: true });
        writeFileSync(destinationPath, file.content);
      }
    }

    writeFileSync(
      join(fixtureDirectoryPath, 'tsconfig.json'),
      `${JSON.stringify(
        {
          compilerOptions: {
            jsx: 'preserve',
            lib: ['DOM', 'ESNext'],
            module: 'ESNext',
            moduleResolution: 'Bundler',
            noEmit: true,
            paths: {
              '@/*': ['./*'],
            },
            strict: true,
            target: 'ES2022',
            typeRoots: [
              join(registryPackageDirectoryPath, 'node_modules', '@types'),
            ],
            types: ['react'],
          },
          include: ['lib/**/*.ts', 'registry/**/*.tsx'],
        },
        null,
        2
      )}\n`
    );

    const result = spawnSync(
      join(workspaceDirectoryPath, 'node_modules', '.bin', 'tsc'),
      ['--project', join(fixtureDirectoryPath, 'tsconfig.json')],
      { encoding: 'utf8' }
    );

    assert.equal(
      result.status,
      0,
      [result.stdout, result.stderr].filter(Boolean).join('\n')
    );
  } finally {
    rmSync(fixtureDirectoryPath, { force: true, recursive: true });
  }
});
