import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Lazy sections
const Navbar = lazy(() => import("../components/Header/Navbar"));
const Banner = lazy(() => import("../components/Banner/Banner"));
const Expertise = lazy(() => import("../components/Expertise/Expertise"));
const MyWork = lazy(() => import("../components/MyWork/MyWork"));
const Experience = lazy(() => import("../components/Experience/Experience"));
const Contact = lazy(() =>
  import("../components/Contact/Contact")
);
const Footer = lazy(() => import("../components/Footer/Footer"));

export default function Home() {

  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }
}, [location]);
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <Navbar />
      <Banner />
      <Expertise />
      <MyWork />
      <Experience />
     <Contact />
     <Footer />
    </Suspense>
  );
}