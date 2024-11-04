import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-teal-500 to-green-500">
      <nav className="p-4 flex items-center justify-between container mx-auto">
        <div className="flex items-center">
          <span className="text-white font-bold text-2xl">nirvar</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white  items-center">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/service" className="hover:text-gray-300">
            Service
          </Link>
          <Link to="/testimonials" className="hover:text-gray-300">
            Testimonials
          </Link>
          <Link to="/faq" className="hover:text-gray-300">
            FAQ
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
          <button className="flex  items-center bg-white text-teal-500 px-4 py-2 rounded-lg hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8 4a1 1 0 10-2 0v3a1 1 0 001 1h4a1 1 0 000-2h-3V8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">LOGIN</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden items-center bg-white text-[#14B8A6] px-4 py-2 rounded-lg hover:bg-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-5 w-5" // Tailwind CSS classes for height and width
            viewBox="0 0 24 24" // Viewbox for the SVG
            fill="none" // Fill property
            xmlns="http://www.w3.org/2000/svg" // XML namespace
            stroke="#14B8A6" // Stroke color
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round" // Rounded ends for strokes
              strokeLinejoin="round" // Rounded joints for strokes
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 6H20M4 12H20M4 18H20" // Path data for the hamburger lines
                stroke="#14B8A6" // Stroke color for the path
                strokeWidth="2" // Stroke width for the path
                strokeLinecap="round" // Rounded ends for the lines
                strokeLinejoin="round" // Rounded joints for the lines
              />
            </g>
          </svg>
        </button>

        {/* Mobile Links */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-teal-500 to-green-500 text-white flex flex-col space-y-4 py-4 px-6 md:hidden z-10">
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/service"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/faq"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
