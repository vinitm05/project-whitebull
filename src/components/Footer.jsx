import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#2a4768] text-white py-6">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Left Side: Copyright Text */}
        <p className="text-white-400">
          © {new Date().getFullYear()} White Bull. All rights reserved.
        </p>

        {/* Right Side: Career & LinkedIn Links */}
        <div className="flex space-x-6">
          <Link to="/career" className="text-gray-400 hover:text-[#F7C200] transition duration-300">
            Careers
          </Link>
          <a 
            href="https://www.linkedin.com/company/whitebull" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[#F7C200] transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
