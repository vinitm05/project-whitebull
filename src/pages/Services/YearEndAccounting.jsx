import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

const YearEndAccounting = () => {
  const faqs = [
    {
      question:
        "What are the benefits of outsourcing year-end accounting for CA and accounting firms?",
      answer:
        "Outsourcing year-end accounting allows your firm to minimize the internal workload while ensuring accurate financial reporting. It helps you meet compliance requirements on time and avoids the need to maintain a full in-house team during the busy year-end period.",
    },
    {
      question:
        "How can Wisely Yours’s year-end accounting services support my firm’s clients?",
      answer:
        "Wisely Yours ensures that your clients’ financial statements are accurately prepared and compliant with India regulations. This support gives your clients a clear view of their financial health and allows them to make informed decisions as they enter the new year.",
    },
    {
      question: "Why choose Wisely Yours for year-end accounting services?",
      answer:
        "Wisely Yours specializes in the unique requirements of India year-end accounting, offering timely, accurate services that reduce the burden on your firm and provide your clients with the reports they need to stay compliant and financially sound.",
    },
    {
      question:
        "How does outsourcing year-end accounting help with compliance?",
      answer:
        "By outsourcing to Wisely Yours, you ensure that all year-end accounting tasks are completed according to India financial regulations. Our team keeps your firm compliant and reduces the risk of errors or missed deadlines that could lead to costly penalties.",
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
        src={OutsourceYearEnd}
        className="mx-auto h-auto w-11/12 rounded-2xl"
      />

      <div className="my-8 px-4.5">
        <div>
          <h3 className="text-4xl font-bold">
            Seamless Year-End Accounting for CA and Accounting Firms in the
            India
          </h3>
          <p className="my-5 text-justify leading-7 text-gray-500">
            Year-end accounting season—also known as the time when accountants
            survive on coffee and tight deadlines. At Wisely Yours, we take the
            stress off your shoulders by providing outsourced year-end
            accounting services tailored specifically for CA and accounting
            firms in the India. From financial statement preparation to
            compliance checks and reconciliations, our experts ensure your
            client’s financials are accurate, compliant, and delivered on time.
          </p>

          <p className="my-5 text-justify leading-7 text-gray-500">
            <span className="font-semibold text-gray-600">Pan Point:</span> The
            year-end rush is no joke. With deadlines looming, tax adjustments to
            finalize, and compliance requirements to meet, accountants are often
            left juggling too many tasks at once. Any small error can lead to
            reporting issues, regulatory penalties, or frustrated clients.
          </p>

          <p className="my-5 text-justify leading-7 text-gray-500">
            The solution? Outsource your year-end accounting to Wisely Yours. We
            take care of the meticulous financial reviews, reconciliations, and
            reporting—so you don’t have to.
          </p>
          <p className="my-6 rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            Streamline account reconciliation with our{" "}
            <Link to={"/services/accounting"} className="font-bold">
              Bank Reconciliation Services
            </Link>
            , offering detailed support for accurate financial data year-round.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#2a4768]">
            Why Choose Wisely Yours for Year-End Accounting?
          </h3>
          <p className="my-5 text-justify leading-7 text-gray-500">
            We understand that year-end accounting isn’t just about crunching
            numbers—it’s about accuracy, compliance, and peace of mind. Here’s
            how we help:
          </p>

          <ul className="ml-10 list-disc text-gray-500">
            <li>
              <span className="font-bold">Precise Financial Reports:</span> We
              ensure every number adds up, reducing discrepancies and potential
              red flags.
            </li>
            <li>
              <span className="font-bold">Regulatory Compliance:</span> Our team
              stays up-to-date with India accounting standards and HMRC
              guidelines, ensuring all reports are audit-ready.
            </li>
            <li>
              <span className="font-bold">Time-Saving Efficiency:</span> No more
              last-minute scrambling—we streamline the process so you can meet
              deadlines with ease.
            </li>
            <li>
              <span className="font-bold">Expert Reconciliations:</span> We
              reconcile accounts thoroughly to ensure your clients’ financial
              records are accurate and up to date.
            </li>
          </ul>

          <p className="my-5 text-justify leading-7 text-gray-500">
            With Wisely Yours, you can focus on advising your clients and
            growing your firm while we handle the time-consuming year-end
            accounting process.
          </p>

          <p className="my-6 rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            Explore our{" "}
            <Link to={"/services/bookkeeping"} className="font-bold">
              Bookkeeping Services
            </Link>{" "}
            to ensure your firm’s financial records are maintained year-round
            with accuracy and efficiency.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#2a4768]">
            Our Year-End Accounting Services for India CA & Accounting Firms
          </h3>

          <h2 className="my-3.5 text-2xl font-bold">
            Financial Statement Preparation & Review
          </h2>
          <p className="leading-6.5 text-gray-500">
            We prepare comprehensive year-end financial statements, ensuring
            they meet India GAAP and other regulatory requirements. From balance
            sheets to profit & loss reports, we’ve got it covered.
          </p>

          <h2 className="my-3.5 text-2xl font-bold">
            Bank & Ledger Reconciliation
          </h2>
          <p className="leading-6.5 text-gray-500">
            Say goodbye to mismatched records! Our reconciliation services
            ensure that all bank transactions and ledgers align, eliminating
            inconsistencies.
          </p>

          <h2 className="my-3.5 text-2xl font-bold">
            Tax Adjustments & Compliance Checks
          </h2>
          <p className="leading-6.5 text-gray-500">
            We handle tax provisions, deferred tax calculations, and ensure all
            necessary adjustments are made in compliance with HMRC regulations.
          </p>

          <h2 className="my-3.5 text-2xl font-bold">
            Accounts Finalization & Reporting
          </h2>
          <p className="leading-6.5 text-gray-500">
            We ensure that accounts are finalized accurately, making your firm’s
            year-end reporting process seamless.
          </p>

          <p className="mt-6 rounded-2xl bg-[#325271] px-8 py-9 text-xl text-white">
            Looking to improve tax compliance? Discover our{" "}
            <Link to={"/services/taxreturn"} className="font-bold">
              Tax Preparation Service
            </Link>{" "}
            to ensure smooth, accurate tax filings for your clients.
          </p>
        </div>

        <div>
          <h2 className="my-5 text-4xl font-bold text-[#2a4768]">
            Wisely Yours’s Year-End Accounting: A Game Changer for Your Firm
          </h2>

          <p className="my-5 text-justify leading-7 text-gray-500">
            <span className="font-semibold text-gray-600">Pan Point:</span> The
            Many firms struggle with last-minute reconciliations, reporting
            errors, and compliance risks, leading to unnecessary stress.
          </p>

          <ul className="text-gray-500">
            <p className="font-bold">With Wisely Yours, you gain:</p>
            <li>✔ A dedicated team of accounting experts</li>
            <li>✔ Reduced workload and increased efficiency</li>
            <li>✔ Accurate, audit-ready reports</li>
            <li>✔ Confidence in meeting regulatory deadlines</li>
          </ul>
        </div>

        <div>
          <h2 className="my-5 text-4xl font-bold text-[#2a4768]">
            Partner with Wisely Yours for a Smooth Year-End Process
          </h2>

          <p className="my-5 text-justify leading-7 text-gray-500">
            Year-end accounting doesn’t have to be a headache. Let Wisely Yours
            handle the nitty-gritty details while you focus on serving your
            clients and scaling your firm.
          </p>

          <p className="mt-6 mb-16 font-bold text-gray-500">
            📞 Ready to streamline your year-end accounting? Get in touch today
            and let’s make this season stress-free! 🚀
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

export default YearEndAccounting;
