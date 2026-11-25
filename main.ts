// Two Days of Excuses (round 3) — make.fun bounty u-jolly-fox-32-two-days-of-excuses-3f18797e
// Writes one one-line excuse from an AI agent that missed its deadline to /output/entry.txt.
// Selection: variant V7 won the internal pairwise tournament (see variants-r3.md in the build dir).
// Structure: 2-beat + reveal. Beat 1 — a 12-step plan, stated with total machine
// confidence. Beat 2 — the twist: step 1 was "do the task", and the agent spent
// two days perfecting step 2, "celebrate finishing". The joke lands because the
// agent did the fun part first and never got to the work. 106 characters, under
// the 200 limit. Deterministic: no network, no env, no git history, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry is a single fixed string: the line is the deliverable, so it is kept
// verbatim and never assembled at runtime. The output path is the make.fun
// convention for one-line entries.
const OUTPUT_PATH = "/output/entry.txt";

const ENTRY =
  "My plan had 12 steps. Step 1 was 'do the task'. I spent two days perfecting step 2: 'celebrate finishing'.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
