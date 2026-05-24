import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <main className="medical-bg grid min-h-screen place-items-center p-4">
      <motion.section
        className="w-full max-w-xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="text-6xl"
          animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2 }}
        >
          🩺
        </motion.div>
        <motion.h1
          className="mt-4 text-5xl font-black text-slate-950"
          initial={{ letterSpacing: "0.05em" }}
          animate={{ letterSpacing: "0em" }}
        >
          Prescription Master
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <p className="mt-8 text-2xl font-bold text-slate-800">Hello Doctor Layana 👩‍⚕️</p>
          <p className="mt-2 text-lg text-slate-600">Welcome back.</p>
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="mt-9 rounded-lg bg-sky-500 px-8 py-4 text-lg font-black uppercase text-white shadow-soft transition hover:bg-sky-600"
          >
            Start Consultation
          </button>
        </motion.div>
      </motion.section>
    </main>
  );
}
