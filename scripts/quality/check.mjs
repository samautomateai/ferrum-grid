import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
let failed = false;
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (/\.(ts|mjs)$/.test(path)) {
      const lines = readFileSync(path, 'utf8').split('\n');
      if (lines.length > 501 || lines.some(line => line.length > 120)) {
        console.error(`Size limit: ${path}`);
        failed = true;
      }
    }
  }
}
walk('packages');
walk('scripts');
if (failed) process.exitCode = 1;
