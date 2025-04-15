import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceBookkeeping from "../../assets/outsourced-bookkeeping.webp";
import ServiceList from "../../components/ServiceList";

const BookKeeping = () => {
  const faqs = [
    {
      question:
        "What benefits do outsourced bookkeeping services offer CA and accounting firms?",
      answer:
        "Outsourcing bookkeeping to Wisely Yours lets your firm streamline financial management while cutting down on the need for an in-house team. This reduces overhead costs, improves accuracy, and frees up time for your team to focus on strategic growth.",
    },
    {
      question: "How can remote bookkeeping benefit my firm?",
      answer:
        "Remote bookkeeping gives you 24/7 access to accurate financial data. Wisely Yours ensures your records are up-to-date and accessible anytime, giving you a clear picture of your firm’s financial health.",
    },
    {
      question: "What sets Wisely Yours's bookkeeping apart from other?",
      answer:
        "Unlike general bookkeeping services, Wisely Yours specializes in providing solutions for CA and accounting firms. Our expertise in the unique needs of accounting professionals ensures that we offer cost-effective, accurate, and reliable bookkeeping services tailored specifically to your firm.",
    },
    {
      question: "What accounting tools does Wisely Yours use for bookkeeping?",
      answer:
        "We work with all major accounting software to ensure seamless integration and error-free, compliant bookkeeping for your firm.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <LandingImage
        title="Outsourced Accounting Services for India Accounting Firms"
        link="Services / Accounting Services"
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
        src={OutsourceBookkeeping}
        className="mx-auto h-auto w-11/12 rounded-2xl"
      />

      <div className="my-8 px-4.5">
        <div>
          <h3 className="text-4xl font-bold">
            <span className="text-[#2a4768]">Struggling with Bookkeeping?</span>{" "}
            Wisely Yours has you covered!
          </h3>
          <p className="my-5 text-justify leading-7 text-gray-500">
            Managing bookkeeping in-house can be overwhelming, time-consuming,
            and expensive. As your firm grows, handling increasing transactions,
            reconciliations, and compliance requirements can lead to errors,
            missed deadlines, and potential risks.
          </p>

          <p className="my-5 text-justify leading-7 text-gray-500">
            We specialize in outsourced bookkeeping services tailored for CA and
            accounting firms in the India. Our expert team ensures accurate
            financial records, seamless reconciliations, and full compliance
            with India accounting standards—so your firm can focus on delivering
            high-value services to clients.
          </p>
          <p className="my-5 text-justify font-bold text-gray-500">
            🚀 Reduce costs, boost efficiency, and gain financial clarity with
            Wisely Yours’s expert bookkeeping solutions.
          </p>
          <p className="my-5 text-justify leading-7 text-gray-500">
            <span className="font-semibold text-gray-600">Pan Point:</span> As
            your firm grows, managing bookkeeping becomes increasingly complex.
            Delays in reconciliations or errors in financial data can expose
            your firm to compliance risks. With Wisely Yours handling your
            bookkeeping, your firm avoids these pitfalls, keeping client records
            accurate, organized, and timely.
          </p>
          <p className="my-6 rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            Looking to improve your firm’s overall financial management? Explore
            our{" "}
            <Link to={"/services/accounting"} className="font-bold">
              Outsourced Accounting Services
            </Link>{" "}
            to see how Wisely Yours supports your firm across all areas of
            financial operations.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#2a4768]">
            Why India Accounting Firms Trust Wisely Yours’s Outsourced
            Bookkeeping?
          </h3>

          <h2 className="my-3.5 text-2xl font-bold">
            Cost-Effective & Scalable Solutions
          </h2>
          <p className="leading-6.5 text-gray-500">
            Outsourcing your bookkeeping to Wisely Yours eliminates the overhead
            costs of hiring and managing an in-house team. Our flexible services
            adapt to your firm’s growth, allowing you to scale operations
            without increasing fixed costs.
          </p>
          <h2 className="my-3.5 text-2xl font-bold">
            {" "}
            Expertise in India Accounting & Compliance
          </h2>
          <p className="leading-6.5 text-gray-500">
            Our team is highly experienced in India GAAP, IFRS, and HMRC
            compliance, ensuring error-free financial records and audit
            readiness. We keep your firm and your clients aligned with
            regulatory requirements, minimizing compliance risks.
          </p>
          <h2 className="my-3.5 text-2xl font-bold">
            {" "}
            Enhanced Accuracy & Efficiency
          </h2>
          <p className="leading-6.5 text-gray-500">
            With real-time data entry, automated reconciliations, and meticulous
            financial tracking, we help your firm maintain precision in
            bookkeeping. Our expert team ensures that all transactions are
            accurately recorded, reducing the risk of discrepancies.
          </p>
          <h2 className="my-3.5 text-2xl font-bold">
            {" "}
            Seamless Integration with Accounting Software
          </h2>
          <p className="leading-6.5 text-gray-500">
            We work with leading accounting platforms, including QuickBooks,
            Xero, Sage, and FreeAgent, ensuring a smooth and efficient
            bookkeeping process that aligns with your firm’s workflow.
          </p>
          <p className="my-5 text-justify leading-7 font-bold text-gray-500">
            💡 Partner with Wisely Yours and experience a bookkeeping solution
            that is efficient, accurate, and tailored to your firm’s needs.
          </p>

          <p className="rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            Explore our full range of{" "}
            <Link to={"/services/financialanalysis"} className="font-bold">
              Outsourced Financial Analysis Service
            </Link>{" "}
            and discover how we can help eleGSTe your firm’s performance.
          </p>
        </div>

        <div>
          <h2 className="my-5 text-4xl font-bold">
            <span className="text-[#2a4768]">
              Our Outsourced Bookkeeping Services
            </span>{" "}
            for India CA & Accounting Firms
          </h2>

          {/* 1 */}
          <h3 className="text-2xl font-bold">
            Accurate Financial Transaction Recording
          </h3>
          <ul className="py-5 text-gray-500">
            <li>
              ✔ Maintain real-time, error-free transaction records for your
              clients.
            </li>
            <li>✔ Ensure compliance with India accounting standards.</li>
          </ul>

          {/* 2 */}
          <h3 className="text-2xl font-bold">
            Bank & Credit Card Reconciliations
          </h3>
          <ul className="py-5 text-gray-500">
            <li>
              ✔ Identify and correct discrepancies before they impact financial
              reporting.
            </li>
            <li>✔ Keep financial records audit-ready and fully reconciled.</li>
          </ul>

          {/* 3 */}
          <h3 className="text-2xl font-bold">GST & Tax-Ready Bookkeeping</h3>
          <ul className="py-5 text-gray-500">
            <li>✔ Maintain organized and tax-compliant financial records.</li>
            <li>✔ Ensure seamless GST returns and HMRC submissions.</li>
          </ul>

          {/* 4 */}
          <h3 className="text-2xl font-bold">
            Month-End & Year-End Closing Support
          </h3>
          <ul className="py-5 text-gray-500">
            <li>✔ Reconcile accounts for a smooth financial close.</li>
            <li>
              ✔ Generate detailed financial reports for strategic
              decision-making.
            </li>
          </ul>

          {/* 5 */}
          <h3 className="text-2xl font-bold">
            Accounts Payable & Receivable Management
          </h3>
          <ul className="py-5 text-gray-500">
            <li>
              ✔ Streamline invoice processing, payments, and collections.
            </li>
            <li>✔ Reduce late payments and improve cash flow management.</li>
          </ul>

          <p className="mb-5 leading-7 text-gray-500">
            Over the years, we’ve helped India accounting firms optimize their
            bookkeeping processes, ensuring that client accounts remain accurate
            and compliant. By choosing Wisely Yours, your firm will have the
            confidence of knowing all financial records are in good hands.
          </p>

          <p className="rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            Looking for reliable tax support? Check out our{" "}
            <Link to={"/services/taxreturn"} className="font-bold">
              Tax Preparation Services
            </Link>
            for comprehensive, accurate solutions to meet your clients’ tax
            filing needs.
          </p>

          <h2 className="my-5 text-4xl font-bold text-[#2a4768]">
            The Wisely Yours Advantage – Your Reliable Bookkeeping Partner
          </h2>
          <p className="text-gray-500">
            With years of experience in outsourced accounting, Wisely Yours is
            the trusted partner for India CA and accounting firms. Our services
            enhance efficiency, accuracy, and cost-effectiveness, helping firms
            streamline their bookkeeping and focus on client advisory services.
          </p>
          <ul className="my-6 text-gray-500">
            <li>
              🔹{" "}
              <span className="font-bold">
                100% Data Security & Confidentiality
              </span>{" "}
              – Protecting your client’s financial data is our top priority.
            </li>
            <li>
              🔹 <span className="font-bold">Dedicated Offshore Team</span> –
              Get a team of skilled bookkeepers working exclusively for your
              firm.
            </li>
            <li>
              🔹 <span className="font-bold">Proven Track Record</span> – We’ve
              helped India firms optimize their bookkeeping processes with
              flawless financial management.
            </li>
          </ul>

          <p className="font-bold text-gray-500">
            💡 Outsource your bookkeeping to Wisely Yours and transform the way
            your firm manages financial records!
          </p>

          <p className="my-5 text-justify leading-7 text-gray-500">
            <span className="font-semibold text-gray-600">Pan Point:</span>{" "}
            Without reliable bookkeeping support, firms face the risk of missed
            deadlines, inaccurate data, and compliance issues. Wisely Yours
            ensures that client records are meticulously maintained,
            safeguarding your firm’s efficiency and reputation.
          </p>

          <h2 className="my-5 text-4xl font-bold text-[#2a4768]">
            Start Partnering with Wisely Yours for Seamless Bookkeeping
          </h2>
          <p className="text-gray-500">
            Our outsourced bookkeeping services are designed to help India CA
            and accounting firms improve accuracy, efficiency, and compliance.
            Whether you need help with day-to-day bookkeeping, reconciliations,
            or GST-ready financial records, Wisely Yours provides expert support
            to keep your clients’ accounts in perfect order.
          </p>
          <p className="mt-6 mb-16 font-bold text-gray-500">
            📩 Get in touch today to discover how Wisely Yours can streamline
            your bookkeeping and enhance your firm’s productivity!
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col items-center bg-white px-4.5 py-10">
        <p className="font-semibold text-[#2a4768]">FAQs</p>
        <h2 className="text-center text-3xl font-bold">
          Everything You Need to Know About{" "}
          <span className="text-[#2a4768]">Outsourced Accounting</span>
        </h2>
        <p className="text-center text-gray-500">
          Discover helpful answers to your most pressing financial questions.
          We’re here to assist you every step of the way!{" "}
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
      </div>
    </>
  );
};

export default BookKeeping;
