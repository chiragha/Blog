import React, { lazy } from "react";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load ONLY pages (not sections)
const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <div>
      <CustomCursor />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}