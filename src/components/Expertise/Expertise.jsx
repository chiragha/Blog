import { Monitor, Atom, Smartphone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Expertise() {
  // Parent container animation (stagger effect)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Card animation (flap from left)
  const card = {
    hidden: {
      x: -120,
      opacity: 0,
      rotateY: -40, // 👈 flap effect
    },
    show: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="expertise"
      style={{ perspective: 1000 }}
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 scroll-mt-24"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        My Expertise
      </h2>

      <motion.div
        className="w-full max-w-5xl border-2 border-white rounded-lg overflow-hidden"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // 👈 triggers when visible
      >
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">

          {/* Column 1 */}
          <motion.div
            variants={card}
            className="p-8 space-y-6 hover:bg-white/5 transition: {
  duration: 0.8,
  ease: [0.25, 0.8, 0.25, 1],
} hidden: { x: -120, opacity: 0, scale: 0.9, rotateY: -40 }"
          >
            <div className="flex items-center space-x-4">
              <Monitor className="w-8 h-8 text-white/80" />
              <h3 className="font-semibold text-2xl">
                Frontend Development
              </h3>
            </div>

            <h4 className="text-sm text-gray-400">
              Frontend Engineering
            </h4>

            <p className="text-sm text-gray-300 leading-relaxed">
              Semantic HTML5 & accessible markup Advanced CSS (Flexbox, Grid,
              animations) Responsive & mobile-first design Component-based UI
              architecture Cross-browser compatibility
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={card}
            className="p-8 space-y-6 hover:bg-white/5 transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <Atom className="w-8 h-8 text-white/80" />
              <h3 className="font-semibold text-2xl">
                Frontend Dev
              </h3>
            </div>

            <h4 className="text-sm text-gray-400">
              React, NextJS
            </h4>

            <p className="text-sm text-gray-300 leading-relaxed">
              Over 2 years of development experience in HTML, CSS, JS,
              React and NextJS frameworks.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={card}
            className="p-8 space-y-6 hover:bg-white/5 transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <Smartphone className="w-8 h-8 text-white/80" />
              <h3 className="font-semibold text-2xl">
                Modern JavaScript & React
              </h3>
            </div>

            <h4 className="text-sm text-gray-400">
              Modern JavaScript & React Ecosystem
            </h4>

            <p className="text-sm text-gray-300 leading-relaxed">
              ES6+ features & modular JavaScript React Hooks & functional
              components Redux for state management API integration (REST)
              Next.js fundamentals Reusable & scalable component design
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}