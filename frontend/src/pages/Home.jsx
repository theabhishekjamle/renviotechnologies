//  <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="lg:col-span-7"
//           >
//             <AnimatePresence mode="wait">
//               {!isSubmitted ? (
//                 <motion.form
//                   key="form"
//                   onSubmit={handleSubmit}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   className="bg-[#0a0a0a]/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-10 shadow-2xl space-y-6"
//                 >
//                   {/* Name + Email */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <InputField
//                       label="Operator Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                     <InputField
//                       label="Digital Address"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       type="email"
//                     />
//                   </div>

//                   {/* Objective Selection */}
//                   <div>
//                     <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-2 inline-block">
//                       Select Objective
//                     </label>
//                     <div className="flex gap-3 flex-wrap">
//                       {["Branding", "Development", "Video", "Marketing"].map(
//                         (opt) => (
//                           <button
//                             key={opt}
//                             type="button"
//                             onClick={() => handleObjective(opt)}
//                             className={`px-5 py-3 rounded-xl text-sm font-semibold border ${
//                               formData.objective === opt
//                                 ? "border-[#00ff11] text-[#00ff11] bg-[#00ff1130]"
//                                 : "border-zinc-800 hover:border-[#00ff11] hover:text-[#00ff11]"
//                             } transition-all`}
//                           >
//                             {opt}
//                           </button>
//                         )
//                       )}
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="5"
//                     className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-5 text-sm placeholder-zinc-500 focus:border-[#00ff11] outline-none transition-all"
//                     placeholder="Define your vision..."
//                     required
//                   />

//                   <motion.button
//                     disabled={loading}
//                     whileHover={{
//                       scale: 1.02,
//                       boxShadow: "0 0 30px rgba(0,255,17,0.3)",
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-[#00ff11] text-black py-4 rounded-2xl font-bold uppercase tracking-[0.3em] transition-all"
//                   >
//                     {loading ? "Uploading..." : "Initialize Upload"}
//                     <Send size={18} className="inline-block ml-2" />
//                   </motion.button>
//                 </motion.form>
//               ) : (
//                 <motion.div
//                   key="success"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="bg-[#0a0a0a]/80 border border-[#00ff11]/30 p-16 rounded-3xl text-center shadow-2xl"
//                 >
//                   <Sparkles className="text-[#00ff11] mx-auto mb-6" size={40} />
//                   <h2 className="text-3xl font-bold mb-3">
//                     Transmission Received
//                   </h2>
//                   <p className="text-zinc-400 text-sm">
//                     Our engineers will respond within 24 operational hours.
//                   </p>
//                 </motion.div>