import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaArrowRight, FaUserClock, FaLock, FaChartLine, FaFileInvoiceDollar } from "react-icons/fa";

const Payroll = () => {
  const payrollBenefits = [
    {
      id: 1,
      title: "Scalable Capacity",
      description: "Manage payroll for more clients without increasing your staff or overhead costs.",
      icon: <FaChartLine className="text-3xl text-[#2a4768]" />
    },
    {
      id: 2,
      title: "Compliance Guaranteed",
      description: "Stay up to date with HMRC requirements, RTI submissions, and pension regulations.",
      icon: <FaLock className="text-3xl text-[#2a4768]" />
    },
    {
      id: 3,
      title: "Time Efficiency",
      description: "Free up your team's time to focus on higher-value advisory and client services.",
      icon: <FaUserClock className="text-3xl text-[#2a4768]" />
    },
    {
      id: 4,
      title: "Comprehensive Reporting",
      description: "Detailed payroll reports, payslips, and documentation for all clients.",
      icon: <FaFileInvoiceDollar className="text-3xl text-[#2a4768]" />
    }
  ];

  const serviceFeatures = [
    "Weekly, fortnightly, and monthly payroll processing",
    "RTI submissions to HMRC",
    "Pension auto-enrolment management",
    "Statutory payments calculations",
    "P60, P45, and P11D preparation",
    "Payslip generation and distribution",
    "Year-end payroll returns",
    "Payroll journal preparation"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "White Bull's payroll team has revolutionized our service offering. We can now offer comprehensive payroll services to all our clients without the administrative burden on our core team.",
      author: "David Richards",
      position: "Managing Partner, Richards & Associates",
      image: "../../assets/testimonials/testimonial-5.webp"
    },
    {
      id: 2,
      quote: "We've been able to scale our payroll client base by over 50% with White Bull's support. Their attention to detail and compliance knowledge gives us complete confidence in the service we're delivering.",
      author: "Rebecca Lloyd",
      position: "Director, Lloyd Accounting Services",
      image: "../../assets/testimonials/testimonial-6.webp"
    }
  ];

  return (
    <>
      <LandingImage
        title="Payroll Services"
        link="Services / Payroll Services"
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

      {/* Payroll Services Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Payroll <span className="text-[#2a4768]">Services</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Comprehensive payroll processing support tailored for UK accounting firms and their clients.
          </p>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Expand Your <span className="text-[#2a4768]">Payroll Services</span> with Expert Support
              </h3>
              <p className="text-gray-600 mb-6">
                White Bull provides reliable, accurate payroll processing services that enable UK accounting firms to offer comprehensive payroll solutions to their clients without the administrative burden.
              </p>
              <p className="text-gray-600 mb-6">
                Our payroll specialists work as an extension of your practice, managing all aspects of payroll processing while ensuring compliance with the latest HMRC and pension regulations.
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
                src="../../assets/services/payroll-main.webp"
                alt="Payroll Services"
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
              Benefits of Our <span className="text-[#2a4768]">Payroll Services</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Discover how our payroll support can enhance your practice offerings and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {payrollBenefits.map((benefit) => (
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
                src="../../assets/services/payroll-features.webp"
                alt="Comprehensive Payroll Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#2a4768]">Payroll Solutions</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our payroll services cover all aspects of payroll processing, ensuring accurate calculations, timely submissions, and full compliance with UK regulations.
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
              A structured, efficient approach to payroll processing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Data Collection</h4>
              <p className="text-gray-600 text-sm">We gather all necessary payroll information and employee details.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Processing</h4>
              <p className="text-gray-600 text-sm">We calculate pay, deductions, and prepare necessary documentation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Submissions</h4>
              <p className="text-gray-600 text-sm">We handle RTI submissions to HMRC and pension providers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Reporting</h4>
              <p className="text-gray-600 text-sm">We provide detailed reports and documentation for your clients.</p>
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
              Hear from accounting firms that have expanded their payroll services with our support.
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
              <h4 className="text-xl font-bold mb-3">How do you ensure payroll compliance?</h4>
              <p className="text-gray-600">
                Our payroll specialists undergo continuous training on UK payroll legislation and HMRC requirements. We maintain subscriptions to professional payroll resources and use HMRC-recognized software to ensure all calculations and submissions comply with current regulations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Which payroll software do you use?</h4>
              <p className="text-gray-600">
                We're experienced with all major UK payroll software including Sage, Xero, QuickBooks, Iris, BrightPay, and others. We can work within your existing software environment or recommend solutions that best suit your clients' needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How do you handle client communication?</h4>
              <p className="text-gray-600">
                We can operate under your firm's brand, with communication flowing through your practice. Alternatively, we can provide direct support to your clients while keeping you informed. The service model is flexible to suit your firm's preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">What happens if there are payroll queries or issues?</h4>
              <p className="text-gray-600">
                We provide dedicated support to resolve any payroll queries or issues promptly. Our team is available to address questions from both your practice and your clients, ensuring seamless payroll processing regardless of complexities that may arise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2a4768]">Expand</span> Your Payroll Offering?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover how White Bull's payroll services can help your firm offer comprehensive payroll solutions without the administrative burden.
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
              <h4 className="text-xl font-bold mb-3">Bookkeeping Services</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive bookkeeping that integrates seamlessly with payroll processing for complete financial management.
              </p>
              <Link
                to="/services/bookkeeping"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Tax Return Preparation</h4>
              <p className="text-gray-600 mb-4">
                Expert preparation of personal and business tax returns including payroll-related tax submissions.
              </p>
              <Link
                to="/services/tax-return-preparation"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Management Accounts</h4>
              <p className="text-gray-600 mb-4">
                Regular management reporting that incorporates payroll data for comprehensive business performance analysis.
              </p>
              <Link
                to="/services/management-accounts"
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
            Stay Updated with the Latest Payroll Insights
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive payroll updates, compliance news, and practical strategies for UK accounting firms.
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

export default Payroll;