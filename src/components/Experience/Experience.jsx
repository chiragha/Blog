import React, { useState } from "react";
import { Plus, Minus, MapPin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer @ Purvanchal IT Hub",
    year: "April 2024 – Nov 2024",
    description:
      "Led a frontend team to design and develop robust B2C and B2B Travel Tech solutions, utilizing React.js for web applications with a focus on responsive design, scalability, and enhanced user experience.",
    skills: ["JS", "TS", "Redux", "React", "NextJS", "Api Integration"],
  },
  {
    id: 2,
    title: "Web Developer @ Glitter Group",
    year: "June 2015 – March 2016",
    description:
      "Worked on frontend interfaces and responsive layouts with modern JavaScript and CSS frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Software Engineer @ Opaan Technologies",
    year: "June 2014 – January 2015",
    description:
      "Delivered high-quality frontend solutions to clients with focus on UI/UX and performance.",
    skills: ["Java", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <motion.section
      id="experience"
     className="bg-slate-900 text-white px-6 py-12 md:py-16"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Professional Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(exp.id)}
              className="w-full flex justify-between items-center bg-linear-to-r 
              from-purple-700 to-purple-500 px-6 py-4 font-semibold text-left"
            >
              <span>{exp.title}</span>

              <div className="flex items-center gap-4">
                <span className="text-sm opacity-80">{exp.year}</span>

                <motion.div
                  animate={{ rotate: activeId === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeId === exp.id ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </motion.div>
              </div>
            </button>

            {/* Animated Content */}
            <AnimatePresence>
              {activeId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1e1b4b] p-6 space-y-4 overflow-hidden"
                >
                  {/* Location + Website */}
                  {exp.location && (
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-cyan-400"
                      >
                        <ExternalLink size={16} />
                        Website
                      </a>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-1 text-sm bg-indigo-600/30 rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}