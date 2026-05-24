import { motion } from "framer-motion";

const colors = ["#38bdf8", "#22c55e", "#f59e0b", "#ef4444", "#a855f7", "#14b8a6"];

export default function Confetti() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {Array.from({ length: 70 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-3 w-2 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            background: colors[index % colors.length]
          }}
          initial={{ y: -30, rotate: 0, opacity: 1 }}
          animate={{ y: "105vh", rotate: 360, opacity: [1, 1, 0] }}
          transition={{ duration: 1.8 + Math.random(), delay: Math.random() * 0.3, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
