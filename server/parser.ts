import AdmZip from "adm-zip";
import he from "he";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  CaseOptions,
  PrescriptionCase,
  PrescriptionKey,
  PrescriptionMap,
  PRESCRIPTION_KEYS,
  SECTION_LABELS
} from "../src/lib/types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_PPTX = path.resolve(__dirname, "..", "dental prescriptions.pptx");

type RawCase = Omit<PrescriptionCase, "options" | "correctAnswers" | "explanations">;

const sexes: Array<"Female" | "Male"> = ["Female", "Male"];
const routes = ["Oral", "IV", "IM", "Sublingual", "Nebulized", "Topical", "Mouth rinse", "Dental socket packing"];
const dosePattern = /\b(\d+(\.\d+)?\s?(mg|mcg|g|ml|units|lakh units|%|ampoules?|vials?|tablets?|tabs?|troches?|capsules?)(\/\d+\s?ml)?|1:\s?\d{1,5}|1:1000|5%)\b/gi;

const speechByDiagnosis: Array<[RegExp, string]> = [
  [/asthma/i, "Doctor, I feel breathless and my chest is tight."],
  [/hypertension/i, "Doctor, my blood pressure has been running high."],
  [/cardiac failure/i, "Doctor, I get tired and short of breath easily."],
  [/angina/i, "Doctor, I get chest pain when I walk or climb stairs."],
  [/peptic ulcer/i, "Doctor, I have burning stomach pain and acidity."],
  [/dysentery/i, "Doctor, I have loose stools with cramps."],
  [/diabetes/i, "Doctor, my sugar is not controlled with one medicine."],
  [/anaphylactic/i, "Doctor, I suddenly felt faint and breathless after the injection."],
  [/epilepticus|epilepsy/i, "Doctor, the seizure is not stopping."],
  [/anemia|anaemia/i, "Doctor, I feel weak and tired all the time."],
  [/toothache|insomnia/i, "Doctor, my tooth hurts so much I cannot sleep."],
  [/fractured mandible/i, "Doctor, my jaw is fractured and the pain is severe."],
  [/gingival abscess/i, "Doctor, my gums hurt and feel swollen."],
  [/oral thrush/i, "Doctor, I have white painful patches in my mouth."],
  [/hypersensitive dentine/i, "Doctor, my teeth hurt with cold food and drinks."],
  [/herpetic gingivitis/i, "Doctor, my gums are sore with painful mouth ulcers."],
  [/scurvy/i, "Doctor, my gums bleed and I feel very weak."],
  [/tooth extraction/i, "Doctor, the tooth socket is bleeding after extraction."],
  [/halitosis/i, "Doctor, I have bad breath that will not go away."],
  [/xerostomia/i, "Doctor, my mouth feels very dry after radiotherapy."],
  [/dental caries/i, "Doctor, I want medicine to prevent tooth decay."]
];

export function parseDefaultDeck(): PrescriptionCase[] {
  return parsePptxFile(DEFAULT_PPTX);
}

export function parseUploadedDeck(filePath: string): PrescriptionCase[] {
  return parsePptxFile(filePath);
}

function parsePptxFile(filePath: string): PrescriptionCase[] {
  const zip = new AdmZip(filePath);
  const slideEntries = zip
    .getEntries()
    .filter((entry) => /^ppt\/slides\/slide\d+\.xml$/.test(entry.entryName))
    .sort((a, b) => slideNumber(a.entryName) - slideNumber(b.entryName));

  const rawCases = slideEntries
    .map((entry) => extractSlideText(entry.getData().toString("utf8")))
    .map((tokens, index) => parseSlide(tokens, index + 1))
    .filter((item): item is RawCase => Boolean(item));

  const cases = rawCases.map((raw, index) => completeCase(raw, rawCases, index));
  if (!cases.length) {
    throw new Error("No prescription cases were found in the uploaded PPTX.");
  }
  return cases;
}

function slideNumber(name: string): number {
  return Number(name.match(/slide(\d+)\.xml/)?.[1] ?? 0);
}

function extractSlideText(xml: string): string[] {
  return [...xml.matchAll(/<a:t[^>]*>(.*?)<\/a:t>/g)]
    .map((match) => cleanText(he.decode(match[1])))
    .filter(Boolean);
}

function parseSlide(tokens: string[], slideIndex: number): RawCase | null {
  const text = cleanText(tokens.join(" "));
  if (!/\bPrescribe\b/i.test(text) && !/Prophylaxis for/i.test(text)) return null;
  if (!/(tablet|tab|cap|inj|mouth wash|tooth paste|paste|paint|adrenaline|fluoride|clove oil|troche|dispense|send)/i.test(text)) return null;

  const diagnosis = extractDiagnosis(text, slideIndex);
  const drug = extractDrug(text);
  if (!diagnosis || !drug) return null;

  const prescriptionSections: PrescriptionMap = {
    drug,
    dose: extractDose(text),
    dispense: extractDispense(text),
    route: extractRoute(text),
    frequency: extractFrequency(text),
    instructions: extractInstructions(text)
  };

  return {
    caseId: `case-${slideIndex}`,
    patientSpeech: speechFor(diagnosis),
    diagnosis,
    age: 22 + ((slideIndex * 7) % 46),
    sex: sexes[slideIndex % sexes.length],
    prescriptionSections
  };
}

function extractDiagnosis(text: string, slideIndex: number): string {
  const normalized = text.replace(/^\d+\s*\)\s*/g, "");
  const patterns = [
    /Prescribe\s+for\s+(?:(?:an?|old)\s+)*(?:man\s+|adult\s+|patient\s+)?(?:suffering\s+from|with|complaining\s+of|of)\s+(.+?)(?=\s*(?:Name-|Age-|Sex-|Address-)|\s*-?\s*(?:TAB|CAP|INJ|TABLET|CHLORHEXIDINE|CLOTRIMAZOLE|POTASSIUM|SODIUM|INJ\.|CAP\.|TAB\.)\b|$)/i,
    /Prophylaxis\s+for\s+(.+?)(?=\s*-?\s*(?:TAB|CAP|INJ|TABLET|SODIUM)\b|$)/i
  ];
  const found = patterns.map((pattern) => normalized.match(pattern)?.[1]).find(Boolean);
  return titleCase(cleanText(found ?? `Prescription Case ${slideIndex}`).replace(/^a patient /i, "").replace(/[.-]\s*$/, ""));
}

function extractDrug(text: string): string {
  const candidates = [
    ...text.matchAll(/\b(?:TAB(?:LET)?|CAP|INJ)\.?\s*([A-Z][A-Za-z\s.-]+?)(?=\s+\d|\s+Dispense|\s+Send|\.|$)/g),
    ...text.matchAll(/(?:^|\s-)\s*(?:TAB(?:LET)?|CAP|INJ)\.?\s*([A-Z][A-Za-z\s.-]+?)(?=\s+\d|\s+Dispense|\s+Send|\.|$)/g),
    ...text.matchAll(/(?:^|\s-)\s*([A-Z][A-Za-z\s.-]+?)\s+\d+(?:\.\d+)?\s?(?:mg|mcg|ml|%|lakh units)/gi),
    ...text.matchAll(/(?:^|\s-)\s*([A-Z][A-Za-z\s.-]+?(?:TROCHE|MOUTH WASH|TOOTH PASTE|PAINT|OIL|FLUORIDE)[A-Za-z\s.-]*?)(?=\s+\d|\s+Dispense|\s+Use|\s+Sufficient|\.|$)/gi),
    ...text.matchAll(/\b(Chlorhexidine\s+mouth\s+wash|Sodium Fluoride\s+containing\s+tooth\s+paste)\b/gi)
  ]
    .map((match) => cleanDrug(match[1]))
    .filter(Boolean);

  return unique(candidates).slice(0, 3).join(" + ");
}

function extractDose(text: string): string {
  const doses = unique((text.match(dosePattern) ?? []).map((item) => cleanText(item))).slice(0, 4);
  return doses.length ? doses.join(" + ") : "As directed for this prescription";
}

function extractDispense(text: string): string {
  const matches = [
    ...text.matchAll(/\b(?:Dispense|Send(?: such)?)\s+(.+?)(?:\.| One | 1 | Contents | Use |$)/gi)
  ].map((match) => sentence(cleanText(match[1])));
  return unique(matches).slice(0, 3).join(" + ") || "Sufficient quantity";
}

function extractRoute(text: string): string {
  const upper = text.toUpperCase();
  const found: string[] = [];
  if (/\bIV\b|INTRAVENOUS/.test(upper)) found.push("IV");
  if (/\bIM\b|INTRAMUSCULAR/.test(upper)) found.push("IM");
  if (/SUBLINGUAL/.test(upper)) found.push("Sublingual");
  if (/NEBULIZE|INHAL/.test(upper)) found.push("Nebulized/Inhalation");
  if (/MOUTH|RINSE/.test(upper)) found.push("Mouth rinse");
  if (/TOOTH|PASTE|PAINT|LOCAL|SOCKET/.test(upper)) found.push("Topical dental use");
  if (!found.length && /(tablet|tab|cap|troche|chew)/i.test(text)) found.push("Oral");
  return unique(found).join(" + ") || "As directed";
}

function extractFrequency(text: string): string {
  const patterns = [
    /\b(?:once|twice|thrice)\s+daily(?:\s+\w+)?/gi,
    /\b\d\s*-\s*\d\s+times\s+daily/gi,
    /\b\d\s+times\s+a\s+day/gi,
    /\b(?:BID|TID)\b/gi,
    /\bevery\s+\d+\s+hrs?/gi,
    /\b4\s+times\s+daily/gi
  ];
  const found = unique(patterns.flatMap((pattern) => text.match(pattern) ?? []).map(sentence)).slice(0, 3);
  return found.join(" + ") || "As clinically directed";
}

function extractInstructions(text: string): string {
  const instructions = [
    ...text.matchAll(/\b(One .+?)(?:\.| -|$)/gi),
    ...text.matchAll(/\b(Contents .+?)(?:\.| -|$)/gi),
    ...text.matchAll(/\b(Use .+?)(?:\.| -|$)/gi),
    ...text.matchAll(/\b(To be .+?)(?:\.| -|$)/gi),
    ...text.matchAll(/\b(Take plenty of fluids)/gi),
    ...text.matchAll(/\b(Case to be reviewed.+?)(?:\.|$)/gi),
    ...text.matchAll(/\b(Review after.+?)(?:\.|$)/gi)
  ].map((match) => sentence(cleanText(match[1])));
  return unique(instructions).slice(0, 2).join(" + ") || "Follow the written prescription directions";
}

function completeCase(raw: RawCase, allCases: RawCase[], index: number): PrescriptionCase {
  const correctAnswers = { ...raw.prescriptionSections };
  const explanations = PRESCRIPTION_KEYS.reduce((acc, key) => {
    acc[key] = `${SECTION_LABELS[key]} should match the prescription recommended for ${raw.diagnosis}.`;
    return acc;
  }, {} as PrescriptionMap);

  return {
    ...raw,
    correctAnswers,
    explanations,
    options: buildOptions(correctAnswers, allCases, index)
  };
}

function buildOptions(correct: PrescriptionMap, allCases: RawCase[], index: number): CaseOptions {
  return PRESCRIPTION_KEYS.reduce((acc, key) => {
    const pool = allCases.map((item) => item.prescriptionSections[key]).filter((value) => value && value !== correct[key]);
    const fallback = fallbackOptions(key);
    acc[key] = unique([correct[key], ...pool.slice(index, index + 8), ...pool, ...fallback]).slice(0, 4);
    return acc;
  }, {} as CaseOptions);
}

function fallbackOptions(key: PrescriptionKey): string[] {
  const map: Record<PrescriptionKey, string[]> = {
    drug: ["Amoxicillin", "Clotrimazole", "Chlorhexidine mouth wash", "Ibuprofen"],
    dose: ["250mg", "500mg", "10mg", "As directed"],
    dispense: ["10 tablets", "30 tablets", "1 bottle", "Sufficient quantity"],
    route: routes,
    frequency: ["Once daily", "Twice daily", "Thrice daily", "2-3 times daily"],
    instructions: ["Take after food", "Use locally", "Review after one week", "Take plenty of fluids"]
  };
  return map[key];
}

function speechFor(diagnosis: string): string {
  return speechByDiagnosis.find(([pattern]) => pattern.test(diagnosis))?.[1] ?? `Doctor, I need treatment for ${diagnosis.toLowerCase()}.`;
}

function cleanText(value: string): string {
  return value
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanDrug(value: string): string {
  const afterMarker = cleanText(value)
    .replace(/^.*\b(?:TAB(?:LET)?|CAP|INJ)\.?\s*/i, "")
    .replace(/[-.]+$/g, "")
    .replace(/\b(OR)\b.*/i, "");
  return titleCase(afterMarker);
}

function sentence(value: string): string {
  const cleaned = cleanText(value).replace(/\s+\.$/, ".");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function titleCase(value: string): string {
  return cleanText(value)
    .toLowerCase()
    .replace(/\b([a-z])/g, (letter) => letter.toUpperCase())
    .replace(/\bIv\b/g, "IV")
    .replace(/\bIm\b/g, "IM")
    .replace(/\bH\.pylori\b/i, "H. pylori");
}

function unique<T>(items: T[]): T[] {
  return [...new Set(items.filter(Boolean))];
}
