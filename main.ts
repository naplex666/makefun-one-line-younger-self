// One Line to Your Younger Self — entry program for make.fun.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output).
// The line: one sentence a house painter would send back to his younger self.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "Kid, you'll spend years painting a thousand walls for other people, and the paint never washes off your hands — so make the next wall yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
