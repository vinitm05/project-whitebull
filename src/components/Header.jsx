import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import Logo from "../assets/Wyfs_Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

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

  // Function to check if a path is active (for nested routes as well)
  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <div>
      <div className="flex gap-5 bg-[#2a4768] px-5 py-2 text-sm text-white sm:justify-center md:justify-normal md:gap-10 md:px-28 md:text-lg">
        <a
          href="mailto:partners@wiselyyours.com"
          className="underline-offset-8.5 flex items-center gap-1 hover:underline"
        >
          <HiOutlineMailOpen />
          partners@wiselyyours.com
        </a>
      </div>

      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-28">
          {/* desktop view */}
          <div className="hidden items-center justify-between lg:flex">
            <div className="flex-shrink-0">
              <Link to={"/"} className="text-4xl font-bold text-[#2a4768]">
                Wisely Yours Financial Service
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to={"/"}
                className={`text-medium font-bold ${isActive("/") ? "text-[#2a4768] underline underline-offset-8" : ""}`}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className={`text-medium font-bold ${isActive("/about") ? "text-[#2a4768] underline underline-offset-8" : ""}`}
              >
                About Us
              </Link>
              <div className="group relative">
                <button
                  className={`text-medium flex items-center font-bold ${isActive("/services") ? "text-[#2a4768] underline underline-offset-8" : ""}`}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 h-4 w-4 underline-offset-8 transition-transform duration-300 hover:underline ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 z-50 hidden min-w-[230px] space-y-2 rounded-lg bg-gradient-to-b from-[#2c4a6a] via-[#578397] to-[#7ab4bd] p-4 text-white group-hover:block">
                  <Link
                    to={"/services/accounting"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Accounting Services
                  </Link>
                  <Link
                    to={"/services/taxreturn"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Tax Return Preparation
                  </Link>
                  <Link
                    to={"/services/payroll"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Payroll Services
                  </Link>
                  <Link
                    to={"/services/GST"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    GST Return Filing Services
                  </Link>
                  <Link
                    to={"/services/financialanalysis"}
                    className="block py-1 underline-offset-8 hover:underline"
                  >
                    Financial Analysis Services
                  </Link>
                </div>
              </div>
              <Link
                to={"/career"}
                className={`text-medium font-bold ${isActive("/career") ? "text-[#2a4768] underline underline-offset-8" : ""}`}
              >
                Career
              </Link>
              <Link
                to={"/contact"}
                className={`text-medium font-bold ${isActive("/contact") ? "text-[#2a4768] underline underline-offset-8" : ""}`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* mobile view */}
          <div className="flex items-center justify-between lg:hidden">
            <Link to={"/"} className="text-5xl font-bold text-[#2a4768]">
              Wisely Yours
            </Link>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="rounded-md bg-white p-2 text-[#2a4768] hover:bg-gray-200 focus:outline-none"
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
          </div>

          {/* mobile menu dropdown - slide in from right */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-full transform bg-[#2a4768] transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4">
              <h1 className="text-3xl font-extrabold text-white">
                Wisely Yours
              </h1>
              <button
                onClick={closeMenu}
                className="w-10 rounded-lg bg-white p-2 font-bold text-[#2a4768]"
              >
                X
              </button>
            </div>
            <div className="text-medium space-y-1 px-2 pt-2 pb-3 font-bold underline-offset-8 hover:underline">
              <Link
                onClick={closeMenu}
                to={"/"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${isActive("/") ? "font-bold" : ""}`}
              >
                Home
              </Link>
              <Link
                onClick={closeMenu}
                to={"/about"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${isActive("/about") ? "font-bold" : ""}`}
              >
                About Us
              </Link>
              <div>
                <button
                  onClick={toggleServicesMenu}
                  className={`flex w-full items-center justify-between border-b border-[#3a5a7d] px-3 py-4 text-white ${isActive("/services") ? "font-bold" : ""}`}
                >
                  Services
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
                </button>
                {isServicesOpen && (
                  <div className="flex flex-col space-y-3 bg-[#375b82] px-6 py-2">
                    <Link
                      onClick={closeMenu}
                      to={"/services/accounting"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${isActive("/services/accounting") ? "font-bold" : ""}`}
                    >
                      Accounting Services
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/taxreturn"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${isActive("/services/taxreturn") ? "font-bold" : ""}`}
                    >
                      Tax Return Preparation
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/payroll"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${isActive("/services/payroll") ? "font-bold" : ""}`}
                    >
                      Payroll Services
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/GST"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${isActive("/services/GST") ? "font-bold" : ""}`}
                    >
                      GST Return Filing Services
                    </Link>
                    <Link
                      onClick={closeMenu}
                      to={"/services/financialanalysis"}
                      className={`py-1 text-white underline-offset-8 hover:underline ${isActive("/services/financialanalysis") ? "font-bold" : ""}`}
                    >
                      Financial Analysis Services
                    </Link>
                  </div>
                )}
              </div>
              <Link
                onClick={closeMenu}
                to={"/career"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${isActive("/career") ? "font-bold" : ""}`}
              >
                Career
              </Link>
              <Link
                onClick={closeMenu}
                to={"/contact"}
                className={`block border-b border-[#3a5a7d] px-3 py-4 text-white ${isActive("/contact") ? "font-bold" : ""}`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMenuOpen && (
            <div
              className="bg-opacity-50 fixed inset-0 z-40 bg-black"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
