import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaArrowRight, FaFileAlt, FaChartPie, FaShieldAlt, FaClock } from "react-icons/fa";

const YearEndAccounting = () => {
  const yearEndBenefits = [
    {
      id: 1,
      title: "Increased Capacity",
      description: "Handle more year-end accounts without adding to your headcount or overhead costs.",
      icon: <FaChartPie className="text-3xl text-[#2a4768]" />
    },
    {
      id: 2,
      title: "Accelerated Turnaround",
      description: "Reduce preparation time and meet filing deadlines with our efficient processes.",
      icon: <FaClock className="text-3xl text-[#2a4768]" />
    },
    {
      id: 3,
      title: "Compliance Assurance",
      description: "Ensure all accounts comply with UK GAAP, FRS, and Companies House requirements.",
      icon: <FaShieldAlt className="text-3xl text-[#2a4768]" />
    },
    {
      id: 4,
      title: "Detailed Documentation",
      description: "Receive fully documented work with clear audit trails and explanatory notes.",
      icon: <FaFileAlt className="text-3xl text-[#2a4768]" />
    }
  ];

  const serviceFeatures = [
    "Trial balance conversion and verification",
    "Fixed asset register preparation and depreciation calculations",
    "Balance sheet reconciliations",
    "Accruals and prepayments",
    "Debtors and creditors analysis",
    "Stock valuation adjustments",
    "Statutory accounts preparation",
    "Companies House iXBRL tagging"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "White Bull's year-end accounting support has been invaluable during our busy season. We've been able to take on 30% more clients while maintaining quality and meeting all deadlines.",
      author: "Michael Bennett",
      position: "Director, Bennett & Co Accountants",
      image: "../../assets/testimonials/testimonial-3.webp"
    },
    {
      id: 2,
      quote: "The attention to detail from White Bull's team is exceptional. Their accounts preparation work is thorough, well-documented, and consistently meets our firm's standards.",
      author: "Emily Parker",
      position: "Partner, Parker Financial Services",
      image: "../../assets/testimonials/testimonial-4.webp"
    }
  ];

  return (
    <>
      <LandingImage
        title="Year-End Accounting Services"
        link="Services / Year-End Accounting"
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

      {/* Year-End Accounting Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Year-End <span className="text-[#2a4768]">Accounting Services</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Expert year-end accounts preparation support designed specifically for UK accounting firms.
          </p>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Streamline Your <span className="text-[#2a4768]">Year-End Process</span> with Expert Support
              </h3>
              <p className="text-gray-600 mb-6">
                White Bull provides high-quality year-end accounting services that enable UK accounting firms to handle peak workloads, meet filing deadlines, and maintain exceptional quality standards.
              </p>
              <p className="text-gray-600 mb-6">
                Our qualified team works as an extension of your practice, preparing accurate, compliant year-end accounts while adhering to your firm's quality standards and review processes.
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
                src="../../assets/services/year-end-main.webp"
                alt="Year-End Accounting Services"
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
              Benefits of Our <span className="text-[#2a4768]">Year-End Accounting Services</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Discover how our year-end support can transform your practice efficiency and capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearEndBenefits.map((benefit) => (
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
                src="../../assets/services/year-end-features.webp"
                alt="Comprehensive Year-End Accounting Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#2a4768]">Year-End Solutions</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our year-end accounting services cover all aspects of accounts preparation, ensuring accurate, compliant financial statements that meet UK regulatory requirements.
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
              A structured, efficient approach to year-end accounts preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Information Collection</h4>
              <p className="text-gray-600 text-sm">We gather all required financial data and supporting documentation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Preparation & Analysis</h4>
              <p className="text-gray-600 text-sm">We prepare the accounts with detailed workings and reconciliations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Quality Review</h4>
              <p className="text-gray-600 text-sm">All accounts undergo thorough internal quality checks before delivery.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Partner Review & Filing</h4>
              <p className="text-gray-600 text-sm">Your firm reviews, finalizes, and files the completed accounts.</p>
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
              Hear from accounting firms that have enhanced their year-end capacity with our services.
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
              <h4 className="text-xl font-bold mb-3">Which accounting standards do you follow?</h4>
              <p className="text-gray-600">
                Our team is experienced in UK GAAP, FRS 102, FRS 105, and IFRS. We adapt to the specific accounting framework required for each client based on your instructions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">What software do you use for accounts preparation?</h4>
              <p className="text-gray-600">
                We're proficient in all major UK accounts production software including CCH, Iris, BTC, Digita, TaxCalc, and others. We can work within your existing software environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How do you handle client-specific accounting policies?</h4>
              <p className="text-gray-600">
                We document your firm's accounting policies and procedures at the outset, ensuring all accounts are prepared consistently with your established practices and client-specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Who has final review responsibility?</h4>
              <p className="text-gray-600">
                While we conduct thorough internal quality reviews, the final review and sign-off remain with your firm's partners or qualified accountants, maintaining your control and professional responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2a4768]">Enhance</span> Your Year-End Capacity?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover how White Bull's year-end accounting services can help your firm handle more clients, meet deadlines, and maintain quality during busy periods.
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
                Comprehensive bookkeeping solutions to ensure accurate financial records throughout the year.
              </p>
              <Link
                to="/services/bookkeeping"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Corporation Tax Returns</h4>
              <p className="text-gray-600 mb-4">
                Expert preparation of corporation tax computations and returns to complement year-end accounts.
              </p>
              <Link
                to="/services/tax-returns"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Management Accounts</h4>
              <p className="text-gray-600 mb-4">
                Regular management reporting to provide clients with timely financial insights throughout the year.
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

export default YearEndAccounting;