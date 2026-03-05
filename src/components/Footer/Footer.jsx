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

        {/* Right Side Links */}
        <div className="flex items-center gap-6">
          
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>

          <a
            href="https://github.com/chiragha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="mailto:sshivanissinha9@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Mail size={18} />
            Gmail
          </a>

        </div>
      </div>
    </footer>
  );
}