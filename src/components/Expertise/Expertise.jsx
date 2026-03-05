import { Monitor, Atom, Smartphone } from "lucide-react";
import React from "react";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 scroll-mt-24"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-bold mb-16">My Expertise</h2>

      {/* Outer Container */}
      <div className="w-full max-w-5xl border-2 border-white rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Column 1 */}
          <div className="p-8 space-y-6 hover:bg-white/5 transition duration-300">
            
            <div className="flex items-center space-x-4">
               <Monitor className="w-8 h-8 text-white/80" />
               <h3 className="font-semibold text-2xl">Frontend Development</h3>
              </div>

            <div>
             
              <h4 className="text-sm text-gray-400 mt-1">
                Frontend Engineering
              </h4>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Semantic HTML5 & accessible markup Advanced CSS (Flexbox, Grid,
              animations) Responsive & mobile-first design Component-based UI
              architecture Cross-browser compatibility
            </p>
          </div>

          {/* Column 2 */}
          <div className="p-8 space-y-6 hover:bg-white/5 transition duration-300">
            

            <div className="flex items-center space-x-4">
               <Atom className="w-8 h-8 text-white/80" />
               <h3 className="font-semibold text-2xl">Frontend Dev</h3>
              </div>

            <div>
              
              <h4 className="text-sm text-gray-400 mt-1">React, NextJS</h4>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Over 2 years of development experience in
              HTML, CSS, JS, React and NextJS frameworks.
            </p>
          </div>

          {/* Column 3 */}
          <div className="p-8 space-y-6 hover:bg-white/5 transition duration-300">
            

            <div className="flex items-center space-x-4">
               <Smartphone className="w-8 h-8 text-white/80" />
               <h3 className="font-semibold text-2xl">
                Modern JavaScript & React
              </h3>
              </div>


            <div>
              
              <h4 className="text-sm text-gray-400 mt-1">
                Modern JavaScript & React Ecosystem
              </h4>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              ES6+ features & modular JavaScript React Hooks & functional
              components Redux for state management API integration (REST)
              Next.js fundamentals (routing, SSR basics) Reusable & scalable
              component design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
