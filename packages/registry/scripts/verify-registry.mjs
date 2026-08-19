import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const metadataFields = [
  'categories',
  'dependencies',
  'description',
  'devDependencies',
  'registryDependencies',
  'title',
  'type',
];

const readJson = (filePath) => JSON.parse(readFileSync(filePath, 'utf8'));
const normalizeContent = (content) => content.replace(/\r\n?/gu, '\n');

const assertEqual = (actual, expected, message) => {
  if (actual !== expected) {
    throw new Error(
      `${message}: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`
    );
  }
};

const assertJsonEqual = (actual, expected, message) => {
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), message);
};

const verifyItemMetadata = (sourceItem, publicItem) => {
  assertEqual(
    publicItem.name,
    sourceItem.name,
    `Registry item name mismatch for ${sourceItem.name}`
  );

  for (const field of metadataFields) {
    assertJsonEqual(
      publicItem[field],
      sourceItem[field],
      `Registry item ${field} mismatch for ${sourceItem.name}`
    );
  }
};

const verifyItemFiles = ({
  publicItem,
  registryPackageDirectoryPath,
  sourceItem,
}) => {
  const sourceFiles = sourceItem.files ?? [];
  const publicFiles = publicItem.files ?? [];

  if (sourceFiles.length === 0) {
    throw new Error(
      `Registry item ${sourceItem.name} does not define any files.`
    );
  }

  assertEqual(
    publicFiles.length,
    sourceFiles.length,
    `Registry item file count mismatch for ${sourceItem.name}`
  );

  for (const sourceFile of sourceFiles) {
    const publicFile = publicFiles.find(
      (file) => file.path === sourceFile.path
    );

    if (!publicFile) {
      throw new Error(
        `Registry item ${sourceItem.name} is missing built file ${sourceFile.path}.`
      );
    }

    assertEqual(
      publicFile.type,
      sourceFile.type,
      `Registry file type mismatch for ${sourceFile.path}`
    );

    const sourceContent = readFileSync(
      join(registryPackageDirectoryPath, sourceFile.path),
      'utf8'
    );

    assertEqual(
      normalizeContent(publicFile.content),
      normalizeContent(sourceContent),
      `Registry file content mismatch for ${sourceFile.path}`
    );
  }
};

export const verifyRegistry = ({
  registryPackageDirectoryPath = process.cwd(),
} = {}) => {
  const sourceRegistryPath = join(
    registryPackageDirectoryPath,
    'registry.json'
  );
  const publicRegistryDir = join(registryPackageDirectoryPath, 'public', 'r');
  const publicRegistryPath = join(publicRegistryDir, 'registry.json');
  const sourceRegistry = readJson(sourceRegistryPath);
  const publicRegistry = readJson(publicRegistryPath);

  assertEqual(
    publicRegistry.name,
    sourceRegistry.name,
    'Registry name mismatch'
  );
  assertEqual(
    publicRegistry.homepage,
    sourceRegistry.homepage,
    'Registry homepage mismatch'
  );

  const sourceItems = sourceRegistry.items ?? [];
  const publicItems = publicRegistry.items ?? [];

  assertEqual(
    publicItems.length,
    sourceItems.length,
    'Registry item count mismatch'
  );

  const sourceItemNames = sourceItems.map((item) => item.name).toSorted();
  const publicItemNames = publicItems.map((item) => item.name).toSorted();

  assertJsonEqual(
    publicItemNames,
    sourceItemNames,
    'Registry item names mismatch'
  );

  for (const sourceItem of sourceItems) {
    const publicItem = readJson(
      join(publicRegistryDir, `${sourceItem.name}.json`)
    );

    verifyItemMetadata(sourceItem, publicItem);
    verifyItemFiles({
      publicItem,
      registryPackageDirectoryPath,
      sourceItem,
    });
  }

  const publicJsonFiles = readdirSync(publicRegistryDir)
    .filter(
      (fileName) => fileName.endsWith('.json') && fileName !== 'registry.json'
    )
    .map((fileName) => fileName.replace(/\.json$/u, ''))
    .toSorted();

  assertJsonEqual(
    publicJsonFiles,
    sourceItemNames,
    'Unexpected built registry files'
  );

  return sourceItemNames.length;
};

const scriptPath = process.argv[1];
const isDirectRun =
  scriptPath && resolve(scriptPath) === fileURLToPath(import.meta.url);

if (isDirectRun) {
  try {
    const itemCount = verifyRegistry();
    console.log(`registry:check passed for ${itemCount} item(s).`);
  } catch (error) {
    console.error(`registry:check failed\n${error.message}`);
    process.exitCode = 1;
  }
}
