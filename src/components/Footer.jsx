import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#294466] px-6 py-10 text-white md:px-10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h1 className="text-3xl font-bold">Yours Wisely</h1>
            </div>
            <p className="mb-6 text-sm md:mb-0 md:text-base">
              Turning complex financial data into clear, actionable insights.
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-medium">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"contact"} className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-medium">Our Services</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  to={"/services/accounting"}
                  className="hover:text-gray-300"
                >
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/bookkeeping"}
                  className="hover:text-gray-300"
                >
                  Bookkeeping Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/yearendaccounting"}
                  className="hover:text-gray-300"
                >
                  Year-End Accounting
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/taxreturn"}
                  className="hover:text-gray-300"
                >
                  Tax Return Preparation
                </Link>
              </li>
              <li>
                <Link to={"/services/payroll"} className="hover:text-gray-300">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/services/financialanalysis"}
                  className="hover:text-gray-300"
                >
                  Financial Analysis Services
                </Link>
              </li>
              <li>
                <Link to={"/services/GST"} className="hover:text-gray-300">
                  GST Return Filing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-medium">Our Locations</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <RiMapPin2Fill className="mr-2" />
                <a href="https://maps.google.com/" target="_blank">
                  Mumabi - India
                </a>
              </li>
              <li className="flex items-start">
                <IoIosCall className="mr-2" />
                <a href="tel:+022-49647976">+022 49647976</a>
              </li>
              <li className="flex items-start">
                <IoMdMail className="mr-2" />
                <a href="mailto:partners@wiselyyours.com">
                  partners@wiselyyours.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-600 pt-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 md:mb-0">
            Copyright © 2024 Wisely Yours. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to={"career"} className="hover:text-gray-300">
              Career
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
