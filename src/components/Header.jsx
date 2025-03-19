import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-green-200 p-4">
      {/* desktop view */}
      <div className="hidden items-center justify-between lg:flex">
        <Link to={"/"} className="text-2xl font-bold text-white">
          ANPM
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* mobile view */}
      <div className="flex items-center justify-between lg:hidden">
        <Link to={"/"} className="text-2xl font-bold text-white">
          ANPM
        </Link>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* mobile menu dropdown */}
      {isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 bg-green-300 p-4 text-white lg:hidden">
          <Link to={"/"}>Home</Link>

          <Link to={"/about"}>About</Link>

          <Link to={"/services"}>Services</Link>

          <Link to={"/blog"}>Blog</Link>

          <Link to={"contact"}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
