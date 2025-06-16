import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CV from "./components/CV"; // Your CV component
import Home from "./components/Home"; // Your homepage content

const App = () => {
  return (
    <div>
      {/* Simple Nav */}
      <nav className="section md:px-12">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link> |{" "}
        <Link to="/cv" className="text-blue-600 hover:underline">CV</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  );
};




