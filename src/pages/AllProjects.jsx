import React from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/ecomm_project.PNG";
import pic2 from "../assets/cosmetic_project.gif";
import pic3 from "../assets/job_project.PNG";
import pic4 from "../assets/2d_game.PNG";
import pic5 from "../assets/nextjs.PNG";
import pic6 from "../assets/Capture1.PNG";
import scraper from "../assets/scraper.PNG";
import Navbar from "../components/Header/Navbar"

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: pic1,
    desc: "Full stack ecommerce with cart & authentication",
    live: "https://ecommerce-react-js-ochre.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    id: 2,
    title: "Cosmetic Website",
    image: pic2,
    desc: "React context based UI with dynamic state",
    live: "https://website-react-context.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    id: 3,
    title: "Cosmetic Website",
    image: pic3,
    desc: "React context based UI with dynamic state",
    live: "https://website-react-context.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    id: 4,
    title: "Cosmetic Website",
    image: pic4,
    desc: "React context based UI with dynamic state",
    live: "https://website-react-context.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    id: 5,
    title: "Cosmetic Website",
    image: pic5,
    desc: "React context based UI with dynamic state",
    live: "https://website-react-context.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    id: 6,
    title: "Cosmetic Website",
    image: pic6,
    desc: "React context based UI with dynamic state",
    live: "https://website-react-context.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    id: 7,
    title: "MERN-Hackernews-Scraper",
    image: scraper,
    desc: "React context based UI with dynamic state",
    live: "https://mern-hackernews-scraper.vercel.app/",
    github: "https://github.com/chiragha/MERN-Hackernews-Scraper",
  },
  // {
  //   id: 8,
  //   title: "Cosmetic Website",
  //   image: pic2,
  //   desc: "React context based UI with dynamic state",
  //   live: "https://website-react-context.vercel.app/",
  //   github: "https://github.com/your-repo",
  // },
  // {
  //   id: 9,
  //   title: "Cosmetic Website",
  //   image: pic2,
  //   desc: "React context based UI with dynamic state",
  //   live: "https://website-react-context.vercel.app/",
  //   github: "https://github.com/your-repo",
  // },
  // {
  //   id: 10,
  //   title: "Cosmetic Website",
  //   image: pic2,
  //   desc: "React context based UI with dynamic state",
  //   live: "https://website-react-context.vercel.app/",
  //   github: "https://github.com/your-repo",
  // },
  // {
  //   id: 11,
  //   title: "Cosmetic Website",
  //   image: pic2,
  //   desc: "React context based UI with dynamic state",
  //   live: "https://website-react-context.vercel.app/",
  //   github: "https://github.com/your-repo",
  // },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AllProjects() {
  return (
    <>
    <Navbar />  
   <div className="min-h-screen bg-slate-900 text-white px-6 pt-36 pb-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        All Projects
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {allProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={card}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 p-4 rounded-xl shadow-lg flex flex-col"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 bg-black/40"
            />

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

              <p className="text-gray-300 mb-4 flex-grow">{project.desc}</p>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                  Live Preview
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-white rounded-lg text-sm hover:bg-white hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
}
