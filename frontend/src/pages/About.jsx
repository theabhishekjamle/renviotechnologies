import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Fingerprint,
  Code2,
  Activity,
  Globe2,
  ShieldCheck,
} from "lucide-react";
const stats = [
  { label: "Global Clints", value: "10+", unit: "" },
  { label: "Data Processed", value: "1.2", unit: "ML" },
  { label: "Uptime", value: "98.9", unit: "%" },
  { label: "Team", value: "32", unit: "HC" },
];

const team = [
  {
    name: "Abhishek Jamle",
    role: "Director And Founder",
    img: "https://drive.google.com/file/d/1jFOMnSk9yFIaUTRto4A-8ZCDQMvpXRtO/view?usp=sharing",
  },
  {
    name: "SARAH VEST",
    role: "NEURAL LEAD",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "MARCUS KANE",
    role: "STRATEGY OPS",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  },
];
// --- CLEAN DATA ---
const pillars = [
  {
    id: "01",
    title: "DIGITAL FORENSICS",
    desc: "We analyze market gaps with surgical precision before a single line of code is written.",
    icon: <Fingerprint size={20} />,
  },
  {
    id: "02",
    title: "NEURAL ARCHITECTURE",
    desc: "Building scalable ecosystems that learn and adapt to user behavior in real-time.",
    icon: <Code2 size={20} />,
  },
  {
    id: "03",
    title: "VELOCITY SCALING",
    desc: "Deploying high-impact campaigns that penetrate saturated markets at terminal velocity.",
    icon: <Activity size={20} />,
  },
  {
    id: "04",
    title: "GLOBAL EDGE",
    desc: "Infrastructure designed for low-latency dominance across all major digital nodes.",
    icon: <Globe2 size={20} />,
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Scroll Animations
  const horizontalText = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const imageScale = useTransform(smoothProgress, [0.2, 0.5], [1.2, 1]);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#00ff11] selection:text-black  overflow-x-hidden relative">
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

      {/* --- SECTION 1: THE RUNNING HEADER --- */}
      <section className="pt-40 pb-20 border-b border-zinc-900">
        <div className="whitespace-nowrap flex overflow-hidden">
          <motion.h2
            style={{ x: horizontalText }}
            className="text-[15vw] font-black uppercase tracking-tighter leading-none opacity-10 italic"
          >
            BEYOND ANALOG BEYOND LIMITS BEYOND ANALOG BEYOND LIMITS
          </motion.h2>
        </div>
      </section>

      {/* --- SECTION 2: FOUNDER'S STATEMENT --- */}
      <section className="py-24 px-6 md:px-20 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <span className="text-[#00ff11] font-mono text-[10px] tracking-[0.4em] uppercase mb-8 block">
            // THE FOUNDER
          </span>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
            "WE DON'T COMPETE <br /> WITH THE MARKET, <br /> WE{" "}
            <span className="text-[#00ff11]">REWRITE</span> IT."
          </h3>
          <div className="flex items-center gap-6 border-t border-zinc-900 pt-10">
            <div className="w-16 h-16 rounded-full overflow-hidden grayscale">
              <img
                src="../assets/images/founder.jpeg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-black uppercase tracking-widest text-sm">
                Abhishek Jamle
              </p>
              <p className="text-zinc-600 text-xs font-mono">
                Director And Founder
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex items-center">
          <p className="text-zinc-500 text-lg leading-relaxed border-l border-[#00ff11]/30 pl-8 italic">
            "Our philosophy is simple: Eliminate noise. Every system we build is
            a high-velocity asset designed to perform under extreme market
            pressure."
          </p>
        </div>
      </section>

      {/* --- SECTION 3: COMPANY STATS (THE GRID) --- */}
      <section className="py-20 px-6 md:px-20 bg-zinc-900/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 shadow-2xl">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#020202] p-12 text-center group hover:bg-zinc-900/50 transition-all"
            >
              <span className="text-zinc-600 font-mono text-[10px] uppercase mb-4 block tracking-widest">
                {s.label}
              </span>
              <h4 className="text-5xl md:text-7xl font-black text-white tracking-tighter group-hover:text-[#00ff11] transition-colors">
                {s.value}
                <span className="text-xl text-[#00ff11]">{s.unit}</span>
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: CLIENT NODES (Logos) --- */}
      <section className="py-24 border-y border-zinc-900 opacity-40 hover:opacity-100 transition-opacity grayscale">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex justify-around items-center gap-12 flex-wrap">
            {["SYNERGY", "VORTEX", "NEURAL", "AXION", "QUANTUM"].map(
              (client) => (
                <span
                  key={client}
                  className="text-2xl font-black tracking-widest text-zinc-500"
                >
                  {client}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
      {/* --- SECTION 2: THE IDENTITY --- */}
      <section className="py-32 px-6 md:px-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-[#00ff11]" />
            <span className="text-[#00ff11] font-mono text-[10px] tracking-[0.4em] uppercase">
              Status: Operational
            </span>
          </motion.div>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-12">
            WE DONT BUILD <br /> WE{" "}
            <span className="text-[#00ff11]">ENGINEER</span>.
          </h3>
          <p className="text-zinc-500 text-xl md:text-2xl max-w-xl leading-relaxed">
            Renvio is a closed-circuit collective of designers and developers
            stripping away the fluff of modern tech to focus on one thing:
            <span className="text-white"> Unrivaled Performance.</span>
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col justify-end">
          <div className="border-l border-zinc-800 pl-8 py-4">
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest leading-loose">
              EST // 2026 <br />
              LOC // GLOBAL NODES <br />
              TYPE // HIGH-VELOCITY FOUNDRY
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE PILLARS (STRATEGIC GRID) --- */}
      <section className="py-40 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#080808" }}
              className="bg-[#020202] p-12 flex flex-col justify-between aspect-square group transition-all duration-500"
            >
              <div className="text-zinc-700 group-hover:text-[#00ff11] transition-colors">
                {p.icon}
              </div>
              <div>
                <span className="text-[#00ff11] font-mono text-[10px] mb-2 block">
                  {p.id}
                </span>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:cursor-pointer transition-all">
                  {p.title}
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wider group-hover:text-zinc-300">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: THE NETWORK CALL --- */}
      <section className="py-40 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-10">
            SYSTEMS <span className="text-[#00ff11]">READY</span>.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-6 mx-auto group"
          >
            <div className="w-20 h-20 rounded-full border border-[#00ff11]/40 flex items-center justify-center group-hover:bg-[#00ff11] transition-all duration-500">
              <ArrowUpRight className="text-[#00ff11] group-hover:text-black" />
            </div>
            <div className="text-left">
              <span className="block text-white font-black text-xs uppercase tracking-[0.3em]">
                Integrate Now
              </span>
              <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-tighter">
                Connection Secure // 256-bit
              </span>
            </div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
