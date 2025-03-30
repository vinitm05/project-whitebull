import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaArrowRight, FaFileInvoiceDollar, FaCalculator, FaChartLine, FaLaptop } from "react-icons/fa";

const BookKeeping = () => {
  const bookkeepingBenefits = [
    {
      id: 1,
      title: "Cost-Effective Solution",
      description: "Reduce your operational expenses by up to 50% compared to hiring in-house bookkeepers.",
      icon: <FaCalculator className="text-3xl text-[#2a4768]" />
    },
    {
      id: 2,
      title: "Time-Saving Efficiency",
      description: "Free up valuable time for your team to focus on client relationships and practice growth.",
      icon: <FaChartLine className="text-3xl text-[#2a4768]" />
    },
    {
      id: 3,
      title: "Accuracy & Compliance",
      description: "Ensure your clients' financial data is accurate and compliant with UK regulations.",
      icon: <FaFileInvoiceDollar className="text-3xl text-[#2a4768]" />
    },
    {
      id: 4,
      title: "Advanced Technology",
      description: "Leverage our expertise with leading accounting software platforms and digital tools.",
      icon: <FaLaptop className="text-3xl text-[#2a4768]" />
    }
  ];

  const serviceFeatures = [
    "Bank reconciliation and transaction processing",
    "Sales and purchase ledger management",
    "VAT return preparation",
    "Management accounts preparation",
    "Credit control and accounts receivable",
    "Payroll processing and reporting",
    "Year-end accounts preparation support",
    "Custom reporting and financial analysis"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "White Bull's bookkeeping services have transformed our practice. We've reduced costs by 40% while improving our service delivery to clients.",
      author: "James Wilson",
      position: "Managing Partner, Wilson & Associates",
      image: "../../assets/testimonials/testimonial-1.webp"
    },
    {
      id: 2,
      quote: "The transition to White Bull's outsourced bookkeeping was seamless. Their team is professional, accurate, and responsive to our needs.",
      author: "Sarah Thompson",
      position: "Director, Thompson Accounting Ltd",
      image: "../../assets/testimonials/testimonial-2.webp"
    }
  ];

  return (
    <>
      <LandingImage
        title="Bookkeeping Services"
        link="Services / Bookkeeping"
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

      {/* Bookkeeping Services Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Professional <span className="text-[#2a4768]">Bookkeeping Services</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Comprehensive outsourced bookkeeping solutions designed specifically for UK accounting firms.
          </p>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Elevate Your <span className="text-[#2a4768]">Practice</span> with Expert Bookkeeping Support
              </h3>
              <p className="text-gray-600 mb-6">
                White Bull provides high-quality, cost-effective bookkeeping services that enable UK accounting firms to scale their operations, reduce overhead costs, and deliver exceptional value to clients.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of qualified bookkeepers works as an extension of your practice, handling day-to-day bookkeeping tasks with precision and professionalism while maintaining your firm's standards and processes.
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  to="/contact"
                  className="rounded-md bg-[#2a4768] px-6 py-3 font-semibold text-white hover:bg-[#1a3758] transition-all"
                >
                  Get Started
                </Link>
                <Link
                  to="/case-studies"
                  className="rounded-md border border-[#2a4768] px-6 py-3 font-semibold text-[#2a4768] hover:bg-gray-50 transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div>
              <img
                src="../../assets/services/bookkeeping-main.webp"
                alt="Professional Bookkeeping Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-16 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">
              Benefits of Our <span className="text-[#2a4768]">Bookkeeping Services</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Discover how our outsourced bookkeeping solutions can transform your accounting practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookkeepingBenefits.map((benefit) => (
              <div key={benefit.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#f8fafc] py-16 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="../../assets/services/bookkeeping-features.webp"
                alt="Comprehensive Bookkeeping Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#2a4768]">Bookkeeping Solutions</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our bookkeeping services cover all aspects of financial record-keeping, ensuring your clients' books are accurate, up-to-date, and compliant with UK regulations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#2a4768] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="my-16 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">
              Our <span className="text-[#2a4768]">Process</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              A seamless, transparent approach to integrating our bookkeeping services with your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Initial Consultation</h4>
              <p className="text-gray-600 text-sm">We discuss your specific requirements and practice workflows.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Tailored Proposal</h4>
              <p className="text-gray-600 text-sm">We create a customized service package aligned with your needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Implementation</h4>
              <p className="text-gray-600 text-sm">We establish secure systems and integrate with your existing workflow.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Ongoing Support</h4>
              <p className="text-gray-600 text-sm">We provide continuous service with regular reviews and adjustments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#2a4768] py-16 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">
              What Our <span className="text-[#7cb5be]">Clients Say</span>
            </h3>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Hear from accounting firms that have transformed their practices with our bookkeeping services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-md">
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-16 px-4.5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">
              Frequently Asked <span className="text-[#2a4768]">Questions</span>
            </h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How does the outsourcing process work?</h4>
              <p className="text-gray-600">
                We establish secure access to your systems and work as an extension of your team, following your processes and standards. Regular communication ensures a seamless experience for both your firm and your clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">What accounting software do you support?</h4>
              <p className="text-gray-600">
                Our team is proficient in all major UK accounting platforms including Xero, QuickBooks, Sage, FreeAgent, and many others. We adapt to your preferred software solution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How do you ensure data security and confidentiality?</h4>
              <p className="text-gray-600">
                We implement strict security protocols, encrypted communications, and secure access controls. All our staff sign comprehensive confidentiality agreements, and we're fully GDPR compliant.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Can your services be white-labeled?</h4>
              <p className="text-gray-600">
                Yes, our bookkeeping services can be fully white-labeled. We work behind the scenes, allowing you to maintain and strengthen your client relationships while we handle the bookkeeping tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2a4768]">Transform</span> Your Practice?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover how White Bull's bookkeeping services can help your firm reduce costs, increase efficiency, and deliver exceptional service to your clients.
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
      </div>

      {/* Related Services */}
      <div className="my-16 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">
              Related <span className="text-[#2a4768]">Services</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Accounts Preparation</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive accounts preparation services for year-end financial statements and management accounts.
              </p>
              <Link
                to="/services/accounts-preparation"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Tax Return Preparation</h4>
              <p className="text-gray-600 mb-4">
                Expert preparation of personal, partnership, and corporate tax returns for your clients.
              </p>
              <Link
                to="/services/tax-returns"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Payroll Services</h4>
              <p className="text-gray-600 mb-4">
                End-to-end payroll processing, including RTI submissions, payslips, and year-end reporting.
              </p>
              <Link
                to="/services/payroll"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#2a4768] py-16 px-4.5 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with the Latest Insights
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive expert advice, industry updates, and practical strategies for UK accounting firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 rounded-md w-full"
            />
            <button className="bg-white text-[#2a4768] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookKeeping