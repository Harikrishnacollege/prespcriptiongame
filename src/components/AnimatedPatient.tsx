import { motion } from "framer-motion";

interface AnimatedPatientProps {
  leaving?: boolean;
}

export default function AnimatedPatient({ leaving = false }: AnimatedPatientProps) {
  return (
    <motion.div
      className="relative mx-auto flex h-72 w-56 items-end justify-center"
      initial={{ x: leaving ? 0 : -280, opacity: leaving ? 1 : 0 }}
      animate={{ x: leaving ? 280 : 0, opacity: leaving ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
    >
      <motion.div
        className="absolute bottom-0 h-44 w-32 rounded-t-full bg-sky-200 shadow-soft"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      />
      <div className="absolute bottom-36 h-24 w-24 rounded-full bg-amber-100 shadow-lg" />
      <div className="absolute bottom-52 h-12 w-28 rounded-t-full bg-slate-700" />
      <div className="absolute bottom-48 left-16 h-3 w-3 rounded-full bg-slate-800" />
      <div className="absolute bottom-48 right-16 h-3 w-3 rounded-full bg-slate-800" />
      <div className="absolute bottom-43 h-2 w-10 rounded-full bg-rose-300" />
      <div className="absolute bottom-16 left-7 h-20 w-5 origin-top rounded-full bg-sky-300" />
      <div className="absolute bottom-16 right-7 h-20 w-5 origin-top rounded-full bg-sky-300" />
    </motion.div>
  );
}
