import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const cwd = process.cwd();
const sourceRegistryPath = join(cwd, 'registry.json');
const publicRegistryDir = join(cwd, 'public', 'r');
const publicRegistryPath = join(publicRegistryDir, 'registry.json');
const exitFailureCode = 1;
const emptyFileCount = 0;

const readJson = (filePath) => JSON.parse(readFileSync(filePath, 'utf8'));

const sourceRegistry = readJson(sourceRegistryPath);
const publicRegistry = readJson(publicRegistryPath);

const fail = (message) => {
  console.error(`registry:check failed\n${message}`);
  process.exit(exitFailureCode);
};

if (sourceRegistry.name !== publicRegistry.name) {
  fail(
    `Registry name mismatch: "${sourceRegistry.name}" !== "${publicRegistry.name}"`
  );
}

if (sourceRegistry.homepage !== publicRegistry.homepage) {
  fail(
    `Registry homepage mismatch: "${sourceRegistry.homepage}" !== "${publicRegistry.homepage}"`
  );
}

const sourceItems = sourceRegistry.items ?? [];
const publicItems = publicRegistry.items ?? [];

if (sourceItems.length !== publicItems.length) {
  fail(
    `Registry item count mismatch: ${sourceItems.length} !== ${publicItems.length}`
  );
}

const sourceItemNames = sourceItems.map((item) => item.name).toSorted();
const publicItemNames = publicItems.map((item) => item.name).toSorted();

if (JSON.stringify(sourceItemNames) !== JSON.stringify(publicItemNames)) {
  fail(
    `Registry item names mismatch: ${sourceItemNames.join(', ')} !== ${publicItemNames.join(', ')}`
  );
}

for (const item of sourceItems) {
  const itemPath = join(publicRegistryDir, `${item.name}.json`);
  const publicItem = readJson(itemPath);

  if (publicItem.name !== item.name) {
    fail(`Registry item name mismatch for ${item.name}`);
  }

  if (publicItem.type !== item.type) {
    fail(
      `Registry item type mismatch for ${item.name}: "${publicItem.type}" !== "${item.type}"`
    );
  }

  if (
    !Array.isArray(publicItem.files) ||
    publicItem.files.length === emptyFileCount
  ) {
    fail(`Registry item ${item.name} does not contain any files.`);
  }
}

const publicJsonFiles = readdirSync(publicRegistryDir)
  .filter(
    (fileName) => fileName.endsWith('.json') && fileName !== 'registry.json'
  )
  .map((fileName) => fileName.replace(/\.json$/u, ''))
  .toSorted();

if (JSON.stringify(publicJsonFiles) !== JSON.stringify(sourceItemNames)) {
  fail(
    `Unexpected built registry files: ${publicJsonFiles.join(', ')} !== ${sourceItemNames.join(', ')}`
  );
}

console.log(`registry:check passed for ${sourceItemNames.length} item(s).`);
