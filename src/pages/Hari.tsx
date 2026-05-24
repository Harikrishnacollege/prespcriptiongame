import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Heart, Home, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hari() {
  const navigate = useNavigate();
  const captureRef = useRef<HTMLDivElement>(null);
  const [meter, setMeter] = useState(88);
  const [sharing, setSharing] = useState(false);
  const lastScore = useMemo(() => {
    const raw = sessionStorage.getItem("prescription-master-result");
    if (!raw) return 100;
    try {
      return JSON.parse(raw).result.score as number;
    } catch {
      return 100;
    }
  }, []);

  const shareToHari = async () => {
    if (!captureRef.current) return;
    setSharing(true);
    try {
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: "#eff8ff",
        scale: 2
      });
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
      const text = `Prescription Master finished! Final score: ${lastScore}/100. Hariii meter: ${meter}%.`;

      if (blob && navigator.canShare) {
        const file = new File([blob], "hariii-meter.png", { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "Do you like Hariii?",
            text,
            files: [file]
          });
          return;
        }
      }

      if (navigator.share) {
        await navigator.share({
          title: "Do you like Hariii?",
          text
        });
        return;
      }

      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    } finally {
      setSharing(false);
    }
  };

  return (
    <main className="medical-bg min-h-screen p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 py-8">
        <section
          ref={captureRef}
          className="overflow-hidden rounded-lg border border-rose-100 bg-white shadow-soft"
        >
          <div className="bg-rose-50 p-8 text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white shadow-soft">
              <Heart className="h-11 w-11 fill-rose-400 text-rose-400" />
            </div>
            <h1 className="mt-5 text-4xl font-black text-slate-950">Do you like Hariii?</h1>
            <p className="mt-2 text-lg font-semibold text-slate-600">Prescription Master completed</p>
          </div>

          <div className="space-y-6 p-7">
            <div className="rounded-lg bg-sky-50 p-5 text-center">
              <p className="text-sm font-black uppercase text-sky-700">Final Prescription Score</p>
              <p className="mt-1 text-5xl font-black text-sky-600">{lastScore}/100</p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-black text-slate-900">Hariii Meter</p>
                <p className="text-2xl font-black text-rose-500">{meter}%</p>
              </div>
              <div className="mt-3 h-6 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-rose-400 transition-all"
                  style={{ width: `${meter}%` }}
                />
              </div>
              <input
                aria-label="Hariii meter"
                className="mt-5 w-full accent-rose-500"
                type="range"
                min="0"
                max="100"
                value={meter}
                onChange={(event) => setMeter(Number(event.target.value))}
              />
            </div>

            <p className="rounded-lg bg-emerald-50 p-4 text-center text-lg font-bold text-emerald-900">
              Thank you Doctor Layana ❤️
            </p>
          </div>
        </section>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={shareToHari}
            disabled={sharing}
            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-4 text-lg font-black text-white shadow-soft disabled:bg-slate-300"
          >
            <Send className="h-5 w-5" />
            {sharing ? "Preparing..." : "Send This To Hari"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="flex items-center justify-center gap-2 rounded-lg border border-sky-200 bg-white px-5 py-4 text-lg font-black text-sky-700"
          >
            <Home className="h-5 w-5" />
            Home
          </button>
        </div>
      </div>
    </main>
  );
}
