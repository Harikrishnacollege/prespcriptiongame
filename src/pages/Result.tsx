import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import ScoreModal from "../components/ScoreModal";
import { fetchCases } from "../lib/api";
import { getCompletedCount, markCompleted } from "../lib/progress";
import { EvaluationResult } from "../lib/types";

const RESULT_KEY = "prescription-master-result";

export default function Result() {
  const navigate = useNavigate();
  const payload = useMemo(() => {
    const raw = sessionStorage.getItem(RESULT_KEY);
    return raw ? (JSON.parse(raw) as { result: EvaluationResult; caseId: string; diagnosis: string }) : null;
  }, []);

  if (!payload) {
    return <main className="medical-bg grid min-h-screen place-items-center font-black text-sky-700">No result to review.</main>;
  }

  const { result, caseId, diagnosis } = payload;

  const nextCase = async () => {
    markCompleted(caseId);
    const cases = await fetchCases();
    const completed = getCompletedCount(cases.map((item) => item.caseId));
    navigate(completed >= cases.length ? "/hari" : "/game", { state: { next: true } });
  };

  if (result.isPerfect) {
    return (
      <main className="medical-bg min-h-screen">
        <ScoreModal score={result.score} perfect />
      </main>
    );
  }

  return (
    <main className="medical-bg min-h-screen p-4">
      <div className="mx-auto max-w-4xl py-8">
        <section className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft">
          <p className="text-sm font-bold uppercase text-sky-600">Prescription Review</p>
          <h1 className="mt-1 text-3xl font-black text-slate-950">{diagnosis}</h1>
          <p className="mt-5 text-5xl font-black text-sky-600">{result.score}/100</p>
        </section>

        <div className="mt-5 space-y-4">
          {result.mistakes.map((mistake) => (
            <section key={mistake.section} className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-black text-slate-900">{mistake.label}</h2>
              <p className="mt-4 font-bold text-rose-600">❌ Your Answer:</p>
              <p className="mt-1 rounded-lg bg-rose-50 p-3 text-slate-800">{mistake.yourAnswer}</p>
              <p className="mt-4 font-bold text-emerald-700">✅ Correct:</p>
              <p className="mt-1 rounded-lg bg-emerald-50 p-3 text-slate-800">{mistake.correctAnswer}</p>
              <p className="mt-4 font-bold text-sky-700">Explanation:</p>
              <p className="mt-1 text-slate-700">{mistake.explanation}</p>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate("/prescription")}
            className="flex items-center justify-center gap-2 rounded-lg border border-sky-200 bg-white px-5 py-4 text-lg font-black text-sky-700"
          >
            <RotateCcw className="h-5 w-5" />
            Try Again
          </button>
          <button
            type="button"
            onClick={nextCase}
            className="flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-4 text-lg font-black text-white"
          >
            Next Case
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
