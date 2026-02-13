import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  LayoutGrid,
  PlayCircle,
  Fingerprint,
  Globe,
} from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const categories = [
    "all",
    "videography",
    "editing",
    "graphic design",
    "e-commerce",
  ];

  const projects = [
    {
      id: 1,
      title: "Cyber Reel",
      cat: "videography",
      size: "md:col-span-2 md:row-span-2",
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000",
    },
    {
      id: 2,
      title: "Retail UI",
      cat: "e-commerce",
      size: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000",
    },
    {
      id: 3,
      title: "Motion",
      cat: "editing",
      size: "md:col-span-1 md:row-span-2",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000",
    },
    {
      id: 4,
      title: "Brand X",
      cat: "graphic design",
      size: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000",
    },
    {
      id: 5,
      title: "Velocity",
      cat: "videography",
      size: "md:col-span-2 md:row-span-1",
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-32 pb-20 px-6 selection:bg-[#00ff11] selection:text-black cursor-default overflow-hidden relative">
      {/* Interactive Background Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 17, 0.05), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 text-[#00ff11] font-mono text-[10px] tracking-[0.5em] uppercase">
              <Fingerprint size={14} /> [ Authorized Access Only ]
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              SELECTED <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #00ff11" }}
              >
                WORKS
              </span>
            </h1>
          </motion.div>

          {/* NAV FILTERS */}
          <nav className="flex flex-wrap gap-4 mt-12 border-b border-zinc-800 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`group relative py-2 pr-8 text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  filter === cat
                    ? "text-[#00ff11]"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ff11]"
                  />
                )}
              </button>
            ))}
          </nav>
        </header>

        {/* BENTO GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm cursor-pointer ${project.size}`}
              >
                {/* Image Component */}
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Glass Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[2px]">
                  <div className="flex justify-between items-start">
                    <span className="bg-[#00ff11] text-black px-3 py-1 rounded-full text-[10px] font-black uppercase">
                      {project.cat}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 font-mono tracking-widest">
                      VIEW_CASE_STUDY_00{project.id}
                    </p>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#00ff11] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EXPLORE MORE */}
        <footer className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] cursor-pointer hover:bg-[#00ff11] transition-colors"
          >
            Load Full Archive <LayoutGrid size={16} />
          </motion.button>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
