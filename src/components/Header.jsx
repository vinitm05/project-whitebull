import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-green-200 p-4">
      {/* desktop view */}
      <div className="hidden items-center justify-between lg:flex">
        <Link to={"/"} className="text-4xl">
          ANPM
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li className="group relative">
            <div className="flex flex-row items-center justify-center gap-1 hover:cursor-pointer">
              <a>Services</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="absolute left-0 hidden space-y-2 bg-green-300 p-4 text-white group-hover:block">
              <Link to={"/services/accounting"}>Accounting Services</Link>
              <Link to={"/services/bookkeeping"}>Bookkeeping Services</Link>
              <Link to={"/services/yearendaccounting"}>
                Year-End Accounting
              </Link>
              <Link to={"/services/taxreturn"}>Tax Return Preparation</Link>
              <Link to={"/services/payroll"}> Payroll Services</Link>
              <Link to={"/services/vat"}>VAT Return Filing Services</Link>
              <Link to={"/services/financialanalysis"}>
                Financial Analysis Services
              </Link>
            </div>
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
          <Link onClick={closeMenu} to={"/"}>
            Home
          </Link>
          <Link onClick={closeMenu} to={"/about"}>
            About
          </Link>
          <div className="text-center">
            <div
              onClick={toggleServicesMenu}
              className="flex w-full items-center justify-center gap-1 hover:cursor-pointer"
            >
              <a>Services</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isServicesOpen && (
              <div className="flex flex-col space-y-2 bg-green-400 p-4 text-white">
                <Link onClick={closeMenu} to={"/services/accounting"}>
                  Accounting Services
                </Link>
                <Link onClick={closeMenu} to={"/services/bookkeeping"}>
                  Bookkeeping Services
                </Link>
                <Link onClick={closeMenu} to={"/services/yearendaccounting"}>
                  Year-End Accounting
                </Link>
                <Link onClick={closeMenu} to={"/services/taxreturn"}>
                  Tax Return Preparation
                </Link>
                <Link onClick={closeMenu} to={"/services/payroll"}>
                  {" "}
                  Payroll Services
                </Link>
                <Link onClick={closeMenu} to={"/services/vat"}>
                  VAT Return Filing Services
                </Link>
                <Link onClick={closeMenu} to={"/services/financialanalysis"}>
                  Financial Analysis Services
                </Link>
              </div>
            )}
          </div>
          <Link onClick={closeMenu} to={"/blog"}>
            Blog
          </Link>
          <Link onClick={closeMenu} to={"contact"}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
