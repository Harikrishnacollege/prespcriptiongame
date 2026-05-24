import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { fetchCases } from "../lib/api";
import { getCompletedCount } from "../lib/progress";
import Confetti from "./Confetti";

interface ScoreModalProps {
  score: number;
  perfect: boolean;
}

export default function ScoreModal({ score, perfect }: ScoreModalProps) {
  const navigate = useNavigate();

  const goNext = async () => {
    const cases = await fetchCases();
    const completed = getCompletedCount(cases.map((item) => item.caseId));
    navigate(completed >= cases.length ? "/hari" : "/game", { state: { next: true } });
  };

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-slate-900/35 p-4">
      {perfect && <Confetti />}
      <motion.div
        className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-soft"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-3xl font-black text-slate-900">{perfect ? "🎉 Correct Doctor!" : "Prescription Submitted"}</h2>
        <p className="mt-2 text-lg text-slate-600">{perfect ? "Excellent Prescription." : "Review your prescription."}</p>
        <p className="mt-6 text-5xl font-black text-sky-600">{score}/100</p>
        <div className="mt-7 flex gap-3">
          {!perfect && (
            <button
              type="button"
              onClick={() => navigate("/prescription")}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-sky-200 px-4 py-3 font-bold text-sky-700"
            >
              <RotateCcw className="h-5 w-5" />
              Try Again
            </button>
          )}
          <button
            type="button"
            onClick={goNext}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3 font-bold text-white"
          >
            Next Patient
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
