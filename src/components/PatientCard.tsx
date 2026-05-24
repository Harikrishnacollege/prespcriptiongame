import { motion } from "framer-motion";

interface PatientCardProps {
  speech: string;
  leaving?: boolean;
}

export default function PatientCard({ speech, leaving = false }: PatientCardProps) {
  return (
    <motion.div
      className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-xs font-bold uppercase text-sky-600">Patient</p>
      <p className="mt-2 text-xl font-semibold text-slate-800">
        {leaving ? "Thank you Doctor Layana ❤️" : speech}
      </p>
    </motion.div>
  );
}
