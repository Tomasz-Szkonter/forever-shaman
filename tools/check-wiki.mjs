// Checks wiki/ pages: front matter fields, relative links, and #anchors (GitHub slug rules).
// Usage: node tools/check-wiki.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = [];
const walk = d => readdirSync(d).forEach(f => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) walk(p);
  else if (p.endsWith('.md')) files.push(p);
});
walk(join(root, 'wiki'));
['README.md', 'CONTRIBUTING.md'].forEach(f => files.push(join(root, f)));

// GitHub heading slugs: lowercase, drop everything except letters, marks, numbers, connector punctuation, spaces, hyphens.
const slug = s => s.trim().toLowerCase()
  .replace(/<[^>]+>/g, '')
  .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
  .replace(/[`*~]/g, '')
  .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, '')
  .replace(/ /g, '-');

const anchorCache = new Map();
function anchors(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const set = new Set();
  const seen = {};
  let inCode = false;
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (/^```/.test(line)) inCode = !inCode;
    if (inCode) continue;
    const m = line.match(/^#{1,6}\s+(.*?)\s*#*\s*$/);
    if (!m) continue;
    let s = slug(m[1]);
    if (seen[s] !== undefined) { seen[s]++; s = `${s}-${seen[s]}`; } else seen[s] = 0;
    set.add(s);
  }
  anchorCache.set(file, set);
  return set;
}

const problems = [];
for (const file of files) {
  const rel = relative(root, file).split(sep).join('/');
  const text = readFileSync(file, 'utf8');
  if (rel.startsWith('wiki/') && !rel.endsWith('_Sidebar.md')) {
    const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) problems.push(`${rel}: missing front matter`);
    else for (const k of ['title', 'description', 'build', 'last_updated'])
      if (!new RegExp(`^${k}:`, 'm').test(fm[1])) problems.push(`${rel}: front matter missing "${k}"`);
  }
  const body = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  const targets = [...body.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map(m => m[1])
    .concat([...body.matchAll(/^\s*\[[^\]]+\]:\s*(\S+)/gm)].map(m => m[1]));
  for (const t of targets) {
    if (/^(https?:|mailto:)/.test(t)) continue;
    const [path, hash] = t.split('#');
    const target = path ? resolve(dirname(file), decodeURIComponent(path)) : file;
    if (!existsSync(target)) { problems.push(`${rel}: broken link -> ${t}`); continue; }
    if (hash && target.endsWith('.md') && !anchors(target).has(decodeURIComponent(hash).toLowerCase()))
      problems.push(`${rel}: missing anchor -> ${t}`);
  }
}
console.log(problems.length ? problems.join('\n') : 'OK: no problems found');
console.log(`\nChecked ${files.length} files.`);
process.exit(problems.length ? 1 : 0);
