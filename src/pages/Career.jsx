import React, { useState } from "react";
import LandingImage from "../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaBriefcase, FaGraduationCap, FaUsers, FaHeartbeat, FaLaptop, FaHandshake, FaArrowRight } from "react-icons/fa";

import CareersHeroImage from "../assets/careers-hero.webp";
import TeamWorkingImage from "../assets/outsourcing_tax_preparation_saves_time_money_headaches.webp";
import OfficeSpaceImage from "../assets/outsourced-accounting.webp";

const Career = () => {
  const benefits = [
    {
      icon: <FaGraduationCap className="text-3xl text-[#2a4768]" />,
      title: "Professional Development",
      description: "Continuous learning opportunities including paid certifications, training programs, and mentorship from industry experts."
    },
    {
      icon: <FaHeartbeat className="text-3xl text-[#2a4768]" />,
      title: "Health & Wellbeing",
      description: "Comprehensive healthcare package, gym membership contribution, and initiatives to support your mental and physical wellbeing."
    },
    {
      icon: <FaUsers className="text-3xl text-[#2a4768]" />,
      title: "Collaborative Culture",
      description: "Work alongside talented professionals in a supportive environment that values teamwork and knowledge sharing."
    },
    {
      icon: <FaLaptop className="text-3xl text-[#2a4768]" />,
      title: "Flexible Working",
      description: "Hybrid working arrangements with flexible hours to help you maintain a healthy work-life balance."
    }
  ];

  const currentOpenings = [
    {
      id: 1,
      title: "Senior Accountant",
      location: "London (Hybrid)",
      type: "Full-time",
      description: "We're seeking an experienced accountant with strong knowledge of UK accounting standards to join our team. You'll work directly with our accounting firm clients, handling complex accounts preparation, tax computations, and financial reporting."
    },
    {
      id: 2,
      title: "Accounts Assistant",
      location: "London (Hybrid)",
      type: "Full-time",
      description: "An opportunity for an AAT qualified or part-qualified accountant to support our team in delivering high-quality accounting services. You'll be involved in bookkeeping, basic accounts preparation, and VAT returns for a variety of clients."
    },
    {
      id: 3,
      title: "Tax Specialist",
      location: "London (Hybrid)",
      type: "Full-time",
      description: "Join our tax team to provide expert support with UK tax compliance and planning. You'll prepare tax computations, handle tax returns, and provide technical guidance to ensure all work meets UK tax regulations."
    },
    {
      id: 4,
      title: "Client Relationship Manager",
      location: "London (Hybrid)",
      type: "Full-time",
      description: "A key role connecting our accounting expertise with the firms we support. You'll be the primary point of contact for our accounting firm clients, understanding their needs and ensuring our services exceed their expectations."
    }
  ];

  const [activeJob, setActiveJob] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      position: "Senior Accountant",
      quote: "Joining White Bull was the best career move I've made. I've been able to work with diverse accounting firms across the UK, expanding my expertise while maintaining a healthy work-life balance.",
      image: "../../assets/team/david.webp"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Tax Specialist",
      quote: "What stands out at White Bull is the investment in professional development. I've completed multiple certifications fully funded by the company, and there's always support available when tackling complex tax scenarios.",
      image: "../../assets/team/priya.webp"
    },
    {
      id: 3,
      name: "Thomas Wright",
      position: "Client Relationship Manager",
      quote: "The collaborative culture here is incredible. Everyone is committed to delivering excellence for our clients, and there's a genuine sense of teamwork that makes even the busiest periods enjoyable.",
      image: "../../assets/team/thomas.webp"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <LandingImage
        title="Join Our Team"
        link="Careers"
      />

      {/* Help Section */}
      <div className="mx-auto w-11/12 my-8 rounded-2xl border border-[#2a4768] bg-white p-4.5">
        <TbPhoneCalling className="text-6xl text-[#2a4768]" />
        <h2 className="text-lg font-bold">Have Questions?</h2>
        <p className="pt-2 pb-5 text-gray-500">
          Get in touch with our recruitment team to learn more about career opportunities at White Bull.
        </p>
        <Link
          to="/contact"
          className="rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      {/* Career Introduction */}
      <div className="my-8 px-4.5">
        <div>
          <h3 className="text-4xl font-bold">
            Careers at <span className="text-[#2a4768]">White Bull</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="text-justify leading-7 text-gray-500">
                White Bull is a dynamic and growing company that specializes in providing outsourced accounting services to UK accounting firms. We're always looking for talented accounting professionals who are passionate about delivering exceptional service and supporting the success of accounting practices across the UK.
              </p>
              <p className="my-5 text-justify leading-7 text-gray-500">
                Working at White Bull means joining a team of dedicated professionals who combine technical expertise with a commitment to excellence. We believe in creating an environment where our team members can thrive professionally while maintaining a healthy work-life balance.
              </p>
              <p className="text-justify leading-7 text-gray-500">
                We offer competitive compensation, comprehensive benefits, and significant opportunities for career advancement. Most importantly, we foster a supportive culture where collaboration, innovation, and continuous learning are encouraged.
              </p>
            </div>
            <div>
              <img
                src={CareersHeroImage}
                alt="White Bull Team"
                className="rounded-2xl h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold">
            Why Work <span className="text-[#2a4768]">With Us</span>
          </h3>
          <p className="my-5 text-justify leading-7 text-gray-500">
            At White Bull, we believe that our team is our greatest asset. We're committed to creating a workplace where talented professionals can build rewarding careers while delivering exceptional service to our clients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <img
                src={TeamWorkingImage}
                alt="White Bull Team Working"
                className="rounded-2xl h-auto w-full object-cover"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Specialized Expertise</h4>
                    <p className="text-gray-500">Focus on UK accounting standards and practices, allowing you to develop deep expertise in a specialist area.</p>
                  </div>
                </li>
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Client Diversity</h4>
                    <p className="text-gray-500">Work with a wide range of accounting firms and their clients across various industries, expanding your experience.</p>
                  </div>
                </li>
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Career Progression</h4>
                    <p className="text-gray-500">Clear pathways for advancement with structured performance reviews and promotion opportunities.</p>
                  </div>
                </li>
                <li className="grid auto-cols-auto grid-flow-col">
                  <FaCheckCircle className="text-2xl text-[#2a4768]" />
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-700">Work-Life Balance</h4>
                    <p className="text-gray-500">We value efficiency over long hours, with realistic workloads and support to help you thrive both professionally and personally.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16 px-4.5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Employee <span className="text-[#2a4768]">Benefits</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            We offer a comprehensive package of benefits designed to support your professional growth, wellbeing, and work-life balance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 max-w-3xl mx-auto mb-6">
            Additional benefits include competitive salary packages, performance bonuses, pension contributions, and regular team social events to celebrate our successes.
          </p>
        </div>
      </div>

      {/* Our Office */}
      <div className="py-16 px-4.5">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#2a4768]">Workspace</span>
            </h2>
            <p className="text-gray-500 mb-4">
              Located in the heart of London, our modern office provides an ideal environment for collaboration and focused work. The space is designed to support both team interaction and quiet concentration.
            </p>
            <p className="text-gray-500 mb-6">
              We offer a hybrid working model, allowing you to split your time between our office and working from home. This flexibility enables you to design a work schedule that suits your personal circumstances while maintaining strong connections with the team.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Office Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#2a4768] mr-2" />
                  <span className="text-gray-500">Modern, ergonomic workstations</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#2a4768] mr-2" />
                  <span className="text-gray-500">Collaborative meeting spaces</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#2a4768] mr-2" />
                  <span className="text-gray-500">Quiet focus areas</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#2a4768] mr-2" />
                  <span className="text-gray-500">Well-equipped kitchen and break areas</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#2a4768] mr-2" />
                  <span className="text-gray-500">Central location with excellent transport links</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={OfficeSpaceImage}
              alt="White Bull Office Space"
              className="rounded-2xl h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-gray-50 py-16 px-4.5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Current <span className="text-[#2a4768]">Openings</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {/* Job Listings */}
            <div className="md:col-span-2">
              {currentOpenings.map((job) => (
                <div 
                  key={job.id}
                  className={`p-6 mb-4 rounded-lg cursor-pointer transition-all ${
                    activeJob === job.id 
                      ? "bg-[#2a4768] text-white" 
                      : "bg-white hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveJob(job.id)}
                >
                  <h3 className={`text-xl font-bold ${activeJob === job.id ? "text-white" : ""}`}>
                    {job.title}
                  </h3>
                  <div className={`flex items-center mt-2 ${activeJob === job.id ? "text-gray-200" : "text-gray-500"}`}>
                    <FaBriefcase className="mr-2" />
                    <span>{job.location}</span>
                    <span className="mx-2">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Job Details */}
            <div className="md:col-span-3 bg-white p-8 rounded-lg">
              {currentOpenings.filter(job => job.id === activeJob).map((job) => (
                <div key={job.id}>
                  <h3 className="text-2xl font-bold text-[#2a4768] mb-4">{job.title}</h3>
                  <div className="flex items-center mb-6 text-gray-500">
                    <FaBriefcase className="mr-2" />
                    <span>{job.location}</span>
                    <span className="mx-2">•</span>
                    <span>{job.type}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Job Description</h4>
                    <p className="text-gray-500">{job.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Deliver high-quality accounting services to our accounting firm clients</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Maintain thorough knowledge of UK accounting standards and regulations</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Work collaboratively with team members to meet client deadlines</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Contribute to the continuous improvement of our processes and services</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Requirements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Relevant accounting qualifications (ACCA, ACA, or equivalent)</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Experience working in a UK accounting environment</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Strong attention to detail and commitment to quality</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#2a4768] mr-2 mt-1" />
                        <span className="text-gray-500">Excellent communication and problem-solving skills</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Link
                    to={`/careers/apply/${job.id}`}
                    className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all inline-block"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4.5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Team <span className="text-[#2a4768]">Testimonials</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name} 
                  className="rounded-full w-48 h-48 object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-500 italic text-lg mb-6">"{testimonials[activeTestimonial].quote}"</p>
                <h4 className="font-bold text-xl">{testimonials[activeTestimonial].name}</h4>
                <p className="text-[#2a4768]">{testimonials[activeTestimonial].position}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonial === index ? "bg-[#2a4768]" : "bg-gray-300"
                  }`}
                >
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-gray-50 py-16 px-4.5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Our Application <span className="text-[#2a4768]">Process</span>
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
            We've designed a straightforward application process to help us identify talented professionals who will thrive at White Bull.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#2a4768] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl mb-2">Online Application</h3>
                <p className="text-gray-500">Submit your application through our online portal, including your CV and a brief cover letter explaining why you're interested in joining White Bull.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#2a4768] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl mb-2">Initial Interview</h3>
                <p className="text-gray-500">If your application aligns with our requirements, we'll invite you for an initial interview (virtual or in-person) to discuss your experience and assess your technical knowledge.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#2a4768] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl mb-2">Technical Assessment</h3>
                <p className="text-gray-500">Depending on the role, you may be asked to complete a practical assessment to demonstrate your technical skills and approach to accounting tasks.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#2a4768] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                4
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl mb-2">Final Interview</h3>
                <p className="text-gray-500">The final stage involves meeting with senior team members to discuss how you would contribute to White Bull and to give you the opportunity to ask any questions about the role or company.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#2a4768] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                5
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl mb-2">Offer & Onboarding</h3>
                <p className="text-gray-500">Successful candidates will receive a formal offer, followed by a comprehensive onboarding program to help you integrate into the team and start contributing quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-[#2a4768]">Join</span> Our Team?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Explore our current openings and take the first step toward a rewarding career at White Bull.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#current-openings"
            className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
          >
            View Open Positions
          </a>
          <Link
            to="/contact"
            className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-50 transition-all"
          >
            Contact Recruitment Team
          </Link>
        </div>
      </div>

      {/* No Current Openings */}
      <div className="bg-gray-50 py-16 px-4.5 hidden">
        <div className="max-w-4xl mx-auto text-center">
          <FaHandshake className="text-5xl text-[#2a4768] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            No Current Openings
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            We don't have any open positions at the moment, but we're always interested in connecting with talented accounting professionals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all flex items-center"
            >
              Submit Speculative Application <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;