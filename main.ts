// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry itself is a post on X: this program only hands its address over.
// It reads POST.json from the repository root and copies it to /output/POST.json,
// where the gate reads it. The house reads the post's replies, reposts and quotes
// from X itself; nothing this program writes about the post is scored.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');

// The gate refuses a POST.json that is not a JSON object with a url string,
// so fail loudly here instead of copying a broken file through.
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  console.error('POST.json must be a JSON object with a url string.');
  process.exit(1);
}

// An X post address is https://x.com/<handle>/status/<digits> (or the same on
// twitter.com). Refuse anything else here so a typo never reaches the gate.
if (!/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(parsed.url)) {
  console.error(`POST.json url is not an X post address: ${parsed.url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
console.log(`POST.json copied to ${OUTPUT_DIR} for ${parsed.url}`);
