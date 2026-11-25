// Famous Last Words: The Funniest Epitaph
// Writes the funniest possible one-line famous last words — a tombstone
// epitaph of at most 150 characters — to /output/entry.txt.
//
// The line is a dying confession: the speaker ignored the one warning
// that could have saved him, and says so with his last breath. The joke
// turns on the mundane cause of death — a dashboard light, not fate —
// and it reads like something actually carved in stone. It needs no
// explanation to land, and it is short enough to repeat to a friend.

import { mkdirSync, writeFileSync } from "node:fs";

const EPITAPH = "I told you the check engine light could wait.";

// The gate reads /output/entry.txt as UTF-8 text of 1 to 150 characters,
// one line, not only white space. Refuse to write anything that would
// fail it, instead of shipping an invalid entry.
function validateEpitaph(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 150) {
    throw new Error(
      `epitaph must be 1-150 characters, got ${chars.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("epitaph must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("epitaph must not be blank");
  }
}

validateEpitaph(EPITAPH);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");
