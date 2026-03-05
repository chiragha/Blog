import React from "react";

export default function Banner() {
  return (
    <section className="relative h-screen w-full scroll-margin-top: 120px; overflow-hidden bg-slate-950 text-white">
      {/* ===== Background Gradient ===== */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-black"></div>

      {/* ===== Animated Glow Elements ===== */}
      <div className="absolute top-24 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight fade-up">
          SHIVANI{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            SINHA
          </span>
        </h1>

        <p className="mt-8 text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase text-gray-400 fade-up delay-200">
          Front-end developer specializing in React and user-focused interfaces
        </p>

        <div id="work" className="mt-12 fade-up delay-300">
          <button className="px-8 py-3 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">
            View My Work
          </button>
        </div>
      </div>

      <div
        
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div id="expertise" className="w-7 h-12 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-scrollDot"></div>
        </div>
      </div>
    </section>
  );
}
