import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`bg-slate-700 text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-6" : "py-9"
    }`}
  >
    <div className="container mx-auto max-w-7xl flex md:justify-between justify-between items-center px-5">
      <Link to="/" className="text-2xl md:text-3xl font-bold">
        START FRAMEWORK
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>
  
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute lg:static bg-slate-700 lg:bg-transparent w-full lg:w-auto lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left top-16 left-0 p-6 lg:p-0`}
      >
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `font-bold ${isActive ? "p-2 bg-[#1abc9c] rounded-lg" : ""}`
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              `font-bold ${isActive ? "p-2 bg-[#1abc9c] rounded-lg" : ""}`
            }
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-bold ${isActive ? "p-2 bg-[#1abc9c] rounded-lg" : ""}`
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  
  );
}
