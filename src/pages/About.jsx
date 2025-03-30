import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import ServiceList from "../components/ServiceList";
import { Link, Links } from "react-router";

import AboutHeroImage from "../assets/home-hero.webp";
import TeamPhoto from "../assets/team.webp";
import ValuesImage from "../assets/about-img1.png"
import OfficeImage from "../assets/about-img2.jpg"
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake, FaAward } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "James Wilson",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in accounting and financial services, James founded White Bull to help UK accounting firms scale efficiently without sacrificing quality.",
      image: "../../assets/team/james.webp"
    },
    {
      name: "Sarah Thompson",
      position: "Head of Operations",
      bio: "Sarah ensures White Bull delivers exceptional service to every client by overseeing our operational processes and maintaining our high standards.",
      image: "../../assets/team/sarah.webp"
    },
    {
      name: "Michael Bennett",
      position: "Technical Director",
      bio: "Michael specializes in UK tax regulations and accounting standards, leading our team to deliver compliant and accurate services for all client work.",
      image: "../../assets/team/michael.webp"
    },
    {
      name: "Emily Parker",
      position: "Client Success Manager",
      bio: "Emily works directly with our accounting firm clients to ensure their specific needs are met and that our services align perfectly with their requirements.",
      image: "../../assets/team/emily.webp"
    }
  ];

  const faqs = [
    {
      question: "What is White Bull's mission?",
      answer: "White Bull exists to empower UK accounting firms to scale their practices efficiently by providing high-quality, white-label outsourced accounting services that reduce costs while maintaining excellence in client service."
    },
    {
      question: "How experienced is the White Bull team?",
      answer: "Our leadership team brings over 45 combined years of experience in UK accounting, tax regulations, and practice management. Every team member is thoroughly trained in UK accounting standards to ensure compliance and accuracy."
    },
    {
      question: "Does White Bull work with firms of all sizes?",
      answer: "Yes, we support accounting practices of all sizes, from solo practitioners to large multi-partner firms. Our scalable solutions are tailored to match your specific requirements and can grow alongside your practice."
    },
    {
      question: "How does White Bull maintain quality and confidentiality?",
      answer: "We implement rigorous quality control procedures, regular training, and strict confidentiality protocols. All our work adheres to UK accounting standards, and we maintain complete client confidentiality through secure systems and strict data protection measures."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingImage
        title="About White Bull"
        link="About Us"
      />

      {/* Help Section */}
      <div className="mx-auto w-11/12 my-8 rounded-2xl border border-[#2a4768] bg-white p-4.5">
        <TbPhoneCalling className="text-6xl text-[#2a4768]" />
        <h2 className="text-lg font-bold">Need Help?</h2>
        <p className="pt-2 pb-5 text-gray-500">
          Get in touch and let us know how we can help. We'll be in touch as soon as possible.
        </p>
        <Link
          to="/contact"
          className="rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      {/* Our Story Section */}
      <div className="my-8 px-4.5">
        <div>
          <h3 className="text-4xl font-bold">
            Our <span className="text-[#2a4768]">Story</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="text-justify leading-7 text-gray-500">
                White Bull was founded in 2018 with a clear mission: to help UK accounting firms grow efficiently by providing exceptional outsourced accounting services. We recognized that many accounting practices faced significant challenges when trying to scale—hiring costs, training expenses, office space limitations, and management overhead were holding firms back from their true potential.
              </p>
              <p className="my-5 text-justify leading-7 text-gray-500">
                Our founder, James Wilson, had spent over 15 years working in accounting firms across the UK and witnessed these challenges firsthand. He envisioned a solution that would allow accounting practices to focus on client relationships and strategic growth while a dedicated team handled the technical work with precision and care.
              </p>
              <p className="text-justify leading-7 text-gray-500">
                <span className="font-semibold text-gray-600">White Bull was born from this vision</span>—a specialized service provider exclusively focused on supporting UK accounting firms with high-quality, white-label solutions that integrate seamlessly with their existing operations.
              </p>
            </div>
            <div>
              <img
                src={AboutHeroImage}
                alt="White Bull Team"
                className="rounded-2xl h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-[#2a4768]">
            Our Mission
          </h3>
          <p className="my-5 text-justify leading-7 text-gray-500">
            At White Bull, our mission is to empower UK accounting firms to achieve sustainable growth by providing exceptional outsourced accounting services that reduce costs, increase efficiency, and maintain the highest standards of quality and compliance.
          </p>
          <p className="rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            "We believe that accounting firms should be able to scale without sacrificing quality or work-life balance. Our purpose is to be the trusted partner that makes this possible."
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold">
            Our <span className="text-[#2a4768]">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <img
                src={ValuesImage}
                alt="White Bull Values"
                className="rounded-2xl h-auto w-full object-cover"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Excellence</h4>
                    <p className="text-gray-500">We are committed to delivering the highest quality of work in everything we do, from the accuracy of our accounting to the responsiveness of our service.</p>
                  </div>
                </li>
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Integrity</h4>
                    <p className="text-gray-500">We operate with complete transparency and honesty, maintaining the confidentiality of client information and upholding the highest ethical standards.</p>
                  </div>
                </li>
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Partnership</h4>
                    <p className="text-gray-500">We see ourselves as an extension of your team, working collaboratively to achieve your firm's goals and support your growth journey.</p>
                  </div>
                </li>
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Innovation</h4>
                    <p className="text-gray-500">We continually invest in improving our processes and services to deliver ever-greater value to the accounting firms we serve.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gray-50 py-16 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-[#2a4768]">Team</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            The experienced professionals behind White Bull's exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-[#2a4768] mb-3">{member.position}</p>
              <p className="text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 max-w-3xl mx-auto mb-6">
            Beyond our leadership team, White Bull employs a dedicated group of accounting professionals, all trained in UK accounting standards and committed to delivering exceptional service.
          </p>
          <img
            src={TeamPhoto}
            alt="White Bull Team"
            className="rounded-2xl mx-auto max-w-4xl w-full h-auto"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="my-16 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why <span className="text-[#2a4768]">Choose</span> White Bull
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Discover what sets us apart as the premier outsourced accounting partner for UK firms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaUsers className="text-3xl text-[#2a4768] mr-3" />
                <h3 className="text-xl font-bold">UK-Focused Expertise</h3>
              </div>
              <p className="text-gray-500 pl-10">
                Unlike generic outsourcing providers, we specialize exclusively in supporting UK accounting firms. Our team is thoroughly trained in UK accounting standards, tax regulations, and compliance requirements, ensuring your clients receive accurate, compliant service.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaLightbulb className="text-3xl text-[#2a4768] mr-3" />
                <h3 className="text-xl font-bold">White-Label Integration</h3>
              </div>
              <p className="text-gray-500 pl-10">
                Our services seamlessly integrate with your firm's operations and branding. We work as an invisible extension of your team, allowing you to maintain direct client relationships while we handle the technical work behind the scenes.
              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaHandshake className="text-3xl text-[#2a4768] mr-3" />
                <h3 className="text-xl font-bold">Dedicated Partnership</h3>
              </div>
              <p className="text-gray-500 pl-10">
                We believe in building long-term relationships with our clients. Every accounting firm we work with is assigned a dedicated account manager who understands your specific needs and ensures our services align perfectly with your requirements.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <FaAward className="text-3xl text-[#2a4768] mr-3" />
                <h3 className="text-xl font-bold">Quality Assurance</h3>
              </div>
              <p className="text-gray-500 pl-10">
                Our rigorous quality control processes ensure consistent excellence in every piece of work we deliver. We maintain comprehensive checklists, multiple review stages, and regular training to guarantee accuracy and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Office */}
      <div className="bg-gray-50 py-16 px-4.5">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#2a4768]">Office</span>
            </h2>
            <p className="text-gray-500 mb-4">
              Located in the heart of London, our modern office is equipped with state-of-the-art technology and secure systems to ensure efficient and confidential handling of all client work.
            </p>
            <p className="text-gray-500 mb-6">
              While we primarily serve as a remote extension of your team, we welcome visits from our accounting firm partners and regularly host training sessions and networking events at our headquarters.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Contact Information</h3>
              <p className="text-gray-500 mb-1">123 Financial Street</p>
              <p className="text-gray-500 mb-1">London, EC2V 8AN</p>
              <p className="text-gray-500 mb-1">United Kingdom</p>
              <p className="text-gray-500 mb-4">+44 (0)20 1234 5678</p>
              <Link
                to="/contact"
                className="rounded-md bg-[#2a4768] px-4 py-2 font-semibold text-white hover:bg-[#1a3758] transition-all inline-block"
              >
                Get Directions
              </Link>
            </div>
          </div>
          <div>
            <img
              src={OfficeImage}
              alt="White Bull Office"
              className="rounded-2xl h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-[#2a4768]">Partner</span> with White Bull?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Discover how our outsourced accounting services can help your firm reduce costs, increase efficiency, and deliver exceptional service to your clients.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/services"
            className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-50 transition-all"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col items-center bg-white px-4.5 py-10">
        <p className="font-semibold text-[#2a4768]">FAQs</p>
        <h2 className="text-center text-3xl font-bold">
          Frequently Asked <span className="text-[#2a4768]">Questions</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8">
          Learn more about White Bull and our approach to supporting UK accounting firms.
        </p>
        <div className="mx-auto max-w-lg p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-none"
            >
              <button
                className="flex w-full items-center justify-between py-4 text-left font-semibold hover:cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <Link
          to="/faq"
          className="mt-6 text-[#2a4768] font-semibold hover:underline"
        >
          View All FAQs
        </Link>
      </div>
    </>
  );
};

export default About;