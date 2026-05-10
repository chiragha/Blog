import { Linkedin, Github, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-white/10 py-6">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        
        {/* Left Side */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Shivani Sinha
        </p>
      </div>
    </footer>
  );
}