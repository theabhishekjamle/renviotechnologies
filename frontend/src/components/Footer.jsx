import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update clock for that "Global Agency" feel
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { title: "Navigation", links: ["Home", "Work", "Services", "Process"] },
    {
      title: "Social",
      links: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/renviotechnologies/",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/renviotechnologies/",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/renviotech",
        },
        {
          name: "Behance",
          url: "https://www.behance.net/",
        },
      ],
    },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION: BIG STATEMENT MARQUEE */}
        <div className="overflow-hidden border-b border-zinc-800 pb-20 mb-20">
          <motion.h2
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[15vw] font-black uppercase italic leading-none whitespace-nowrap text-zinc-900 hover:text-[#00ff11] transition-colors duration-700 cursor-default"
          >
            LET'S CREATE THE FUTURE • RENVIO TECHNOLOGIES •
          </motion.h2>
        </div>

        {/* MIDDLE SECTION: GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black italic mb-6">RENVIO.</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
              Defining the visual landscape through tech-driven creativity and
              aggressive marketing.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#00ff11] font-bold">
                {group.title}
              </span>

              <ul className="flex flex-col gap-2">
                {group.links.map((link, i) => {
                  // If link is an object (Social section)
                  if (typeof link === "object") {
                    return (
                      <li key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                          {link.name}
                        </a>
                      </li>
                    );
                  }

                  // If link is a string (Navigation / Legal)
                  return (
                    <li key={i}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                        className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: UTILS & COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-10 border-t border-zinc-900">
          {/* System Info */}
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-600 text-[9px] uppercase tracking-tighter">
                Local Time
              </span>
              <span className="font-mono text-xs">{time} PST</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-600 text-[9px] uppercase tracking-tighter">
                System Status
              </span>
              <span className="font-mono text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff11] animate-pulse" />
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-4 bg-zinc-900 p-4 rounded-full border border-zinc-800 hover:border-[#00ff11] transition-colors"
          >
            <span className="text-[10px] font-black uppercase tracking-widest ml-2">
              Back to Top
            </span>
            <div className="w-10 h-10 bg-[#00ff11] rounded-full flex items-center justify-center text-black">
              <ArrowUp size={20} />
            </div>
          </motion.button>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
            Designed by Renvio Lab / Developed 2026
          </p>
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Renvio Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
