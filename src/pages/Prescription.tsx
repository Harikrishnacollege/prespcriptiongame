import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrescriptionBuilder from "../components/PrescriptionBuilder";
import { evaluatePrescription, fetchCases } from "../lib/api";
import { markCompleted } from "../lib/progress";
import { EvaluationResult, PrescriptionCase, PrescriptionMap } from "../lib/types";

const CURRENT_KEY = "prescription-master-current-case";
const RESULT_KEY = "prescription-master-result";

export default function Prescription() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<PrescriptionCase | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetchCases().then((cases) => {
      const currentId = sessionStorage.getItem(CURRENT_KEY);
      const nextCase = cases.find((item) => item.caseId === currentId) ?? cases[0];
      if (!nextCase) navigate("/home");
      setCurrent(nextCase);
    });
  }, [navigate]);

  const submit = async (answers: Partial<PrescriptionMap>) => {
    if (!current) return;
    setBusy(true);
    const result: EvaluationResult = await evaluatePrescription(current.caseId, answers);
    sessionStorage.setItem(RESULT_KEY, JSON.stringify({ result, caseId: current.caseId, diagnosis: current.diagnosis }));
    if (result.isPerfect) {
      markCompleted(current.caseId);
    }
    navigate("/result");
  };

  if (!current) {
    return <main className="medical-bg grid min-h-screen place-items-center font-black text-sky-700">Loading prescription pad...</main>;
  }

  return (
    <main className="medical-bg min-h-screen">
      {busy && <div className="fixed inset-0 z-40 grid place-items-center bg-white/60 font-black text-sky-700">Checking prescription...</div>}
      <PrescriptionBuilder prescriptionCase={current} onSubmit={submit} />
    </main>
  );
}
