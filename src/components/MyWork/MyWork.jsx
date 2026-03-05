import React from "react";
import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import pic4 from "../../assets/4.png";
import pic5 from "../../assets/5.avif";
import pic6 from "../../assets/6.avif";


const projects = [
  {
    id: 1,
    title: "Corporate Website",
    image: pic1,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: pic2,
  },
  {
    id: 3,
    title: "Mobile Banking App",
    image: pic3,
  },
  {
    id: 4,
    title: "Travel App – Tryotel",
    image: pic4,
  },
  {
    id: 5,
    title: "Dashboard UI",
    image: pic5,
  },
  {
    id: 6,
    title: "Creative Landing Page",
    image: pic6,
  },
];
export default function MyWork() {
  return (
    <section id="work" className="min-h-screen bg-slate-900 text-white px-6 py-20">
      
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        My Work
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

        {projects.map((project, index) => {
          let gridClasses = "relative group overflow-hidden rounded-xl";

          // Make 4th image big
          if (index === 3) {
            gridClasses += " md:col-span-2 md:row-span-2";
          }

          return (
            <div key={project.id} className={gridClasses}>
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}