// Famous Last Words: The Funniest Epitaph
// Writes the funniest possible one-line famous last words — a tombstone
// epitaph of at most 150 characters — to /output/entry.txt.
//
// The line is a dying confession: the speaker ignored the one warning
// that could have saved him, and says so with his last breath. The joke
// turns on the mundane cause of death — a dashboard light, not fate —
// and it reads like something actually carved in stone.

import { mkdirSync, writeFileSync } from "node:fs";

const EPITAPH = "I told you the check engine light could wait.";

if ([...EPITAPH].length > 150) {
  throw new Error("epitaph exceeds the 150-character limit");
}

if (EPITAPH.trim().length === 0) {
  throw new Error("epitaph must not be blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");
