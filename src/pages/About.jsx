import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import ServiceList from "../components/ServiceList";
import { Link, Links } from "react-router";

import AboutHeroImage from "../assets/home-hero.webp";
import TeamPhoto from "../assets/team.webp";
import iris from '../assets/iris.png'
import freeagent from '../assets/freeagent.png'
import intuit from '../assets/intuit.png'
import taxcalc from '../assets/taxcalc.png'
import kashflow from '../assets/kashflow.png'

import OfficeImage from "../assets/about-img2.jpg";
import { TbPhoneCalling } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa";

const About = () => {
  const workingProcess = [
    {
      name: "01. Outsourcing That Works",
      desc: "Outsourcing your accounting tasks to White Bull means gaining a dedicated partner focused on delivering results. From managing payroll processing, tax return preparation, and VAT filings to handling comprehensive bookkeeping, we ensure your firm’s back-office functions run smoothly. Our expertise helps reduce operational costs, improve efficiency, and allow you to focus on high-value client advisory services and scaling your business.",
      image: "../assets/whyChoose1.svg",
    },
    {
      name: "02. Reliable, Secure, and Efficient",
      desc: "We prioritize data security and compliance, ensuring your clients’ financial information remains protected at all times. Our ISO 27001-certified security framework enforces strict data protection protocols, encryption, and multi-layered security measures. Whether it’s payroll, tax filing, or accounts reconciliation, we handle every aspect with professional integrity, GDPR compliance, and complete confidentiality.",
      image: "../assets/whyChoose2.svg",
    },
    {
      name: "03. Empowering Your Firm to Grow",
      desc: "With White Bull, you gain the ability to scale your firm effortlessly while keeping overhead costs low. Our outsourced accounting solutions allow you to expand your service offerings, improve workflow efficiency, and manage growing client demands without the need for in-house hires. By outsourcing complex financial tasks to us, your firm can focus on business growth, strategic planning, and delivering expert financial advice.",
      image: "../assets/whyChoose3.svg",
    },
    {
      name: "04. A Long-Term Partnership for Success",
      desc: "When you choose White Bull, you’re not just hiring an outsourcing provider—you’re forming a long-term partnership built on trust, expertise, and results. Our dedicated offshore accounting professionals integrate seamlessly with your team, ensuring consistent service quality and operational excellence. We help increase your firm’s profitability, maintain compliance with UK accounting regulations.",
      image: "../assets/whyChoose4.svg",
    },
  ];

  const mission1 = [
    {
      name: "Integrity",
      desc: "We uphold honesty, transparency, and ethical practices in everything we do.",
      image: "../assets/whyChoose2.svg",
    },
    {
      name: "Client-Centric",
      desc: "We focus on understanding your firm’s unique needs, providing tailored solutions that drive success.",
      image: "../assets/whyChoose3.svg",
    },
    {
      name: "Excellence",
      desc: "We go beyond expectations, providing high-quality services that create real impact.",
      image: "../assets/whyChoose4.svg",
    },
  ];

  const mission2 = [
    {
      name: "Innovation",
      desc: "We leverage cutting-edge technology and modern strategies to ensure efficiency and effectiveness.",
      image: "../assets/whyChoose2.svg",
    },
    {
      name: "Collaboration",
      desc: "We operate as an extension of your firm, aligning with your goals to help you thrive.",
      image: "../assets/whyChoose3.svg",
    },
    {
      name: "Continuous Learning",
      desc: "We invest in ongoing training and industry insights to stay ahead of market trends.",
      image: "../assets/whyChoose4.svg",
    },
  ];

  const faqs = [
    {
      question:
        "What is the difference between in-house and outsourced accounting?",
      answer:
        "Yes, at White Bull, we employ an experienced team of certified financial professionals who stay on top of industry regulations to ensure accuracy and compliance.",
    },
    {
      question: "Which software do you use?",
      answer:
        "We work with a wide range of accounting software, including QuickBooks, Sage, Xero, and more. Our team ensures seamless integration with your current tools.",
    },
    {
      question: "Why should we outsource to White Bull?",
      answer:
        "Outsourcing with White Bull means lower overhead, expert knowledge, and the flexibility to scale as your firm grows. We ensure compliance, reduce costs, and help you focus on your core business.",
    },
    {
      question:
        "What is the difference between in-house and outsourced accounting?",
      answer:
        "Yes, at White Bull, we employ an experienced team of certified financial professionals who stay on top of industry regulations to ensure accuracy and compliance.",
    },
  ];

  const whyChoose = [
    {
      question:
        "1. Results That Matter",
      answer:
        "We don’t just promise efficiency—we deliver measurable results. Our outsourced accounting services are designed to enhance your firm’s profitability. From managing day-to-day accounting tasks to ensuring accurate tax filings, we help you free up valuable time and resources, so you can focus on scaling your business.",
    },
    {
      question: "2. Trusted Expertise",
      answer:
        "With decades of expertise, White Bull UK is a trusted leader in outsourced accounting services. Our team stays ahead of industry changes, ensuring full compliance with the latest tax and financial regulations. You can rely on us to manage your clients' financials with precision and care, helping your firm maintain its stellar reputation and drive long-term success.",
    },
    {
      question: "3. A silent Partner for Your Firm's Success",
      answer:
        "Your clients don’t need to know we’re working behind the scenes—but you’ll see the difference. At White Bull, we work efficiently and accurately to ensure their financials are always in order. As your trusted, invisible ally, we handle the heavy lifting so you can focus on strengthening client relationships and growing your firm.",
    },
    {
      question:
        "4. Trnasparent, Actionalble Reporting",
      answer:
        "We believe in full transparency, providing you with clear, actionable financial reports to support informed decision-making. With White Bull, you’ll always have complete visibility into your clients’ financials, while they benefit from accurate, timely data that enhances trust and confidence.",
    },
    {
      question:
        "5. Continuously Evolving for Greater Impact",
      answer:
        "At White Bull, we never settle—we continuously refine our processes and embrace cutting-edge technologies to deliver exceptional service. Partnering with us means more than just outsourcing; it means gaining a dedicated, long-term ally committed to your firm’s growth and success.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingImage title="About White Bull" link="About Us" />

      {/* About Us Section */}
      <div className="px-33 py-30 bg-[#eceef6]">
      <div className="grid grid-cols-2">
        <div className="items-left">Img</div>
        <div className="items-right">
        <p className="font-semibold text-[#2a4768]">About Us</p>
        <h2 className="text-left text-3xl font-bold">
          Expert Outsourced
          <span className="text-[#2a4768]"> Accounting Services </span>
          for UK Accounting & CA Firms – Save Time & Cut Costs
        </h2>
        <p className="mb-4 mt-4 max-w-2xl text-justify
        text-gray-500">
          We provide expert<span className="font-bold"> outsourced accounting services </span>to help UK accounting and CA firms<span className="font-bold"> streamline operations and boost efficiency. </span>Our team handles<span className="font-bold"> back-office tasks </span>such as<span className="font-bold"> bookkeeping, payroll, tax preparation, VAT filings, and more, </span>allowing you to<span className="font-bold"> focus on client service and business growth. </span>With White Bull UK as your outsourcing partner, you can<span className="font-bold"> save time, cut costs, and enhance profitability.</span>
          <br></br><br></br>
          For decades, accounting firms have<span className="font-bold"> trusted White Bull UK </span>to seamlessly manage their clients’ finances. With<span className="font-bold"> extensive experience and a commitment to excellence, </span>we help you<span className="font-bold"> reduce overhead, boost efficiency, and enhance client satisfaction—</span>all while ensuring full compliance with the latest<span className="font-bold"> UK regulations.</span>
        </p>
        </div>
        <br />
      </div>
        <div className="grid grid-cols-6 items-center justify-center">
        <p className="font-bold">List of Software Our Team Hands On</p>
          <img src={freeagent} alt="Free Agent"/>
          <img src={iris} alt="iRIS"/>
          <img src={intuit} alt="INTUIT"/>
          <img src={taxcalc} alt="taxcalc"/>
          <img src={kashflow} alt="FashFlow"/>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="px-33 py-30">
      <div className="grid grid-cols-2">
        <div className="items-left">Img</div>

        <div className="items-right">
        <h2 className="text-left text-3xl font-bold">
        Why Choose White Bull UK for Outsourced Accounting?
        </h2>
        <div className="text-l">
          {whyChoose.map((choose, index) => (
            <div
              key={index}
              className="border-grey-200 border-b last:border-none"
            >
              <button
                className="flex w-full items-center justify-between py-4 text-left font-bold hover:cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {choose.question}
                <span className="text-3xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 text-gray-500">{choose.answer}</p>
              )}
            </div>
          ))}
        </div>

        </div>
      </div>
      </div>


      {/* Our Team */}
      <div className=" px-33 py-30">
        <div className="text-center px-75">
        <p className="font-bold text-[#2a4768] text-xl">Working Process</p>
        <h2 className="text-5xl font-bold mt-5 mb-20">
        The White Bull<span className="text-[#2a4768]">  Approach: </span>Smarter Outsourcing for Accounting Firms</h2>
        </div>

        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workingProcess.map((process, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
              <img
                src={process.image}
                alt={process.name}
                className="mb-4 h-64 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold">{process.name}</h3>
              <p className="text-gray-500">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission */}
      <div className="px-33 py-30">
        <div>
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2">

        <div className="pr-20">
        <p className="font-bold text-[#2a4768] text-xl">Our Mission & Core Values</p>
        <h2 className="text-5xl font-bold mt-3 mb-20">
        Partnering for Growth Through<span className="text-[#2a4768]">  Financial Clarity </span></h2>
        </div>

        <div className="pl-15">
        <p className="mb-20 mt-3 max-w-2xl text-justify
        text-gray-500">
          Our mission is simple: to<span className="font-bold"> empower UK accounting and CA firms </span>with<span className="font-bold"> reliable, efficient, and cost-effective outsourced accounting services. </span>With<span className="font-bold"> decades of expertise, </span>we take the burden of financial management off your shoulders—so you can<span className="font-bold"> focus on what truly matters: serving your clients and scaling your business.</span>
        </p>
        </div>
        
        </div>
        </div>

        <div>
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mission1.map((process, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
              <img
                src={process.image}
                alt={process.name}
                className="mb-4 h-64 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold">{process.name}</h3>
              <p className="text-gray-500">{process.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mission2.map((process, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
              <img
                src={process.image}
                alt={process.name}
                className="mb-4 h-64 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold">{process.name}</h3>
              <p className="text-gray-500">{process.desc}</p>
            </div>
          ))}
        </div>


        </div>
      </div>

      {/* FAQs */}
      <div className="px-33 py-30 bg-[#eceef6]">
      <div className="grid grid-cols-2">
        <div className="items-left">
          <div>
            <p className="font-semibold text-[#2a4768]">FAQs</p>
            <h2 className="text-left text-3xl font-bold">
          Find answers to your most{" "}
            <span className="text-[#2a4768]">common questions</span>
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-left text-gray-500"> We know you may have questions about our services, processes, and how we can support your firm. Here are some frequently asked questions:
            </p>
          </div>
          <div className = "bg-white px-5 py-10 rounded-3xl">
          <div className="grid grid-cols-2 mb-3">
          <div className="items-left flex items-top justify-center">
          <FaQuestion className="text-7xl text-[#2a4768] bg-[#eceef6] rounded-full px-3 py-3" />
          </div>
          <div className="items-right -ml-5">
          <h3 className="text-left text-3xl font-bold">
          Want to Know More?
        </h3>
        <p className="pr-8 py-3 text-justify
        text-gray-500">
          Need additional inofrmation? Have questions? We’re here to help you take your firm to the next level. let us show you how White Bull can transform your accounting processes
        </p>
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          <Link
            to="/contact"
            className="rounded-full bg-[#2a4768] px-45 py-3 font-bold text-xl text-white transition-all hover:bg-[#1a3758]"
          >
            We’re Here To Help!
          </Link>
        </div>

          </div>
        </div>

        <div className="items-right">
        <div className="ml-10 p-4 text-l">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-grey-200 border-b last:border-none"
            >
              <button
                className="flex w-full items-center justify-between py-4 text-left font-bold hover:cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-3xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default About;
