import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaArrowRight, FaCalculator, FaCalendarAlt, FaShieldAlt, FaFileAlt } from "react-icons/fa";

const TaxReturn = () => {
  const taxReturnBenefits = [
    {
      id: 1,
      title: "Enhanced Efficiency",
      description: "Process more tax returns without increasing your staffing costs or workload pressure.",
      icon: <FaCalculator className="text-3xl text-[#2a4768]" />
    },
    {
      id: 2,
      title: "Deadline Assurance",
      description: "Meet HMRC filing deadlines with our reliable and timely tax return preparation service.",
      icon: <FaCalendarAlt className="text-3xl text-[#2a4768]" />
    },
    {
      id: 3,
      title: "Compliance Confidence",
      description: "Ensure all returns comply with the latest HMRC regulations and tax legislation.",
      icon: <FaShieldAlt className="text-3xl text-[#2a4768]" />
    },
    {
      id: 4,
      title: "Comprehensive Documentation",
      description: "Receive detailed workpapers with clear explanations and calculation breakdowns.",
      icon: <FaFileAlt className="text-3xl text-[#2a4768]" />
    }
  ];

  const serviceFeatures = [
    "Personal tax return preparation (SA100)",
    "Partnership tax returns (SA800)",
    "Corporation tax returns (CT600)",
    "Capital gains calculations",
    "Dividend and investment income analysis",
    "Rental income and expenses",
    "Foreign income reporting",
    "Self-employment income calculations"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "White Bull's tax team has transformed our tax season. We've increased our client capacity by 40% while reducing stress on our in-house staff and maintaining quality standards.",
      author: "Sarah Williams",
      position: "Managing Director, Williams Tax Solutions",
      image: "../../assets/testimonials/testimonial-1.webp"
    },
    {
      id: 2,
      quote: "The technical knowledge of White Bull's tax specialists is impressive. They stay current with tax legislation changes and have helped us navigate complex tax situations for our clients with confidence.",
      author: "James Thompson",
      position: "Partner, Thompson & Partners Accountancy",
      image: "../../assets/testimonials/testimonial-2.webp"
    }
  ];

  return (
    <>
      <LandingImage
        title="Tax Return Preparation Services"
        link="Services / Tax Return Preparation"
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

      {/* Tax Return Preparation Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Tax Return <span className="text-[#2a4768]">Preparation Services</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Professional tax return preparation support specifically designed for UK accounting practices.
          </p>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Scale Your <span className="text-[#2a4768]">Tax Services</span> with Expert Preparation Support
              </h3>
              <p className="text-gray-600 mb-6">
                White Bull provides high-quality tax return preparation services that help UK accounting firms manage seasonal workloads, meet HMRC deadlines, and maintain consistent service quality.
              </p>
              <p className="text-gray-600 mb-6">
                Our qualified tax specialists work as an extension of your practice, preparing accurate, compliant tax returns while adhering to your firm's review procedures and quality standards.
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
                src="../../assets/services/tax-return-main.webp"
                alt="Tax Return Preparation Services"
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
              Benefits of Our <span className="text-[#2a4768]">Tax Return Services</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Discover how our tax return preparation support can enhance your practice efficiency and client capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taxReturnBenefits.map((benefit) => (
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
                src="../../assets/services/tax-return-features.webp"
                alt="Comprehensive Tax Return Preparation Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#2a4768]">Tax Return Solutions</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our tax return preparation services cover all major UK tax returns, ensuring accurate, compliant filings that meet HMRC requirements and minimize client tax liabilities.
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
              A structured, efficient approach to tax return preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Data Collection</h4>
              <p className="text-gray-600 text-sm">We gather all necessary tax information and supporting documents.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Analysis & Preparation</h4>
              <p className="text-gray-600 text-sm">We analyze the data and prepare the returns with detailed calculations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Quality Review</h4>
              <p className="text-gray-600 text-sm">All returns undergo rigorous internal quality checks before delivery.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Partner Review & Filing</h4>
              <p className="text-gray-600 text-sm">Your firm reviews, approves, and files the completed tax returns.</p>
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
              Hear from accounting firms that have enhanced their tax return capacity with our services.
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
              <h4 className="text-xl font-bold mb-3">How do you stay current with tax legislation?</h4>
              <p className="text-gray-600">
                Our tax specialists undergo continuous professional development and receive regular updates on tax legislation changes. We maintain subscriptions to professional tax resources and HMRC guidance to ensure compliance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Which tax software do you use?</h4>
              <p className="text-gray-600">
                We're proficient in all major UK tax software including Iris, TaxCalc, CCH, Sage, Digita, BTC, and others. We can work within your existing tax software environment for seamless integration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How do you handle complex tax situations?</h4>
              <p className="text-gray-600">
                Our team includes tax specialists with expertise in various complex areas including property, investments, foreign income, and business taxation. For particularly complex cases, we provide detailed notes and can consult with your firm's tax partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Who is responsible for tax advice?</h4>
              <p className="text-gray-600">
                While we prepare accurate tax returns and may highlight planning opportunities, the provision of formal tax advice remains with your practice. We support your advisory role with thorough calculations and technical research when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2a4768]">Transform</span> Your Tax Season?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover how White Bull's tax return preparation services can help your firm handle more clients, meet deadlines, and maintain quality during busy tax seasons.
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
              <h4 className="text-xl font-bold mb-3">Year-End Accounting</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive accounts preparation to complement your tax return services for business clients.
              </p>
              <Link
                to="/services/year-end-accounting"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Bookkeeping Services</h4>
              <p className="text-gray-600 mb-4">
                Accurate financial record-keeping to ensure tax returns are based on reliable financial data.
              </p>
              <Link
                to="/services/bookkeeping"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Tax Planning</h4>
              <p className="text-gray-600 mb-4">
                Strategic tax planning services to help your clients minimize tax liabilities and achieve financial goals.
              </p>
              <Link
                to="/services/tax-planning"
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
            Stay Updated with the Latest Tax Insights
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive tax updates, industry news, and practical strategies for UK accounting firms.
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

export default TaxReturn;