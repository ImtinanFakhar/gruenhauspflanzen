import { spawnSync } from 'node:child_process';
import { copyFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const nextCli = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');
const result = spawnSync(process.execPath, [nextCli, 'build'], {
  env: { ...process.env, CF_PAGES_EXPORT: '1' },
  stdio: 'inherit',
});

if (result.status !== 0) process.exit(result.status ?? 1);

if (process.platform === 'win32') {
  // Next 16 writes nested RSC payloads on Windows, while the client requests flat filenames.
  const flattenPayloads = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === '_next' || entry.name === 'images') continue;
      const entryPath = path.join(directory, entry.name);
      if (entry.name.startsWith('__next.')) {
        for (const payload of readdirSync(entryPath, { withFileTypes: true })) {
          if (payload.isFile() && payload.name.endsWith('.txt')) {
            copyFileSync(path.join(entryPath, payload.name), path.join(directory, `${entry.name}.${payload.name}`));
          }
        }
      } else {
        flattenPayloads(entryPath);
      }
    }
  };

  flattenPayloads(path.join(process.cwd(), 'out'));
}
