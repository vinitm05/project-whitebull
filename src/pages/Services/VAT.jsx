import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaArrowRight, FaFileAlt, FaChartPie, FaShieldAlt, FaClock } from "react-icons/fa";

const VAT = () => {
  const vatReturnBenefits = [
    {
      id: 1,
      title: "Enhanced Compliance",
      description: "Stay fully compliant with HMRC's Making Tax Digital (MTD) requirements and VAT regulations.",
      icon: <FaShieldAlt className="text-3xl text-[#2a4768]" />
    },
    {
      id: 2,
      title: "Time Efficiency",
      description: "Free up your team's time to focus on advisory services and client relationships.",
      icon: <FaClock className="text-3xl text-[#2a4768]" />
    },
    {
      id: 3,
      title: "Increased Capacity",
      description: "Handle more clients during peak VAT periods without increasing your overhead costs.",
      icon: <FaChartPie className="text-3xl text-[#2a4768]" />
    },
    {
      id: 4,
      title: "Complete Documentation",
      description: "Receive thorough workpapers with clear audit trails for every VAT calculation.",
      icon: <FaFileAlt className="text-3xl text-[#2a4768]" />
    }
  ];

  const serviceFeatures = [
    "VAT return preparation from source documents",
    "MTD-compliant submissions",
    "VAT scheme optimization",
    "Partial exemption calculations",
    "EU and international VAT handling",
    "VAT reconciliations and adjustments",
    "Detailed checking workpapers",
    "VAT control account reconciliations"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "White Bull has transformed our VAT process. Their meticulous approach has reduced errors, improved compliance, and freed our team to focus on client advisory work.",
      author: "Sarah Johnson",
      position: "Managing Partner, Johnson Accounting LLP",
      image: "../../assets/testimonials/testimonial-1.webp"
    },
    {
      id: 2,
      quote: "Since outsourcing our VAT returns to White Bull, we've been able to take on 40% more clients without compromising on quality or compliance standards.",
      author: "David Thompson",
      position: "Director, Thompson & Associates",
      image: "../../assets/testimonials/testimonial-2.webp"
    }
  ];

  return (
    <>
      <LandingImage
        title="VAT Return Filing Services"
        link="Services / VAT Return Filing"
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

      {/* VAT Return Filing Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            VAT Return <span className="text-[#2a4768]">Filing Services</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Professional VAT return preparation and filing services tailored for UK accounting practices.
          </p>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Simplify Your <span className="text-[#2a4768]">VAT Compliance</span> with Expert Support
              </h3>
              <p className="text-gray-600 mb-6">
                White Bull delivers comprehensive VAT return preparation and filing services designed to help UK accounting firms manage their compliance workload efficiently and accurately.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced team works as an extension of your practice, handling VAT calculations, reconciliations, and MTD submissions while adhering to your firm's procedures and quality standards.
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
                src="../../assets/services/vat-return-main.webp"
                alt="VAT Return Filing Services"
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
              Benefits of Our <span className="text-[#2a4768]">VAT Return Filing Services</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Discover how our VAT support can transform your practice efficiency and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vatReturnBenefits.map((benefit) => (
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
                src="../../assets/services/vat-return-features.webp"
                alt="Comprehensive VAT Return Filing Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#2a4768]">VAT Solutions</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our VAT return services cover all aspects of preparation and filing, ensuring accurate, compliant submissions that meet HMRC requirements and deadlines.
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
              A structured, efficient approach to VAT return preparation and filing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Data Collection</h4>
              <p className="text-gray-600 text-sm">We gather all transaction data and supporting documentation for the VAT period.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Calculation & Reconciliation</h4>
              <p className="text-gray-600 text-sm">We prepare VAT calculations, reconciliations, and workpapers with clear explanations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Quality Review</h4>
              <p className="text-gray-600 text-sm">All VAT returns undergo thorough internal quality checks before delivery.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Partner Review & Filing</h4>
              <p className="text-gray-600 text-sm">Your firm reviews, approves, and submits the completed VAT returns to HMRC.</p>
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
              Hear from accounting firms that have streamlined their VAT processes with our services.
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
              <h4 className="text-xl font-bold mb-3">How do you handle Making Tax Digital requirements?</h4>
              <p className="text-gray-600">
                Our team is fully trained in MTD compliance and can work with all major MTD-compatible software. We ensure all VAT returns meet HMRC's digital linking and submission requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">What accounting software do you support for VAT returns?</h4>
              <p className="text-gray-600">
                We work with all major UK accounting software including Xero, QuickBooks, Sage, FreeAgent, and others. We can adapt to your firm's preferred software environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How do you handle complex VAT situations?</h4>
              <p className="text-gray-600">
                Our team has extensive experience with complex VAT scenarios including partial exemption, margin schemes, EU transactions, reverse charges, and industry-specific VAT rules. We document all calculations thoroughly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Who has final authorization for VAT submissions?</h4>
              <p className="text-gray-600">
                While we prepare all the necessary calculations and documentation, the final review and authorization for submission always remains with your firm, maintaining your control and professional responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2a4768]">Streamline</span> Your VAT Process?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover how White Bull's VAT return filing services can help your firm handle more clients, meet deadlines, and maintain compliance during busy VAT periods.
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
                Comprehensive bookkeeping solutions to ensure accurate financial records and VAT tracking.
              </p>
              <Link
                to="/services/bookkeeping"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Year-End Accounting</h4>
              <p className="text-gray-600 mb-4">
                Expert preparation of annual accounts, ensuring consistency with VAT returns and compliance.
              </p>
              <Link
                to="/services/year-end-accounting"
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

export default VAT;