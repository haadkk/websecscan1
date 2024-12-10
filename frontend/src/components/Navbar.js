import React from "react";
import { useState } from "react";
import { Link } from "react-scroll"; // Assuming smooth scrolling links
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          WebSecScan
        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Links */}
        <div
          className={`md:flex md:items-center md:gap-8 absolute md:static top-full left-0 bg-gray-900 md:bg-transparent w-full md:w-auto transition-transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-0">
            <li>
              <Link
                to="scanBox"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition-colors"
              >
                Scan Now
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="howItWorks"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
