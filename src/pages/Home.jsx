import React, { Suspense, lazy } from "react";

// Lazy sections
const Navbar = lazy(() => import("../components/Header/Navbar"));
const Banner = lazy(() => import("../components/Banner/Banner"));
const Expertise = lazy(() => import("../components/Expertise/Expertise"));
const MyWork = lazy(() => import("../components/MyWork/MyWork"));
const Experience = lazy(() => import("../components/Experience/Experience"));
const Footer = lazy(() => import("../components/Footer/Footer"));

export default function Home() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <Navbar />
      <Banner />
      <Expertise />
      <MyWork />
      <Experience />
      <Footer />
    </Suspense>
  );
}