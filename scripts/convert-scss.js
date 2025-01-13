import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function walkDir(dir) {
  const files = readdirSync(dir);
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      walkDir(filePath);
    } else if (file.endsWith('.vue')) {
      const content = readFileSync(filePath, 'utf8');
      const newContent = content
        .replace(/lang="less"/g, 'lang="less"')
        .replace(/lang="css"/g, 'lang="less"')
        .replace(/&-([a-zA-Z])/g, '&__$1');
      writeFileSync(filePath, newContent);
      console.log(`Converted ${filePath}`);
    }
  });
}

walkDir(resolve(__dirname, '../src')); 