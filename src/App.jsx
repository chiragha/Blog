import React, { lazy, Suspense } from "react";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AllProjects = lazy(() => import("./pages/AllProjects"));

export default function App() {
  return (
    <div>
      <CustomCursor />

      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-white bg-slate-900">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}