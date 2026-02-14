import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  // 1. Mouse Position Logic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 3. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Submit to Backend → MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
     
      const res = await fetch( "https://renviotechnologies.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // ✅ Success → redirect
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 5. Animations
  const containerVars = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 17, 0.08), transparent 80%)`,
        }}
      />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative z-40"
      >
        <motion.div variants={itemVars} className="text-center mb-10">
          <h2 className="text-[#00ff11] font-mono tracking-[0.3em] uppercase text-[10px] mb-2">
            New Node
          </h2>
          <h1 className="text-4xl font-bold tracking-tight">Join Renvio</h1>
        </motion.div>

        <motion.div
          variants={itemVars}
          className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl backdrop-blur-md shadow-2xl"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div variants={itemVars} className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-zinc-400 ml-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-zinc-800 rounded-xl py-3 px-4 mt-1 text-sm focus:outline-none focus:border-[#00ff11]"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 ml-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-zinc-800 rounded-xl py-3 px-4 mt-1 text-sm focus:outline-none focus:border-[#00ff11]"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVars}>
              <label className="text-xs text-zinc-400 ml-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-800 rounded-xl py-3 px-4 mt-1 text-sm focus:outline-none focus:border-[#00ff11]"
              />
            </motion.div>

            <motion.div variants={itemVars}>
              <label className="text-xs text-zinc-400 ml-1">
                Create Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-800 rounded-xl py-3 px-4 mt-1 text-sm focus:outline-none focus:border-[#00ff11]"
              />
            </motion.div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            <motion.button
              variants={itemVars}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-[#00ff11] text-black font-bold py-4 rounded-xl mt-6 shadow-[0_0_20px_rgba(0,255,17,0.15)] disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Account"}
            </motion.button>
          </form>

          <motion.div variants={itemVars} className="mt-6 text-center">
            <p className="text-zinc-500 text-xs">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-white hover:text-[#00ff11] font-semibold"
              >
                Log In
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
