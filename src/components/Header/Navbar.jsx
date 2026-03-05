import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = ["home", "expertise", "work", "experience", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="home"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? "bg-[#0f172a]/90 backdrop-blur-md py-4" : "bg-[#0f172a] py-6"}`}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center transition-all text-amber-50 duration-500 px-4 h-12
        ${scrolled ? "justify-center" : "justify-between"}`}
      >
        {/* Logo */}
        <div
          className={`text-3xl font-semibold tracking-wide transition-all duration-500
          ${scrolled ? "opacity-0 scale-90 w-0 overflow-hidden" : "opacity-100"}`}
        >
          ShivaniSinha<span className="text-cyan-400"> . _</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <span className="opacity-60">//</span>
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* moble menu */}
      <div
  className={`md:hidden bg-[#0f172a] overflow-hidden transition-all duration-500 ${
    isOpen ? "max-h-96 py-6" : "max-h-0"
  }`}
>
  <ul className="flex flex-col gap-6 text-sm uppercase tracking-widest text-amber-50 px-6">
    {menu.map((item) => (
      <li key={item}>
        <a
          href={`#${item}`}
          onClick={() => setIsOpen(false)}
          className="block hover:text-cyan-400 transition"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>
    </header>
  );
}