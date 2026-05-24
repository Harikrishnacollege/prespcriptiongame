import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Play, Upload, Volume2, VolumeX } from "lucide-react";
import { fetchCases } from "../lib/api";
import { getCompletedCases, getSoundEnabled, setSoundEnabled } from "../lib/progress";
import CaseProgress from "../components/CaseProgress";

export default function Home() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [sound, setSound] = useState(getSoundEnabled());

  useEffect(() => {
    fetchCases().then((cases) => {
      setTotal(cases.length);
      setCompleted(getCompletedCases().filter((id) => cases.some((item) => item.caseId === id)).length);
    });
  }, []);

  const toggleSound = () => {
    setSound((current) => {
      setSoundEnabled(!current);
      return !current;
    });
  };

  return (
    <main className="medical-bg min-h-screen p-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 py-8">
        <header className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft">
          <p className="text-sm font-bold uppercase text-sky-600">Doctor Layana</p>
          <h1 className="mt-1 text-4xl font-black text-slate-950">Prescription Master</h1>
        </header>

        <CaseProgress completed={completed} total={total} />

        <section className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate("/game")}
            className="flex min-h-44 items-center justify-center gap-3 rounded-lg bg-sky-500 p-7 text-3xl font-black text-white shadow-soft transition hover:bg-sky-600"
          >
            <Play className="h-9 w-9 fill-white" />
            Start Playing
          </button>
          <div className="grid gap-4">
            <button
              type="button"
              onClick={() => navigate("/upload")}
              className="flex items-center justify-center gap-3 rounded-lg border border-sky-100 bg-white p-6 text-xl font-black text-slate-800 shadow-soft transition hover:bg-sky-50"
            >
              <Upload className="h-6 w-6 text-sky-500" />
              Upload Cases PPTX
            </button>
            <button
              type="button"
              onClick={() => navigate("/game", { state: { practice: true } })}
              className="flex items-center justify-center gap-3 rounded-lg border border-sky-100 bg-white p-6 text-xl font-black text-slate-800 shadow-soft transition hover:bg-sky-50"
            >
              <BookOpen className="h-6 w-6 text-emerald-500" />
              Practice Cases
            </button>
          </div>
        </section>

        <section className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
          <button
            type="button"
            onClick={toggleSound}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-sky-50 px-5 py-4 text-lg font-black text-sky-800"
          >
            {sound ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
            Sound {sound ? "On" : "Off"}
          </button>
        </section>
      </div>
    </main>
  );
}
