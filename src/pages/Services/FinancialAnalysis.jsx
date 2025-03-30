import React from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import { FaCheckCircle, FaArrowRight, FaFileAlt, FaChartPie, FaShieldAlt, FaClock } from "react-icons/fa";

const FinancialAnalysis = () => {
  const financialAnalysisBenefits = [
    {
      id: 1,
      title: "Strategic Insights",
      description: "Deliver actionable insights that help your clients make informed business decisions.",
      icon: <FaChartPie className="text-3xl text-[#2a4768]" />
    },
    {
      id: 2,
      title: "Value-Added Services",
      description: "Expand your advisory offerings without investing in specialized in-house expertise.",
      icon: <FaFileAlt className="text-3xl text-[#2a4768]" />
    },
    {
      id: 3,
      title: "Efficiency",
      description: "Access expert analysis without the time investment of building reports from scratch.",
      icon: <FaClock className="text-3xl text-[#2a4768]" />
    },
    {
      id: 4,
      title: "Competitive Edge",
      description: "Differentiate your practice by offering sophisticated financial analytics to clients.",
      icon: <FaShieldAlt className="text-3xl text-[#2a4768]" />
    }
  ];

  const serviceFeatures = [
    "Key performance indicator (KPI) analysis",
    "Cash flow forecasting and analysis",
    "Profit margin and cost analysis",
    "Industry benchmarking",
    "Financial trend identification",
    "Scenario planning and sensitivity analysis",
    "Working capital optimization",
    "Growth and expansion analysis"
  ];

  const testimonials = [
    {
      id: 1,
      quote: "White Bull's financial analysis services have transformed our client relationships. We're now seen as strategic advisors rather than just compliance specialists.",
      author: "James Wilson",
      position: "Partner, Wilson Accounting Partners",
      image: "../../assets/testimonials/testimonial-5.webp"
    },
    {
      id: 2,
      quote: "The depth of insight in the financial analysis reports has allowed us to have much more meaningful conversations with our clients about their business performance and growth opportunities.",
      author: "Rebecca Clarke",
      position: "Director, Clarke Advisory Services",
      image: "../../assets/testimonials/testimonial-6.webp"
    }
  ];

  return (
    <>
      <LandingImage
        title="Financial Analysis Services"
        link="Services / Financial Analysis"
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

      {/* Financial Analysis Header */}
      <div className="my-12 px-4.5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            Financial <span className="text-[#2a4768]">Analysis Services</span>
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Expert financial analysis and business insights to enhance your clients' decision-making.
          </p>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="bg-gray-50 py-12 px-4.5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Elevate Your <span className="text-[#2a4768]">Advisory Services</span> with Data-Driven Insights
              </h3>
              <p className="text-gray-600 mb-6">
                White Bull provides comprehensive financial analysis services that enable UK accounting firms to deliver high-value advisory services to their clients without the need for specialized in-house resources.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced financial analysts transform your clients' data into actionable insights, helping you strengthen client relationships and position your practice as a strategic business partner.
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
                src="../../assets/services/financial-analysis-main.webp"
                alt="Financial Analysis Services"
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
              Benefits of Our <span className="text-[#2a4768]">Financial Analysis Services</span>
            </h3>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              Discover how our financial analysis can help your firm deliver greater value to clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialAnalysisBenefits.map((benefit) => (
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
                src="../../assets/services/financial-analysis-features.webp"
                alt="Comprehensive Financial Analysis Services"
                className="rounded-2xl shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Comprehensive <span className="text-[#2a4768]">Analysis Solutions</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our financial analysis services provide deep insights into business performance, helping your clients make informed strategic decisions for sustainable growth.
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
              A collaborative approach to delivering valuable financial insights.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Data Collection</h4>
              <p className="text-gray-600 text-sm">We gather financial data and understand your client's specific business objectives.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Analysis & Insights</h4>
              <p className="text-gray-600 text-sm">We perform detailed analysis to identify key trends, opportunities, and challenges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Report Creation</h4>
              <p className="text-gray-600 text-sm">We create clear, actionable reports with visualizations and recommendations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="bg-[#e6eef5] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2a4768] font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Client Presentation</h4>
              <p className="text-gray-600 text-sm">Your firm presents the insights to clients, with optional support from our analysts.</p>
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
              Hear from accounting firms that have enhanced their advisory services with our financial analysis.
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
              <h4 className="text-xl font-bold mb-3">What types of businesses can benefit from financial analysis?</h4>
              <p className="text-gray-600">
                Our financial analysis services are adaptable for businesses of all sizes and across all sectors. We tailor our approach based on industry, business maturity, and specific client objectives to ensure relevant insights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How do you present the analysis to clients?</h4>
              <p className="text-gray-600">
                We provide detailed reports with clear visualizations and executive summaries that you can present to your clients. Optionally, our analysts can join client meetings to help explain complex findings or answer technical questions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">How frequently should financial analysis be conducted?</h4>
              <p className="text-gray-600">
                This depends on your client's needs. We offer quarterly, bi-annual, or annual analysis packages, as well as one-off reports for specific projects or decisions. Many firms include regular analysis as part of their ongoing client service packages.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Can you customize the analysis for specific industries?</h4>
              <p className="text-gray-600">
                Yes, we have industry specialists who understand sector-specific KPIs and benchmarks. We can provide tailored analysis for retail, manufacturing, professional services, hospitality, construction, healthcare, and many other industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4.5 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#2a4768]">Enhance</span> Your Advisory Services?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover how White Bull's financial analysis services can help your firm deliver greater value to clients and strengthen your position as a trusted business advisor.
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
              <h4 className="text-xl font-bold mb-3">Management Accounts</h4>
              <p className="text-gray-600 mb-4">
                Regular management reporting to provide ongoing financial insights for business decisions.
              </p>
              <Link
                to="/services/management-accounts"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Cash Flow Forecasting</h4>
              <p className="text-gray-600 mb-4">
                Detailed cash flow projections to help clients manage liquidity and plan for growth.
              </p>
              <Link
                to="/services/cash-flow-forecasting"
                className="text-[#2a4768] font-semibold flex items-center hover:underline"
              >
                Learn More <FaArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold mb-3">Business Advisory</h4>
              <p className="text-gray-600 mb-4">
                Strategic business guidance and support for growth, profitability, and operational improvements.
              </p>
              <Link
                to="/services/business-advisory"
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

export default FinancialAnalysis;