// One Line to Your Younger Self — entry program for make.fun.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output).
// The line: one sentence a house painter would send back to his younger self.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "Kid, the paint that never washes off your hands is the only thing those walls will ever give back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
