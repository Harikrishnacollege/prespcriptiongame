import cors from "cors";
import express from "express";
import multer from "multer";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { EvaluationResult, PrescriptionCase, PRESCRIPTION_KEYS, SECTION_LABELS, SECTION_WEIGHTS } from "../src/lib/types";
import { parseDefaultDeck, parseUploadedDeck } from "./parser";

const upload = multer({ dest: path.join(os.tmpdir(), "prescription-master-uploads") });
const app = express();

let cases: PrescriptionCase[] = [];

app.use(cors());
app.use(express.json());

function ensureCases(): PrescriptionCase[] {
  if (!cases.length) {
    cases = parseDefaultDeck();
  }
  return cases;
}

app.post("/api/parse-pdf", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "Upload a PPTX file to extract prescription cases." });
    return;
  }

  const ext = path.extname(req.file.originalname).toLowerCase();
  if (ext !== ".pptx") {
    fs.unlink(req.file.path, () => undefined);
    res.status(400).json({ error: "This build reads PPTX prescription decks. Please upload a .pptx file." });
    return;
  }

  try {
    cases = parseUploadedDeck(req.file.path);
    res.json({ cases, count: cases.length });
  } catch (error) {
    res.status(422).json({ error: error instanceof Error ? error.message : "Unable to parse the uploaded deck." });
  } finally {
    fs.unlink(req.file.path, () => undefined);
  }
});

app.get("/api/cases", (_req, res) => {
  try {
    res.json({ cases: ensureCases() });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : "Unable to load cases." });
  }
});

app.post("/api/evaluate", (req, res) => {
  const { caseId, answers } = req.body as { caseId?: string; answers?: Record<string, string> };
  const prescriptionCase = ensureCases().find((item) => item.caseId === caseId);
  if (!prescriptionCase || !answers) {
    res.status(400).json({ error: "caseId and answers are required." });
    return;
  }

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

  res.json({
    score,
    maxScore: 100,
    isPerfect: score === 100,
    mistakes
  } satisfies EvaluationResult);
});

export default app;
