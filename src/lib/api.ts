import { EvaluationResult, PrescriptionCase, PrescriptionMap } from "./types";

export async function fetchCases(): Promise<PrescriptionCase[]> {
  const response = await fetch("/api/cases");
  if (!response.ok) throw new Error("Unable to load cases");
  return (await response.json()).cases;
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
  return body.cases;
}

export async function evaluatePrescription(caseId: string, answers: Partial<PrescriptionMap>): Promise<EvaluationResult> {
  const response = await fetch("/api/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ caseId, answers })
  });
  if (!response.ok) throw new Error("Unable to evaluate prescription");
  return response.json();
}
