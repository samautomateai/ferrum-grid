import ts from 'typescript';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'packages/core';
const violations = [];
function inspect(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) inspect(path);
    else if (path.endsWith('.ts') && !path.endsWith('.test.ts')) {
      const source = ts.preProcessFile(readFileSync(path, 'utf8'), true, true);
      for (const item of source.importedFiles) {
        const name = item.fileName;
        if (!/^\.\/?[^.]/.test(name) || name.split('/').includes('..')) {
          violations.push(path + ': forbidden import ' + name);
        }
      }
    }
  }
}
inspect(root);
for (const violation of violations) console.error(violation);
if (violations.length) process.exitCode = 1;
