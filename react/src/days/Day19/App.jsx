import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Day19: React Router Basic</h1>

        <nav className="space-x-4 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
