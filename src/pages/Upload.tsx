import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud } from "lucide-react";
import { uploadCaseDeck } from "../lib/api";
import { resetCompleted } from "../lib/progress";

export default function Upload() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Upload the dental prescriptions PPTX to rebuild playable cases locally.");
  const [busy, setBusy] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setStatus("Parsing slides into prescription cases...");
    try {
      const cases = await uploadCaseDeck(file);
      resetCompleted();
      sessionStorage.removeItem("prescription-master-current-case");
      setStatus(`Loaded ${cases.length} cases from ${file.name}.`);
      setTimeout(() => navigate("/game"), 600);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to parse this file.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="medical-bg min-h-screen p-4">
      <div className="mx-auto max-w-3xl py-10">
        <button type="button" onClick={() => navigate("/home")} className="font-bold text-sky-700">
          Back to Home
        </button>
        <section className="mt-5 rounded-lg border border-sky-100 bg-white p-7 shadow-soft">
          <h1 className="text-3xl font-black text-slate-950">Upload Prescription Cases PPTX</h1>
          <p className="mt-2 text-slate-600">{status}</p>
          <label className="mt-7 flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-sky-200 bg-sky-50 p-8 text-center transition hover:border-sky-400">
            <UploadCloud className="h-14 w-14 text-sky-500" />
            <span className="mt-4 text-xl font-black text-slate-800">
              {busy ? "Processing..." : "Choose PPTX File"}
            </span>
            <span className="mt-2 text-sm text-slate-500">PPT converted decks can be uploaded as .pptx.</span>
            <input
              className="hidden"
              type="file"
              accept=".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation"
              disabled={busy}
              onChange={(event) => handleFile(event.target.files?.[0])}
            />
          </label>
        </section>
      </div>
    </main>
  );
}
