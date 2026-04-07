import React from "react";
import pic1 from "../../assets/ecomm_project.PNG";
import pic2 from "../../assets/cosmetic_project.gif";
import pic3 from "../../assets/job_project.PNG";
import pic4 from "../../assets/2d_game.PNG";
import pic5 from "../../assets/nextjs.PNG";
import pic6 from "../../assets/img6.avif";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: pic1,
    link: "https://ecommerce-react-js-ochre.vercel.app/",
  },
  {
    id: 2,
    title: "Cosmetic_Website",
    image: pic2,
    link: "https://website-react-context.vercel.app/",
  },
  {
    id: 3,
    title: "Freelance-Dashboard",
    image: pic3,
    link: "https://freelance-dashboard-ui.vercel.app/",
  },
  {
    id: 4,
    title: "2D_Game_Hub",
    image: pic4,
    link: "https://react-2d-game-hub.vercel.app/",
  },
  {
    id: 5,
    title: "NextJs_Landing_Page",
    image: pic5,
    link: "https://next-js-landing-page-roan-pi.vercel.app/",
  },
  {
    id: 6,
    title: "Creative Landing Page",
    image: pic6,
    link: "https://your-site-6.com",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sectionAnim = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
export default function MyWork() {
  return (
    <motion.section
      id="work"
      variants={sectionAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen bg-slate-900 text-white px-6 py-20"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        My Work
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
      >
        {projects.map((project, index) => {
          let gridClasses =
            "relative group overflow-hidden rounded-xl cursor-pointer";

          if (index === 3) {
            gridClasses += " md:col-span-2 md:row-span-2";
          }

          return (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={card}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={gridClasses}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
               className="w-full h-full object-contain bg-black/40 p-2 transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-75"
              />

              {/* Overlay */}
              <motion.div
                 className="absolute inset-0 bg-black/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.h3
                  className="text-lg font-semibold translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
