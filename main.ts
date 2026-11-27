// sick-day-excuse — writes the funniest sick-day excuse to /output/entry.txt.
//
// Deterministic: the same line every run, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Morning — can't come in, my smart lock updated overnight and now it only recognises my cat's pawprint.";

if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
