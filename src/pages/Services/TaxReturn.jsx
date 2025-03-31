import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

import {
  FaCheckCircle,
  FaArrowRight,
  FaCalculator,
  FaCalendarAlt,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";

const TaxReturn = () => {
  const faqs = [
    {
      question: "What types of tax returns does White Bull handle?",
      answer:
        "We handle individual self-assessment returns, corporate tax filings, partnership and LLP filings, and more.",
    },
    {
      question: "Why should I outsource tax return preparation?",
      answer:
        "Outsourcing tax return preparation saves your firm time, reduces overhead costs, and ensures accurate, compliant filings for your clients without the need for an in-house tax team.",
    },
    {
      question: "How does White Bull ensure compliance with UK tax laws?",
      answer:
        "Our team stays up to date with the latest UK tax legislation, ensuring that your clients’ returns are always filed in accordance with current regulations.",
    },
    {
      question: "Can White Bull help with tax planning?",
      answer:
        "Yes! In addition to preparing tax returns, we offer proactive tax planning advice to help your clients reduce their tax liabilities and improve financial efficiency.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <LandingImage
        title="Outsourced Accounting Services for UK Accounting Firms"
        link="Services / Tax Return Preparation"
      />

      <ServiceList />

      <div className="mx-auto my-8 w-11/12 rounded-2xl border border-[#2a4768] bg-white p-4.5">
        <TbPhoneCalling className="text-6xl text-[#2a4768]" />
        <h2 className="text-lg font-bold">Need Help?</h2>
        <p className="pt-2 pb-5 text-gray-500">
          Get in touch and let us know how we can help touch as soon as
          possible.
        </p>
        <Link
          to={"/contact"}
          className="rounded-md bg-linear-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
      <img
        src={OutsourceYearEnd}
        className="mx-auto h-auto w-11/12 rounded-2xl"
      />

      <div className="bg-[#eceef6] px-33 py-30">
        <div>
          <h2 className="text-left text-4xl font-bold text-[#2a4768]">
            Tax Return Season Doesn’t Have to Feel Like a Never-Ending Audit
          </h2>
          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">Tax return season </span>can feel like
            juggling numbers while walking a financial tightrope.
            <span className="font-bold">
              {" "}
              Endless paperwork, HMRC compliance, and looming deadlines—
            </span>
            sounds familiar, right? But here’s the good news: White Bull is here
            to take that burden off your shoulders.
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Our outsourced tax return preparation services are designed
            exclusively for UK accounting firms and CAs who want to:
            <span className="font-bold">
              <br></br>✔ Meet deadlines without last-minute panic<br></br>✔
              Ensure 100% compliance with UK tax laws<br></br>✔ Reduce the risk
              of errors, penalties, and audits<br></br>✔ Scale services up or
              down based on client demand
            </span>
          </p>

          <p className="mt-4 mb-4 text-justify text-gray-500">
            With White Bull, your clients will never know we’re working behind
            the scenes—but they’ll certainly notice the flawless service you
            provide.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold text-[#2a4768]">
            The Real Struggle – And How We Solve It
          </h2>
          <h3 className="text-left text-3xl font-bold">
            Tax Season is Like a Game of Chess—One Wrong Move, and It’s
            Checkmate
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            You know the struggle.
            <span className="font-bold">
              {" "}
              One missing receipt, a miscalculated deduction, or a filing
              delay,{" "}
            </span>
            and suddenly, your firm is firefighting client queries instead of
            growing your business.
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            We’ve seen it all:
            <span className="font-bold">
              <br></br>✅ Tight deadlines turning into all-nighters<br></br>✅
              Last-minute client uploads that make you question life choices
              <br></br>✅ Ever-changing HMRC regulations that feel like a moving
              goalpost
            </span>
          </p>

          <p className="mt-4 mb-4 text-justify text-gray-500">
            That’s where White Bull steps in—to ensure
            <span className="font-bold">
              {" "}
              error-free, compliant, and timely{" "}
            </span>
            tax return preparation so you can focus on running your firm instead
            of running after deadlines.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold text-[#2a4768]">
            Why Outsource Tax Return Preparation to White Bull?
          </h2>
          <h3 className="text-left text-3xl font-bold">
            More Accuracy, Less Stress—It’s a Smart Choice
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Outsourcing your tax return preparation isn’t just about saving
            time—it’s about<span className="font-bold"> working smarter. </span>
            Here’s why firms across the UK trust White Bull:
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">📌 Cost-Effective – </span>No need for
            extra in-house staff. Get expert tax services when you need them,
            without the overhead.<br></br>
            <span className="font-bold">📌 Expert Support – </span>Our tax
            specialists stay ahead of UK tax laws, ensuring your clients’
            filings are always spot-on.<br></br>
            <span className="font-bold">📌 Scalability – </span>Handling 10
            returns today? 100 next month? We scale with you.<br></br>
            <span className="font-bold">📌 Time-Saving – </span>Spend less time
            on tax filings and more time building client relationships.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold text-[#2a4768]">
            What We Offer – Tailored Tax Solutions for UK Accounting Firms
          </h2>
          <h3 className="text-left text-3xl font-bold">
            More Than Just Tax Filing—We’re Your Tax Partner
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            We don’t believe in one-size-fits-all. Your clients have unique tax
            needs, and we tailor our services accordingly.
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">
              ✅ Personalized Tax Filing Solutions –{" "}
            </span>
            Whether it’s an individual self-assessment or a corporate tax
            return, we optimize for maximum tax savings.<br></br>
            <span className="font-bold">✅ Full Compliance – </span>We stay
            updated on HMRC’s latest regulations so you don’t have to.<br></br>
            <span className="font-bold">✅ Proactive Tax Planning – </span>We
            don’t just file; we help you strategize to reduce liabilities and
            improve cash flow for your clients.
          </p>

          <p className="mt-4 mb-4 text-justify text-gray-500">
            When you work with us, your clients will never know that we’re doing
            the heavy lifting behind the scenes—but they’ll certainly notice the
            difference in service.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold text-[#2a4768]">
            Why Choose White Bull for Your Firm’s Tax Return Preparation?
          </h2>
          <h3 className="text-left text-3xl font-bold">
            Your Secret Weapon for Stress-Free Tax Season
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            White Bull has earned the trust of accounting firms across the UK
            for a reason. We offer
            <span className="font-bold">
              {" "}
              reliable, efficient, and compliant{" "}
            </span>
            tax return preparation services that help your firm:
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">✅ Stay Ahead of Deadlines – </span>
            No more last-minute scrambling.<br></br>
            <span className="font-bold">✅ Ensure 100% Accuracy – </span>Every
            return is reviewed through a rigorous quality control process.
            <br></br>
            <span className="font-bold">✅ Work Seamlessly – </span>We integrate
            with your existing processes, working as an extension of your team.
            <br></br>
            <span className="font-bold">✅ Avoid Costly Errors – </span>Mistakes
            can lead to penalties and client dissatisfaction. We help you get it
            right the first time.
          </p>

          <p className="mt-4 mb-4 text-justify text-gray-500">
            When you partner with White Bull, your clients will never know we
            exist—but they’ll definitely feel the difference in your service
            quality.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#2a4768]">
            Comprehensive Tax Return Services for Individual and Business
            Clients
          </h2>
          <h3 className="text-3xl font-bold">
            From Sole Traders to Large Corporations—We Cover It All
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            White Bull provides tax return preparation for:
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">📌 Individual Tax Returns – </span>
            Self-assessment returns done with precision, ensuring all deductions
            are accounted for.<br></br>
            <span className="font-bold">📌 Corporate Tax Returns – </span>
            Complex corporate filings managed efficiently.<br></br>
            <span className="font-bold">📌 Partnerships & LLPs – </span>
            Hassle-free tax filings for business partnerships and LLPs.<br></br>
            <span className="font-bold">📌 Tax Planning – </span>Strategic tax
            advice to help clients optimize their financial position.
          </p>

          <p className="rounded-4xl bg-[#2a4768] px-30 py-10 text-justify text-xl text-white">
            Streamline account reconciliation with our
            <span className="font-bold"> Bank Reconciliation Services, </span>
            offering detailed support for accurate financial data year-round.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#2a4768]">
          Save Time, Reduce Stress, and Stay Compliant with White Bull
          </h2>
          <h3 className="text-3xl font-bold">
          Tax Season Without the Chaos—Sounds Good, Right?
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
          Managing tax returns in-house can quickly become overwhelming—especially during peak seasons. By outsourcing to White Bull, your firm can:
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">✔ Minimize Errors – </span>Reduce the risk of costly HMRC penalties.<br></br><span className="font-bold">✔ Ensure Timely Filing – </span>Never miss a deadline again.<br></br><span className="font-bold">✔ Focus on Growth – </span>Free up time to scale your business and serve clients better.</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#2a4768]">
          Trusted by Accounting Firms Across the UK
          </h2>
          <h3 className="text-3xl font-bold">
          Join the Growing List of Firms Who Trust White Bull
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">We’ve built our reputation on<span className="font-bold"> accuracy, efficiency, and compliance, </span>helping UK accounting firms</p>

          <p className="mt-4 mb-5 text-justify text-gray-500">Don’t let tax season drain your firm’s time and resources.<span className="font-bold"> Let White Bull handle the numbers while you focus on your clients.</span></p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#2a4768]">
          Start Outsourcing Your Tax Return Preparation Today
          </h2>
          <p className="mt-4 mb-5 text-justify text-gray-500">Why struggle with tax return preparation when you can<span className="font-bold"> outsource it with confidence</span>? White Bull’s team of tax experts is ready to streamline your workload, ensuring<span className="font-bold"> timely, accurate, and compliant tax filings </span>for your firm.</p>

          <p className="mt-4 mb-5 text-justify text-gray-500"><span className="font-bold">📞 Contact us today </span>to learn more about how we can support your firm through tax season and beyond.</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="px-33 py-30">
        <div className="px-20 text-center">
          <p className="text-xl font-bold text-[#2a4768]">FAQs</p>
          <h2 className="mt-5 mb-5 text-5xl font-bold">
            Everything You Need to Know About
            <span className="text-[#2a4768]"> Outsourced Accounting </span>
          </h2>
          <p className="py-2 pl-30 text-justify text-gray-500">
            Discover helpful answers to your most pressing financial questions.
            We’re here to assist you every step of the way!
          </p>
        </div>

        <div>
          <div className="px-40 text-xl">
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
    </>
  );
};

export default TaxReturn;
