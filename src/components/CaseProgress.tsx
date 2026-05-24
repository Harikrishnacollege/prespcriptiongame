interface CaseProgressProps {
  completed: number;
  total: number;
}

export default function CaseProgress({ completed, total }: CaseProgressProps) {
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between text-sm font-bold text-slate-700">
        <span>Case Progress</span>
        <span>{completed}/{total}</span>
      </div>
      <div className="mt-3 h-3 overflow-hidden rounded-full bg-sky-100">
        <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
