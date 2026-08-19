import { rmSync } from 'node:fs';
import { join } from 'node:path';

const generatedTypesDirectoryPath = join(process.cwd(), '.next', 'types');

rmSync(generatedTypesDirectoryPath, { force: true, recursive: true });
