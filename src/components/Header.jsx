import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1A1A1A] text-white shadow-lg z-50 transition-all duration-300">
      <div className="w-screen max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white hover:text-gray-400 transition duration-300">
          White Bull
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-[#F7C200] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F7C200] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#F7C200] transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#F7C200] transition duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F7C200] transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
