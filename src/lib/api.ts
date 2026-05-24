import { EvaluationResult, PrescriptionCase, PrescriptionMap, PRESCRIPTION_KEYS, SECTION_LABELS, SECTION_WEIGHTS } from "./types";
import { defaultCases } from "./defaultCases.generated";

const LOCAL_CASES_KEY = "prescription-master-local-cases";

export async function fetchCases(): Promise<PrescriptionCase[]> {
  const localCases = localStorage.getItem(LOCAL_CASES_KEY);
  if (localCases) {
    const parsed = JSON.parse(localCases) as PrescriptionCase[];
    if (parsed.length) return parsed;
    localStorage.removeItem(LOCAL_CASES_KEY);
  }

  try {
    const response = await fetch("/api/cases");
    if (!response.ok) throw new Error("Unable to load cases");
    const cases = (await response.json()).cases as PrescriptionCase[];
    return cases.length ? cases : defaultCases;
  } catch {
    return defaultCases;
  }
}

export async function uploadCaseDeck(file: File): Promise<PrescriptionCase[]> {
  const form = new FormData();
  form.append("file", file);
  const response = await fetch("/api/parse-pdf", {
    method: "POST",
    body: form
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? "Unable to parse deck");
  localStorage.setItem(LOCAL_CASES_KEY, JSON.stringify(body.cases));
  return body.cases;
}

export async function evaluatePrescription(caseId: string, answers: Partial<PrescriptionMap>): Promise<EvaluationResult> {
  const cases = await fetchCases();
  const prescriptionCase = cases.find((item) => item.caseId === caseId);
  if (!prescriptionCase) throw new Error("Unable to evaluate prescription");

  let score = 0;
  const mistakes: EvaluationResult["mistakes"] = [];

  for (const key of PRESCRIPTION_KEYS) {
    const given = answers[key] ?? "";
    const correct = prescriptionCase.correctAnswers[key];
    if (given === correct) {
      score += SECTION_WEIGHTS[key];
    } else {
      mistakes.push({
        section: key,
        label: SECTION_LABELS[key],
        yourAnswer: given || "No answer selected",
        correctAnswer: correct,
        explanation: prescriptionCase.explanations[key]
      });
    }
  }

  return {
    score,
    maxScore: 100,
    isPerfect: score === 100,
    mistakes
  };
}
