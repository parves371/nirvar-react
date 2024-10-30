import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-green-500">
      <nav className=" p-4 flex items-center justify-between container mx-auto">
        <div className="flex items-center ">
          <span className="text-white font-bold text-2xl">nirvar</span>
        </div>
        <div className="flex space-x-6 text-white">
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
        </div>
        <button className="flex items-center bg-white text-teal-500 px-4 py-2 rounded-lg hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8 4a1 1 0 10-2 0v3a1 1 0 001 1h4a1 1 0 000-2h-3V8z"
              clipRule="evenodd"
            />
          </svg>
          LOGIN
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
