export type PrescriptionKey =
  | "drug"
  | "dose"
  | "dispense"
  | "route"
  | "frequency"
  | "instructions";

export type PrescriptionMap = Record<PrescriptionKey, string>;

export type CaseOptions = Record<PrescriptionKey, string[]>;

export interface PrescriptionCase {
  caseId: string;
  patientSpeech: string;
  diagnosis: string;
  age: number;
  sex: "Female" | "Male";
  prescriptionSections: PrescriptionMap;
  options: CaseOptions;
  correctAnswers: PrescriptionMap;
  explanations: PrescriptionMap;
}

export interface EvaluationMistake {
  section: PrescriptionKey;
  label: string;
  yourAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export interface EvaluationResult {
  score: number;
  maxScore: 100;
  isPerfect: boolean;
  mistakes: EvaluationMistake[];
}

export const SECTION_LABELS: Record<PrescriptionKey, string> = {
  drug: "Drug",
  dose: "Dose",
  dispense: "Dispense",
  route: "Route",
  frequency: "Frequency",
  instructions: "Instructions"
};

export const SECTION_WEIGHTS: Record<PrescriptionKey, number> = {
  drug: 40,
  dose: 20,
  dispense: 10,
  route: 15,
  frequency: 10,
  instructions: 5
};

export const PRESCRIPTION_KEYS = Object.keys(SECTION_LABELS) as PrescriptionKey[];
