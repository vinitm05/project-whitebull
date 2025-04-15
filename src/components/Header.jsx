import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

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
    <div>
      <div className="flex gap-5 bg-[#2a4768] px-5 py-3 text-sm text-white sm:justify-center md:justify-normal md:gap-10 md:px-28 md:text-lg">
        <a href="tel:+02249647976" className="flex items-center gap-1.5">
          <BiPhoneCall />
          +022-49647976
        </a>
        <a
          href="mailto:partners@wiselyyours.com"
          className="flex items-center gap-1.5"
        >
          <HiOutlineMailOpen />
          partners@wiselyyours.com
        </a>
      </div>
      <nav className="px-6 py-7 md:px-28">
        {/* desktop view */}
        <div className="hidden items-center justify-around lg:flex">
          <Link to={"/"} className="text-6xl font-bold text-[#2a4768]">
            Wisely Yours
          </Link>
          <ul className="flex space-x-6 text-xl font-bold">
            <li className="hover:text-[#2a4768]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#2a4768]">
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
              <div className="absolute left-0 hidden space-y-2 rounded-3xl bg-linear-to-b from-[#2c4a6a] via-[#578397] to-[#7ab4bd] p-4 text-lg font-normal text-white group-hover:z-10 group-hover:flex group-hover:w-64 group-hover:flex-col">
                <Link to={"/services/accounting"}>Accounting Services</Link>
                <Link to={"/services/bookkeeping"}>Bookkeeping Services</Link>
                <Link to={"/services/yearendaccounting"}>
                  Year-End Accounting
                </Link>
                <Link to={"/services/taxreturn"}>Tax Return Preparation</Link>
                <Link to={"/services/payroll"}> Payroll Services</Link>
                <Link to={"/services/GST"}>GST Return Filing Services</Link>
                <Link to={"/services/financialanalysis"}>
                  Financial Analysis Services
                </Link>
              </div>
            </li>
            <li className="hover:text-[#2a4768]">
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li className="hover:text-[#2a4768]">
              <Link to={"career"}>Career</Link>
            </li>
            <li className="hover:text-[#2a4768]">
              <Link to={"contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* mobile view */}
        <div className="flex items-center justify-between lg:hidden">
          <Link to={"/"} className="text-5xl font-bold text-[#2a4768]">
            Wisely Yours
          </Link>
          <button
            onClick={toggleMenu}
            className="rounded-md bg-[#2a4768] p-1 text-white hover:cursor-pointer focus:outline-none"
          >
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
          <div className="flex flex-col items-center space-y-4 bg-[#2a4768] p-4 text-white lg:hidden">
            <Link onClick={closeMenu} to={"/"} className="underline-animation">
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
                  <Link onClick={closeMenu} to={"/services/GST"}>
                    GST Return Filing Services
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
            <Link onClick={closeMenu} to={"/career"}>
              Career
            </Link>
            <Link onClick={closeMenu} to={"contact"}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
