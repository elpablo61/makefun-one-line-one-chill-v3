import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — a single sentence of horror, under 200 characters.
// The line: a lullaby's unfinished first bar, finished by an empty room.
const LINE =
  "My grandmother hums the first bar of a lullaby before she opens a door; last night, from the empty room at the end of the hall, I heard the second bar.";

// Gate: the entry must be 1–200 characters; fail loudly instead of submitting
// an invalid line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
