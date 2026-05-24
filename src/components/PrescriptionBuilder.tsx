import { useEffect, useMemo, useState } from "react";
import { FileCheck2 } from "lucide-react";
import { PrescriptionCase, PrescriptionKey, PrescriptionMap, PRESCRIPTION_KEYS, SECTION_LABELS } from "../lib/types";
import { shuffle } from "../lib/random";
import OptionCard from "./OptionCard";

interface PrescriptionBuilderProps {
  prescriptionCase: PrescriptionCase;
  onSubmit: (answers: Partial<PrescriptionMap>) => void;
}

export default function PrescriptionBuilder({ prescriptionCase, onSubmit }: PrescriptionBuilderProps) {
  const [answers, setAnswers] = useState<Partial<PrescriptionMap>>({});
  const sections = useMemo(() => shuffle(PRESCRIPTION_KEYS), [prescriptionCase.caseId]);
  const optionMap = useMemo(
    () =>
      sections.reduce((acc, key) => {
        acc[key] = shuffle(prescriptionCase.options[key]);
        return acc;
      }, {} as Record<PrescriptionKey, string[]>),
    [prescriptionCase.caseId, sections]
  );

  useEffect(() => {
    sessionStorage.setItem(`prescription-master-section-order-${prescriptionCase.caseId}`, JSON.stringify(sections));
  }, [prescriptionCase.caseId, sections]);

  const complete = PRESCRIPTION_KEYS.every((key) => answers[key]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
        <p className="text-xs font-bold uppercase text-sky-600">Prescription For</p>
        <h1 className="mt-1 text-3xl font-black text-slate-950">{prescriptionCase.diagnosis}</h1>
      </div>

      <div className="mt-5 space-y-5">
        {sections.map((key, index) => (
          <section key={key} className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
            <p className="text-sm font-black uppercase tracking-wide text-sky-600">Section {index + 1}</p>
            <h2 className="mt-1 text-2xl font-black text-slate-900">
              {key === "drug" ? "Select Drug" : SECTION_LABELS[key]}
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {optionMap[key].map((option) => (
                <OptionCard
                  key={option}
                  label={option}
                  selected={answers[key] === option}
                  onSelect={() => setAnswers((current) => ({ ...current, [key]: option }))}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="sticky bottom-0 mt-6 rounded-t-lg border border-sky-100 bg-white/95 p-4 shadow-soft backdrop-blur">
        <button
          type="button"
          disabled={!complete}
          onClick={() => onSubmit(answers)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-4 text-lg font-black text-white transition disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          <FileCheck2 className="h-6 w-6" />
          Submit Prescription
        </button>
      </div>
    </div>
  );
}
