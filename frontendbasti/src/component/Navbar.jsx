
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Basti Ki Pathshala</div>

        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/volunteer" className="hover:underline">volunteer</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-xl font-bold"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 px-4 pb-4 space-y-2">
          <Link to="/" className="block py-1 border-b border-green-500" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-1 border-b border-green-500" onClick={toggleMenu}>About</Link>
          <Link to="/volunteer" className="block py-1 border-b border-green-500" onClick={toggleMenu}>volunteer</Link>
          
        </div>
      )}
    </nav>
  );
}
