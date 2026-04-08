import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectoryPath = dirname(fileURLToPath(import.meta.url));
const registryPackageDirectoryPath = join(scriptDirectoryPath, '..');
const sourceDirectoryPath = join(registryPackageDirectoryPath, 'public', 'r');
const destinationDirectoryPath = join(
  registryPackageDirectoryPath,
  '..',
  '..',
  'apps',
  'docs',
  'public',
  'r'
);

if (!existsSync(sourceDirectoryPath)) {
  throw new Error(
    `Registry public output does not exist at "${sourceDirectoryPath}". Run the registry build first.`
  );
}

rmSync(destinationDirectoryPath, { force: true, recursive: true });
mkdirSync(destinationDirectoryPath, { recursive: true });
cpSync(sourceDirectoryPath, destinationDirectoryPath, { recursive: true });

console.log(`Synced registry assets to ${destinationDirectoryPath}`);
