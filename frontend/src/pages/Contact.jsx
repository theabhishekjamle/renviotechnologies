import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    objective: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      setIsSubmitted(true);
    } catch (err) {
      alert("Transmission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Branding & Identity",
    "Full-Stack Development",
    "Video Production",
    "Digital Marketing",
    "UI/UX Design",
    "Cyber Security Audit",
    "AI & Machine Learning",
    "Cloud Infrastructure",
    "Mobile App Development",
    "SEO & Content Strategy",
  ];

  const socialLinks = [
    { icon: <Instagram />, href: "https://instagram.com/renviotechnologies" },
    { icon: <Linkedin />, href: "https://linkedin.com" },
    { icon: <Twitter />, href: "https://twitter.com" },
  ];


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

      <div className="relative z-40 max-w-7xl mx-auto pt-24 pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-[#00ff11] animate-pulse" size={16} />
            <span className="text-[#00ff11] font-mono tracking-[0.4em] uppercase text-xs italic">
              // Global Connectivity
            </span>
          </div>
          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.85] uppercase">
            Start a <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px #00ff11" }}
            >
              Transmission.
            </span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20">
          <motion.div className="lg:col-span-5 space-y-16">
            <div className="space-y-4">
              <ContactMethod
                icon={<Mail />}
                label="Secure Email"
                value="reniotechnologies@gmail.com"
              />
              <ContactMethod
                icon={<Phone />}
                label="Voice Protocol"
                value="+91 7489951514"
              />
              <ContactMethod
                icon={<MapPin />}
                label="HQ Coordinates"
                value="Indore , India"
              />
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#00ff11",
                    color: "#000",
                  }}
                  className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-zinc-950/80 border border-zinc-800 p-12 rounded-[12px] backdrop-blur-xl space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Identity"
                    />
                    <InputField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                    />
                  </div>

                  {/* ✅ UPDATED: OBJECTIVE DROPDOWN SECTION */}
                  <div className="space-y-3 relative">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black ml-1">
                      Select Serivce
                    </label>
                    <div className="relative group">
                      <select
                        name="objective"
                        value={formData.objective}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-[#00ff11] focus:outline-none transition-colors appearance-none cursor-pointer text-zinc-400 focus:text-white"
                      >
                        <option value="" disabled>
                          Select a Protocol
                        </option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-zinc-950 text-white"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-focus-within:text-[#00ff11] transition-colors">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black ml-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-[#00ff11] focus:outline-none transition-colors"
                      placeholder="Define your vision..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#00ff11] font-bold cursor-pointer text-black py-6 font-bold  text-xs uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(0,255,17,0.2)] rounded-xl"
                  >
                    {loading ? "COMMUNICATING..." : "Submit "}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-zinc border border-[#00ff11]/30 p-20 rounded-[20px] text-center backdrop-blur-xl"
                >
                  <Sparkles className="text-[#00ff11] mx-auto mb-6" size={40} />
                  <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">
                    Message Received
                  </h2>
                  <p className="text-zinc-400 text-sm">
                    Response will be issued within 24 operational hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, label, value }) => (
  <div className="flex items-center gap-6">
    <div className="w-16 h-16 rounded-[10px] bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-[#00ff11]">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black">
        {label}
      </p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div className="space-y-3">
    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black ml-1">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required
      className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-[#00ff11] focus:outline-none transition-colors"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
