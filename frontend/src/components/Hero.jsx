import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  BarChart3,
  ArrowRight,
  Cpu,
} from "lucide-react";

// --- DATA ---
const services = [
  {
    id: "01",
    title: "TECH SOLUTIONS",
    tagline: "CORE INFRASTRUCTURE",
    tag: "INFRASTRUCTURE",
    metric: "99.9% UPTIME",
    desc: "SCALABLE ARCHITECTURE AND AI-DRIVEN ECOSYSTEMS ENGINEERED FOR FUTURE-PROOF DIGITAL DOMINANCE.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    icon: <Zap size={20} />,
  },
  {
    id: "02",
    title: "GRAPHIC DESIGN",
    tagline: "VISUAL SYSTEMS",
    tag: "VISUAL IDENTITY",
    metric: "NEURO-READY",
    desc: "VISUAL SYSTEMS AND NEURO-BRANDING THAT DEFINE MARKET LEADERS THROUGH MINIMALIST PRECISION.",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
    icon: <Globe size={20} />,
  },
  {
    id: "03",
    title: "DIGITAL STRATEGY",
    tagline: "GROWTH MODELS",
    tag: "MARKET STRATEGY",
    metric: "4.5X SCALING",
    desc: "DATA-DRIVEN SCALING MODELS DESIGNED TO PENETRATE MODERN DIGITAL MARKETS AT VELOCITY.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    icon: <BarChart3 size={20} />,
  },
  {
    id: "04",
    title: "AI INTEGRATION",
    tagline: "NEURAL NETWORKS",
    tag: "AUTOMATION",
    metric: "85% EFFICIENCY",
    desc: "CUSTOM MACHINE LEARNING PIPELINES THAT AUTOMATE COMPLEX DECISION-MAKING PROCESSES.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    icon: <Cpu size={20} />,
  },
  {
    id: "05",
    title: "CYBER SECURITY",
    tagline: "DATA FORTRESS",
    tag: "PROTECTION",
    metric: "ZERO BREACH",
    desc: "MILITARY-GRADE ENCRYPTION AND PROACTIVE THREAT DETECTION FOR CRITICAL DIGITAL ASSETS.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
    icon: <ShieldCheck size={20} />,
  },
];

const stats = [
  { label: "Completed", value: "250+" },
  { label: "Global", value: "85", highlight: true },
  { label: "Codebase", value: "1.2M" },
  { label: "Success", value: "99%" },
  { label: "Nodes", value: "14" },
  { label: "Uptime", value: "99.9%" },
];

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Deep dive into architecture and goals.",
  },
  {
    id: "02",
    title: "Engineering",
    desc: "Precision development and visual systems.",
  },
  {
    id: "03",
    title: "Deployment",
    desc: "Aggressive market entry and scaling.",
  },
];

// --- SUB-COMPONENT: KINETIC SERVICE SECTION ---
const ServiceSection = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [120, -120]),
    springConfig
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      <motion.div
        style={{ y: bgTextY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0"
      >
        <span className="text-[60vw] font-black text-white select-none tracking-tighter">
          {service.id}
        </span>
      </motion.div>

      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-12 gap-16 items-center relative z-10">
        <div
          className={`md:col-span-6 ${index % 2 !== 0 ? "md:order-last" : ""}`}
        >
          <motion.div
            style={{ y: yImage }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        <div className="md:col-span-6">
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              className="h-px bg-[#00ff11]"
            />
            <span className="text-[#00ff11] font-mono text-xs uppercase">
              {service.tagline}
            </span>
          </div>

          {/* TITLE ANIMATION FIX: Reveal from bottom */}
          <div className="overflow-hidden mb-8">
            <motion.h3
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic"
            >
              {service.title}
            </motion.h3>
          </div>

          <p className="text-zinc-400 text-lg mb-12 max-w-lg">{service.desc}</p>
          <motion.button
            whileHover={{ x: 15 }}
            className="flex items-center gap-6 group"
          >
            <div className="w-16 h-16 rounded-full border border-[#00ff11]/30 flex items-center justify-center group-hover:bg-[#00ff11] transition-all">
              <ArrowUpRight className="text-[#00ff11] group-hover:text-black" />
            </div>
            <span className="text-white font-black tracking-widest text-xs uppercase">
              Initialize Case Study
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);
  const methodRef = useRef(null);

  // Global Scroll Transforms
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const yText = useTransform(smoothY, [0, 800], [0, -200]);
  const yBgText = useTransform(smoothY, [0, 800], [0, 150]);
  const heroOpacity = useTransform(smoothY, [0, 500], [1, 0]);
  const heroScale = useTransform(smoothY, [0, 500], [1, 0.8]);

  // Method Section Transforms
  const { scrollYProgress: methodScroll } = useScroll({
    target: methodRef,
    offset: ["start end", "end start"],
  });
  const methodTitleY = useTransform(methodScroll, [0, 1], [50, -50]);
  const methodListY = useTransform(methodScroll, [0, 1], [100, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const title1 = "Unrivaled".split("");
  const title2 = "INTELLIGENCE".split("");

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#00ff11] selection:text-black  overflow-x-hidden relative">
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 17, 0.08), transparent 80%)`,
        }}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,17,0.05),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[100vh]  flex flex-col justify-center items-center px-6 overflow-hidden">
        <motion.div
          style={{ y: yBgText }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0"
        >
          <h1 className="text-[50vw] font-black tracking-tighter">RNV</h1>
        </motion.div>

        <motion.div
          style={{ y: yText, opacity: heroOpacity, scale: heroScale }}
          className="z-10 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff11] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">
              Available for 2026 Projects
            </span>
          </div>

          <h2 className="text-[13vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase italic flex flex-col items-center">
            <div className="flex">
              {title1.map((l, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <div className="flex">
              {title2.map((l, i) => (
                <motion.span
                  key={i}
                  custom={i + 6}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px #00ff11" }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <p className="text-zinc-500 text-sm max-w-[280px] leading-relaxed">
              Renvio Technologies merges high-end videography with{" "}
              <span className="text-white">aggressive marketing</span>.
            </p>
            <motion.button
              whileHover={{
                scale: 1,
                boxShadow: "0 0 30px rgba(0,255,17,0.2 )",
              }}
              className="bg-[#00ff11] text-black px-12 py-5 rounded-full font-black text-xs uppercase cursor-pointer"
            >
              Start Experience
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- METHODOLOGY --- */}
      <section
        ref={methodRef}
        className="py-32 px-6 bg-black relative z-20 overflow-hidden border-t border-zinc-900"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div style={{ y: methodTitleY }}>
            <h3 className="text-5xl md:text-7xl font-black italic uppercase mb-8">
              The <span className="text-[#00ff11]">Method</span>
            </h3>
            <p className="text-zinc-500 uppercase tracking-widest text-[10px]">
              A systematic approach to digital dominance.
            </p>
          </motion.div>
          <motion.div style={{ y: methodListY }} className="flex flex-col">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group py-10 border-b border-zinc-800 flex items-start gap-10"
              >
                <span className="text-[#00ff11] font-mono text-sm">
                  {step.id}
                </span>
                <div>
                  <h4 className="text-3xl font-bold uppercase group-hover:text-[#00ff11] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-zinc-500 mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- STATS & SERVICES GRID --- */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-800 border border-zinc-800">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "rgba(24, 24, 27, 1)" }}
                className="bg-black p-10 group transition-all  min-h-[350px] flex flex-col justify-between transition-colors duration-500 relative overflow-hidden cursor-pointer"
              >
                <div className="text-zinc-600 group-hover:text-[#00ff11] transition-all">
                  {s.icon}
                </div>
                <div>
                  <span className="block text-[9px] text-[#00ff11] font-mono mb-2 uppercase">
                    {s.tag}
                  </span>
                  <h4 className="text-xl font-black text-white uppercase group-hover:cursor-pointer transition-all">
                    {s.title}
                  </h4>
                </div>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-[#00ff11] opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAIL SECTIONS --- */}
      <section className="bg-[#020202]">
        {services.map((service, i) => (
          <ServiceSection key={service.id} service={service} index={i} />
        ))}
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <h2 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase leading-none mb-16">
            EVOLVE <br /> <span className="text-[#00ff11]">NOW.</span>
          </h2>
          <button className="px-16 py-8 border-2 border-[#00ff11] text-[#00ff11] font-black uppercase tracking-[0.4em] text-xs hover:bg-[#00ff11] hover:text-black transition-all duration-700 shadow-[0_0_30px_rgba(0,255,17,0.1)]">
            Establish Connection
          </button>
        </div>
      </section>
    </div>
  );
}
