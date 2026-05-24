import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface OptionCardProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export default function OptionCard({ label, selected, onSelect }: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`min-h-24 rounded-lg border p-4 text-left text-base font-semibold transition ${
        selected
          ? "border-emerald-400 bg-emerald-50 text-emerald-950 shadow-soft"
          : "border-sky-100 bg-white text-slate-760 hover:border-sky-300 hover:bg-sky-50"
      }`}
    >
      <span className="flex items-start gap-3">
        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${selected ? "text-emerald-500" : "text-sky-200"}`} />
        <span>{label}</span>
      </span>
    </motion.button>
  );
}
