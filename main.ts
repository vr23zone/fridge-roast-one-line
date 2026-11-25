// Fridge Roast: One Line, Biggest Laugh — a make.fun one-line entry.
// The program prints a single-line roast of a smart fridge and writes it,
// with no trailing newline, to /output/entry.txt for the bounty gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The roast is built in three beats, each one aimed at the fridge itself:
// its ice maker, its companion app, and its nonstop opinions about the milk.
const beats = [
  "Six months of 'calibrating' from the ice maker",
  "logged out of my own leftovers by its app",
  "and the milk opinions never stop",
];

// The turn: after all that "smart" behaviour, the fridge still needs excuses.
const punchline = "I paid extra for a fridge with excuses.";
const line = `${beats.join(", ")} — ${punchline}`;

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
console.log(line);
