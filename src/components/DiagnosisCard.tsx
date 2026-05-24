interface DiagnosisCardProps {
  diagnosis: string;
  age: number;
  sex: string;
}

export default function DiagnosisCard({ diagnosis, age, sex }: DiagnosisCardProps) {
  return (
    <section className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft">
      <div className="border-y border-dashed border-sky-200 py-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-sky-600">Diagnosis</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">🩺 {diagnosis}</h1>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-sky-50 p-4">
          <p className="text-xs font-bold uppercase text-sky-700">Age</p>
          <p className="text-2xl font-black">{age}</p>
        </div>
        <div className="rounded-lg bg-cyan-50 p-4">
          <p className="text-xs font-bold uppercase text-cyan-700">Sex</p>
          <p className="text-2xl font-black">{sex}</p>
        </div>
      </div>
    </section>
  );
}
