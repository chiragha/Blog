import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menu = ["home", "expertise", "work", "experience", "contact"];

  const handleNavigation = (section) => {
    // If already on homepage
    if (location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Go to homepage with hash
      navigate(`/#${section}`);
    }

    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar animation
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Stagger menu
  const menuContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const menuItem = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  // Mobile menu animation
  const mobileMenu = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? "bg-[#0f172a]/90 backdrop-blur-md py-4" : "bg-[#0f172a] py-6"}`}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center text-amber-50 px-4 h-12
        ${scrolled ? "justify-center" : "justify-between"}`}
      >
        {/* Logo */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-semibold tracking-wide transition-all duration-500
          ${scrolled ? "opacity-0 scale-90 w-0 overflow-hidden" : "opacity-100"}`}
        >
          ShivaniSinha<span className="text-cyan-400"> . _</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          variants={menuContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest"
        >
          {menu.map((item) => (
            <motion.li key={item} variants={menuItem}>
              <button
                onClick={() => handleNavigation(item)}
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <span className="opacity-60">//</span>
                <span>{item}</span>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu (FIXED) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden bg-[#0f172a]"
          >
            <motion.ul
              variants={menuContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 text-sm uppercase tracking-widest text-amber-50 px-6 py-6"
            >
              {menu.map((item) => (
                <motion.li key={item} variants={menuItem}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className="block hover:text-cyan-400 transition"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
