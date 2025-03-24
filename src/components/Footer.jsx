import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { PiEnvelope, PiMapPin, PiPhoneFill } from "react-icons/pi";
import Clock from "./Clock";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#2a4768] py-6 text-white">
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
                className={`h-4 w-4 transition-transform duration-300`}
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
      <div className="mb-7 flex flex-col items-center justify-between gap-5 px-7.5 lg:hidden">
        <img src={Logo} alt="ANPM Logo" />
        <p className="text-justify">
          Turning complex financial data into clear, actionable insights.
        </p>
      </div>
      <div className="flex flex-col justify-between px-7.5 lg:hidden">
        {/* Company */}
        <div className="mb-7 flex flex-col gap-3.5">
          <p className="text-xl font-semibold">Company</p>
          <Link to={"/about"}>About US</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact Us</Link>
        </div>

        {/* Services */}
        <div className="mb-7 flex flex-col gap-3.5">
          <p className="text-xl font-semibold">Our Services</p>
          <Link to={"/services/accounting"}>Accounting Services</Link>
          <Link to={"/services/bookkeeping"}>Bookkeeping Services</Link>
          <Link to={"/services/yearendaccounting"}>Year-End Accounting</Link>
          <Link to={"/services/taxreturn"}>Tax Return Preparation</Link>
          <Link to={"/services/payroll"}>Payroll Services</Link>
          <Link to={"/services/financialanalysis"}>
            Financial Analysis Services
          </Link>
          <Link to={"/services/vat"}>VAT Return Filing Services</Link>
        </div>

        {/* Location */}
        <div className="mb-7 flex flex-col gap-3.5">
          <p className="text-xl font-semibold">Our Locations</p>
          <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
            <PiMapPin />
            <a target="_blank" href="https://maps.google.com">
              Mumbai, India
            </a>
          </div>
          <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
            <PiPhoneFill />
            <a target="_blank" href="tel:+1234567890">
              +123 456 7890
            </a>
          </div>
          <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
            <PiEnvelope />
            <a target="_blank" href="mailto:info@example.com">
              info@example.com
            </a>
          </div>
          {/* <Clock/> */}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2">
          <p>Copyright &#169; 2025 ANPM. All rights reserved.</p>
          <div className="flex flex-row items-center gap-2">
            <Link to={"/careers"}>Careers</Link>
            <span>|</span>
            <a href="http://linkedin.com/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
