import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  BarChart3,
  ArrowRight,
  Cpu,
} from "lucide-react";

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
    icon: <Cpu size={20} />, // Make sure to import Cpu from lucide-react
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
  { label: "Projects Completed", value: "250+" },
  { label: "Global Clients", value: "85", highlight: true },
  { label: "Lines of Code", value: "1.2M" },
  { label: "Success Rate", value: "99%" },
  { label: "Success Rate", value: "99%" },
  { label: "Success Rate", value: "99%" },
];

export default function Services() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const servicesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  const servicesGridY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    
    <section className="bg-[#020202] py-40 overflow-hidden relative selection:bg-[#00ff11] selection:text-black">
      {/* Dynamic Cursor Light */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 17, 0.05), transparent 80%)`,
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

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />

      {/* HEADER SECTION */}
      <div className="px-6 md:px-20 mb-60 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-10"
        >
          <div className="max-w-4xl">
            <span className="text-[#00ff11] font-mono tracking-[0.5em] text-xs mb-6 block uppercase">
              Services
            </span>
            <h1 className="text-white text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">
              Renvio
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #00ff11" }}
              >
                Provides
              </span>
            </h1>
          </div>
          <div className="pb-4">
            <p className="text-zinc-500 font-mono text-sm max-w-[250px] leading-relaxed border-l border-[#00ff11]/30 pl-4">
              *INTEGRATING HIGH-VELOCITY TECH WITH ELITE VISUAL NARRATIVES.
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- ADDED SECTION: FULL STACK GRID & STATS --- */}
      <section
        ref={servicesRef}
        className="relative z-20 max-w-7xl mx-auto px-6 py-32 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter max-w-md text-white uppercase"
          >
            WE PROVIDE THE <span className="text-[#00ff11]">FULL STACK</span> OF
            DIGITAL CREATION.
          </motion.h3>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] border-b border-[#00ff11] pb-2 cursor-pointer hover:text-white transition-colors">
            Explore our Capabilities
          </p>
        </div>

        {/* Company Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-zinc-800 border-y border-zinc-800 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-black p-10 text-center">
              <h4
                className={`text-4xl font-black ${
                  stat.highlight ? "text-[#00ff11]" : "text-white"
                } tracking-tighter`}
              >
                {stat.value}
              </h4>
              <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Full Stack Grid */}
        <motion.div
          style={{ y: servicesGridY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-800 border border-zinc-800"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "rgba(24, 24, 27, 1)" }}
              className="bg-black p-10 group transition-all duration-500 relative overflow-hidden cursor-pointer"
            >
              <div className="text-zinc-500 group-hover:text-[#00ff11] transition-colors mb-20 transform group-hover:-translate-y-2 duration-300">
                {s.icon}
              </div>
              <span className="block text-[10px] text-[#00ff11] font-mono mb-2 tracking-tighter uppercase">
                {s.tag}
              </span>
              <h4 className="text-xl font-bold mb-4 text-white uppercase">
                {s.title}
              </h4>
              <ArrowRight
                className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#00ff11]"
                size={18}
              />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-[#00ff11] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICE LIST (Kinetic Sections) */}
      <div className="space-y-[40vh] pb-[20vh]">
        {services.map((service, i) => (
          <ServiceSection key={i} service={service} index={i} />
        ))}
      </div>
      <div className="space-y-[40vh] pb-[20vh]">
        {services.map((service, i) => (
          <ServiceSection key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

const ServiceSection = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const yImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -100]),
    springConfig
  );
  const skewImage = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const bgTextRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgTextY, rotate: bgTextRotate, scale: scaleImage }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] z-0"
      >
        <span className="text-[60vw] font-black text-white leading-none select-none">
          {service.id}
        </span>
      </motion.div>

      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div
          className={`md:col-span-6 relative ${
            index % 2 !== 0 ? "md:order-last" : ""
          }`}
        >
          <motion.div
            style={{ y: yImage, skewY: skewImage }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group bg-zinc-900 shadow-2xl"
          >
            <motion.img
              style={{ scale: 1.2 }}
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex justify-between items-center text-white font-black text-xs tracking-widest uppercase">
                <span>{service.metric}</span>
                <ShieldCheck className="text-[#00ff11]" size={16} />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                className="h-[1px] bg-[#00ff11]"
              />
              <span className="text-[#00ff11] font-mono font-bold text-sm tracking-[0.3em] uppercase">
                {service.tagline}
              </span>
              <div className="text-[#00ff11]">{service.icon}</div>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic"
              >
                {service.title}
              </motion.h3>
            </div>
            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-12">
              {service.desc}
            </p>
            <motion.button
              whileHover="hover"
              className="relative flex items-center gap-6 group cursor-pointer w-fit"
            >
              <div className="w-16 h-16 rounded-full border border-[#00ff11]/30 flex items-center justify-center group-hover:bg-[#00ff11] group-hover:shadow-[0_0_20px_#00ff11] transition-all duration-500">
                <ArrowUpRight className="text-[#00ff11] group-hover:text-black transition-colors" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-black tracking-widest text-sm uppercase">
                  Initialize Case Study
                </span>
                <span className="text-[#00ff11] font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                  Ready for deployment
                </span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
