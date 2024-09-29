import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
