import { motion } from "framer-motion";

export default function PageWrapper({ title, subtitle, children }) {
  return (
    <section className="relative min-h-screen bg-[#050608] text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl">{subtitle}</p>

        <div className="mt-24">{children}</div>
      </motion.div>
    </section>
  );
}
