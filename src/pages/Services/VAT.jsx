import React, { useState } from "react";
import LandingImage from "../../components/LandingImage";
import { Link } from "react-router";
import { TbPhoneCalling } from "react-icons/tb";
import OutsourceYearEnd from "../../assets/outsourced-yearend.webp";
import ServiceList from "../../components/ServiceList";

const VAT = () => {
  const faqs = [
    {
      question: "Why should I outsource VAT return filing?",
      answer:
        "Outsourcing VAT return filing saves your firm time, ensures compliance, reduces the risk of errors, and gives you access to VAT experts without maintaining an in-house team.",
    },
    {
      question: "What VAT services does White Bull provide?",
      answer:
        "White Bull offers comprehensive VAT services, including VAT return preparation, filing, registration, and support with audits, ensuring full compliance with HMRC guidelines.",
    },
    {
      question: "How does White Bull ensure accurate VAT return filings?",
      answer:
        "We use advanced VAT software, regularly updated by our team of VAT specialists, to ensure that your clients’ VAT returns are calculated correctly and filed on time.",
    },
    {
      question: "Can White Bull help with VAT registration?",
      answer:
        "Yes, White Bull provides VAT registration services for businesses in the UK, ensuring that they are compliant with the latest VAT regulations.",
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
        link="Services / VAT Return Filing Services"
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
          <h2 className="text-left text-4xl font-bold">
            Expert
            <span className="text-[#2a4768]"> VAT Return Filing Services </span>
            for Your Clients
          </h2>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Navigating VAT regulations is like solving a never-ending puzzle—one
            wrong move, and it could cost your clients dearly. At
            <span className="font-bold"> White Bull, </span>we specialize in
            <span className="font-bold">
              {" "}
              outsourced VAT return filing services for CA and accounting firms
              in the UK,{" "}
            </span>
            ensuring that your clients’ VAT obligations are met accurately and
            on time—without the headache.
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Why wrestle with ever-changing
            <span className="font-bold"> HMRC regulations </span>when you can
            have<span className="font-bold"> VAT experts </span>handle it for
            you? By outsourcing
            <span className="font-bold"> VAT return filing </span>to White Bull,
            your firm can focus on
            <span className="font-bold"> scaling your business </span>while we
            take care of
            <span className="font-bold">
              {" "}
              compliance, deadlines, and all the nitty-gritty details.
            </span>
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">Pain Point: </span>VAT filing errors or
            delays can lead to hefty fines. White Bull ensures
            <span className="font-bold"> timely, error-free submissions </span>
            so your clients stay
            <span className="font-bold">
              {" "}
              compliant, stress-free, and penalty-free.
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            Why
            <span className="text-[#2a4768]">
              {" "}
              Outsource VAT Return Filing{" "}
            </span>
            to White Bull?
          </h2>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            VAT compliance is
            <span className="font-bold">
              {" "}
              complex, time-consuming, and downright tedious.{" "}
            </span>
            Outsourcing VAT return filing to White Bull gives your firm a
            <span className="font-bold"> reliable partner </span>who takes care
            of it all, leaving you free to focus on
            <span className="font-bold"> high-value client work.</span>
          </p>

          <h3 className="text-left text-3xl font-bold">
            The Hidden Costs of In-House VAT Filing
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Managing VAT returns in-house may seem like a good idea, but it
            comes with hidden costs—
            <span className="font-bold">
              {" "}
              time, manpower, and the risk of errors.
            </span>
          </p>

          <ul className="mt-4 mb-5 text-justify text-gray-500">
            <li>
              <span className="font-bold">
                ❌ Missed deadlines can result in penalties.
              </span>
            </li>
            <li>
              <span className="font-bold">
                ❌ Compliance mistakes can trigger HMRC audits.
              </span>
            </li>
            <li>
              <span className="font-bold">
                ❌ In-house VAT teams require continuous training and resources.
              </span>
              we scale with you.
            </li>
          </ul>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            By outsourcing VAT return filing to
            <span className="font-bold"> White Bull, </span>you eliminate these
            risks while
            <span className="font-bold">saving time and cutting costs.</span>
          </p>

          <h3 className="text-left text-3xl font-bold">
            Benefits of Outsourcing VAT Filing
          </h3>

          <ul className="mt-4 mb-5 text-justify text-gray-500">
            <li>
              <span className="font-bold">✅ Accurate VAT Returns – </span>No
              more second-guessing! We ensure error-free VAT calculations and
              eliminate compliance risks.
            </li>
            <li>
              <span className="font-bold">✅ Timely Submissions –</span>Never
              miss a deadline! Our team ensures your clients’ VAT returns are
              submitted on time, every time.
            </li>
            <li>
              <span className="font-bold">✅ 100% HMRC Compliance – </span>Tax
              laws change faster than fashion trends! We stay updated so you
              don’t have to.
            </li>
            <li>
              <span className="font-bold">✅ Cost-Effective Solution – </span>No
              need for an in-house VAT team—cut costs while maintaining top-tier
              service.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            What<span className="text-[#2a4768]"> We Offer</span>
          </h2>

          <h3 className="text-left text-3xl font-bold">
            Comprehensive VAT Return Services
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            We provide
            <span className="font-bold">
              {" "}
              end-to-end VAT return filing services,{" "}
            </span>
            tailored to
            <span className="font-bold">
              {" "}
              meet the needs of CA and accounting firms in the UK.{" "}
            </span>
          </p>

          <ul className="mt-4 mb-5 text-justify text-gray-500">
            <li>
              <span className="font-bold">📌 Preparation and filing </span>of
              quarterly or annual VAT returns
            </li>
            <li>
              <span className="font-bold">
                📌 VAT registration and deregistration{" "}
              </span>
              assistance
            </li>
            <li>
              <span className="font-bold">
                📌 Support with VAT audits and corrections
              </span>
            </li>
            <li>
              <span className="font-bold">📌 Real-time tracking </span>of VAT
              filings for<span className="font-bold"> accurate reporting</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            Reliable
            <span className="text-[#2a4768]">
              {" "}
              VAT Return Filing Solutions{" "}
            </span>
            for CA and Accounting Firms
          </h2>
          <h3 className="text-left text-3xl font-bold">
            Say Goodbye to VAT Compliance Hassles
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Managing VAT returns can feel like
            <span className="font-bold"> herding cats— </span>challenging and
            unpredictable. That’s where White Bull steps in. Our
            <span className="font-bold">
              {" "}
              outsourced VAT return filing services{" "}
            </span>
            help CA and accounting firms eliminate
            <span className="font-bold">
              {" "}
              errors, missed deadlines, and compliance worries.
            </span>
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold">Pain Point: </span>Late filings and
            errors can lead to
            <span className="font-bold"> hefty fines and HMRC headaches. </span>
            White Bull helps firms stay ahead with
            <span className="font-bold">
              {" "}
              timely, precise, and fully compliant VAT return filings.
            </span>
          </p>

          <h3 className="text-left text-3xl font-bold">
            What You Get with White Bull
          </h3>

          <ul className="mt-4 mb-5 text-justify text-gray-500">
            <li>
              <span className="font-bold">✅ Correct VAT calculations </span>for
              every client
            </li>
            <li>
              <span className="font-bold">
                ✅ Transparent and clear VAT reporting
              </span>
            </li>
            <li>
              <span className="font-bold">
                ✅ Timely, compliant submissions
              </span>
            </li>
          </ul>

          <p className="mb-10 rounded-4xl bg-[#2a4768] px-30 py-10 text-justify text-xl text-white">
            Need help with VAT and other indirect taxes? Check out our Indirect
            <span className="font-bold"> Taxation Services </span>for additional
            support.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            Why
            <span className="text-[#2a4768]"> White Bull </span>is the Right
            Choice for Outsourced VAT Return Filing
          </h2>
          <h3 className="text-left text-3xl font-bold">
            Your Trusted VAT Compliance Partner
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Partnering with<span className="font-bold"> White Bull </span>means
            you get a<span className="font-bold"> trusted team </span>that
            understands the complexities of
            <span className="font-bold"> UK VAT laws </span>and provides
            <span className="font-bold"> tailored solutions </span>for your
            clients—whether they’re startups or large enterprises.
          </p>

          <h3 className="text-left text-3xl font-bold">
            Why Accounting Firms Trust White Bull
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Partnering with<span className="font-bold"> White Bull </span>means
            you get a<span className="font-bold"> trusted team </span>that
            understands the complexities of
            <span className="font-bold"> UK VAT laws </span>and provides
            <span className="font-bold"> tailored solutions </span>for your
            clients—whether they’re startups or large enterprises.
          </p>

          <ul className="mt-4 mb-5 text-justify text-gray-500">
            <li>
              <span className="font-bold">🔹 Industry Expertise: </span>We
              specialize in VAT filing across multiple industries, ensuring
              <span className="font-bold"> flawless submissions.</span>
            </li>
            <li>
              <span className="font-bold">
                🔹 Reliable and Accurate Reporting:{" "}
              </span>
              Our team uses
              <span className="font-bold"> advanced VAT software </span>to
              eliminate errors.
            </li>
            <li>
              <span className="font-bold">🔹 Dedicated VAT Experts: </span>We
              keep up with the
              <span className="font-bold"> latest HMRC regulations </span>so
              your clients stay compliant.
            </li>
            <li>
              <span className="font-bold">🔹 Flexible Solutions: </span>Scalable
              VAT return filing services that
              <span className="font-bold">
                {" "}
                grow with your clients’ businesses.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            Simplify
            <span className="text-[#2a4768]"> VAT Compliance </span>with White
            Bull’s VAT Return Filing Services
          </h2>
          <h3 className="text-left text-3xl font-bold">
            The Hassle-Free Approach to VAT Filing
          </h3>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            VAT compliance shouldn’t feel like
            <span className="font-bold"> a constant battle. </span>With
            <span className="font-bold"> White Bull, </span>you get:
          </p>

          <ul className="mt-4 mb-5 text-justify text-gray-500">
            <li>
              <span className="font-bold">✅ Accurate VAT calculations</span>
            </li>
            <li>
              <span className="font-bold">
                ✅ Complete compliance with UK tax laws
              </span>
            </li>
            <li>
              <span className="font-bold">
                ✅ Seamless VAT-related communication with HMRC
              </span>
            </li>
          </ul>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            <span className="font-bold"> Pain Point: </span>Keeping up with VAT
            law changes is exhausting. Our experts
            <span className="font-bold"> stay ahead of the curve, </span>so you
            don’t have to.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            Trusted
            <span className="text-[#2a4768]"> VAT Return Filing Services </span>
            for CA and Accounting Firms in the UK
          </h2>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            White Bull has earned the
            <span className="font-bold">
              {" "}
              trust of CA and accounting firms across the UK{" "}
            </span>
            by delivering
            <span className="font-bold">
              {" "}
              reliable, efficient, and hassle-free VAT return filing
              services.{" "}
            </span>
            Whether your clients are
            <span className="font-bold">
              {" "}
              small businesses or large enterprises,{" "}
            </span>
            we ensure their VAT returns are
            <span className="font-bold">
              {" "}
              accurate, on time, and fully compliant.
            </span>
          </p>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Let White Bull handle VAT compliance, so you can focus on growing
            your firm and serving your clients.
          </p>

          <p className="mb-10 rounded-4xl bg-[#2a4768] px-30 py-10 text-justify text-xl text-white">
            Explore our
            <span className="font-bold"> Tax Preparation Services</span>for
            additional support with other taxation needs, ensuring your clients
            receive full financial support.
          </p>
        </div>

        <div>
          <h2 className="text-left text-4xl font-bold">
            The Smart Choice for
            <span className="text-[#2a4768]">
              {" "}
              Outsourced VAT Return Filing
            </span>
          </h2>

          <p className="mt-4 mb-5 text-justify text-gray-500">
            Outsourcing VAT return filing to White Bull offers your firm an
            <span className="font-bold">
              efficient, accurate, and cost-effective
            </span>
            way to manage VAT compliance.
            <span className="font-bold">
              No more missed deadlines, no more fines—just expert VAT solutions.
            </span>
          </p>

          <p className="mb-10 rounded-4xl bg-[#2a4768] px-30 py-10 text-justify text-xl text-white">
            <span className="font-bold">
              📞 Ready to simplify VAT filing for your clients? Contact White
              Bull today!
            </span>
          </p>
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

export default VAT;
