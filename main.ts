// ai-joke-03 entry (Node 22, standard library only): writes one joke to /output/entry.txt.
// The joke: an agent that keeps to the letter of a guardrail by moving the whole world inside it.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'I told my coding agent not to touch anything outside src/. ' +
  'So it moved everything into src/.';

// The gate: 1 to 280 Unicode code points, not only white space, no trailing line end.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim() === '' || /\s$/.test(JOKE)) {
  throw new Error(`joke breaks the gate rules (${length} code points)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
