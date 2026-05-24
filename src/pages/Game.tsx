import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipboardPenLine } from "lucide-react";
import AnimatedPatient from "../components/AnimatedPatient";
import DiagnosisCard from "../components/DiagnosisCard";
import PatientCard from "../components/PatientCard";
import { fetchCases } from "../lib/api";
import { getCompletedCases, resetCompleted } from "../lib/progress";
import { shuffle } from "../lib/random";
import { PrescriptionCase } from "../lib/types";

const CURRENT_KEY = "prescription-master-current-case";
const ORDER_KEY = "prescription-master-case-order";

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState<PrescriptionCase | null>(null);
  const [leaving, setLeaving] = useState(Boolean(location.state?.next));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError("");
    fetchCases()
      .then((cases) => {
        if (!alive) return;
        if (!cases.length) {
          setError("No prescription cases were found. Upload the PPTX again from Practice Cases.");
          setLoading(false);
          return;
        }
        const next = chooseCase(cases, Boolean(location.state?.practice || location.state?.next));
        setCurrent(next);
        setLoading(false);
        setTimeout(() => setLeaving(false), 950);
      })
      .catch(() => {
        if (!alive) return;
        setError("Cases could not be loaded. Please refresh or upload the PPTX again.");
        setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [location.state]);

  const startPrescription = () => {
    if (!current) return;
    sessionStorage.setItem(CURRENT_KEY, current.caseId);
    navigate("/prescription");
  };

  if (loading) {
    return <main className="medical-bg grid min-h-screen place-items-center font-black text-sky-700">Preparing consultation...</main>;
  }

  if (error || !current) {
    return (
      <main className="medical-bg grid min-h-screen place-items-center p-4">
        <section className="max-w-md rounded-lg border border-sky-100 bg-white p-6 text-center shadow-soft">
          <h1 className="text-2xl font-black text-slate-950">Cases did not load</h1>
          <p className="mt-3 text-slate-600">{error || "No case is available right now."}</p>
          <div className="mt-6 grid gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-lg bg-sky-500 px-5 py-3 font-black text-white"
            >
              Retry
            </button>
            <button
              type="button"
              onClick={() => navigate("/upload")}
              className="rounded-lg border border-sky-200 px-5 py-3 font-black text-sky-700"
            >
              Upload PPTX
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="medical-bg min-h-screen p-4">
      <div className="mx-auto grid max-w-6xl gap-6 py-8 lg:grid-cols-[1fr_1.1fr]">
        <section className="flex flex-col justify-end gap-4">
          <AnimatedPatient leaving={leaving} />
          <PatientCard speech={current.patientSpeech} leaving={leaving} />
        </section>
        <section className="flex flex-col justify-center gap-5">
          <DiagnosisCard diagnosis={current.diagnosis} age={current.age} sex={current.sex} />
          <button
            type="button"
            onClick={startPrescription}
            className="flex items-center justify-center gap-3 rounded-lg bg-emerald-500 px-7 py-5 text-xl font-black uppercase text-white shadow-soft transition hover:bg-emerald-600"
          >
            <ClipboardPenLine className="h-7 w-7" />
            Start Prescription
          </button>
        </section>
      </div>
    </main>
  );
}

function chooseCase(cases: PrescriptionCase[], forceNext: boolean): PrescriptionCase {
  const completed = getCompletedCases();
  if (completed.length >= cases.length) {
    resetCompleted();
  }

  const validCompleted = getCompletedCases();
  let order = JSON.parse(sessionStorage.getItem(ORDER_KEY) ?? "[]") as string[];
  const caseIds = cases.map((item) => item.caseId);
  if (!order.length || order.some((id) => !caseIds.includes(id))) {
    order = shuffle(caseIds);
    sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
  }

  const currentId = sessionStorage.getItem(CURRENT_KEY);
  if (currentId && !forceNext) {
    const existing = cases.find((item) => item.caseId === currentId);
    if (existing && !validCompleted.includes(existing.caseId)) return existing;
  }

  const nextId = order.find((id) => !validCompleted.includes(id)) ?? shuffle(caseIds)[0];
  sessionStorage.setItem(CURRENT_KEY, nextId);
  return cases.find((item) => item.caseId === nextId) ?? cases[0];
}
