import { motion } from "framer-motion";
import React from "react";

export default function Banner() {
  return (
   <section
  id="home"
  className="relative h-screen w-full overflow-hidden bg-slate-950 text-white flex items-center justify-center"
>
      {/* ===== Background Gradient ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      {/* ===== Animated Glow Orbs ===== */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 text-center px-6">
        {/* 3D Tilt Wrapper */}
        {/* Normal Wrapper (No 3D Tilt) */}
        <div className="inline-block">
          {/* Heading */}
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.04,
              textShadow: "0px 0px 40px rgba(139,92,246,0.6)",
            }}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight"
          >
            SHIVANI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              SINHA
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase text-gray-400"
        >
          Front-end developer specializing in React and user-focused interfaces
        </motion.p>

        {/* Magnetic Button */}
        <motion.div
          className="mt-12 inline-block"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            className="px-8 py-3 rounded-full text-sm cursor-pointer font-semibold 
            bg-gradient-to-r from-cyan-500 to-purple-600 
            shadow-lg relative overflow-hidden"
          >
            My Resume
            {/* glow layer */}
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
          </motion.button>
        </motion.div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-7 h-12 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-purple-400 rounded-full"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
