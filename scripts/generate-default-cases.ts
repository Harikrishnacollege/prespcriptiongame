import fs from "node:fs";
import path from "node:path";
import { parseDefaultDeck } from "../server/parser";

const outPath = path.resolve("src", "lib", "defaultCases.generated.ts");
const cases = parseDefaultDeck();

fs.writeFileSync(
  outPath,
  `import { PrescriptionCase } from "./types";\n\nexport const defaultCases = ${JSON.stringify(cases, null, 2)} satisfies PrescriptionCase[];\n`,
  "utf8"
);

console.log(`Generated ${cases.length} default cases at ${outPath}`);
