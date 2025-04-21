import React from "react";
import { FiMapPin } from "react-icons/fi";
import { PiPhone } from "react-icons/pi";
import { RiMailSendLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import LandingImage from "../components/LandingImage";

const Home = () => {
  const faqs = [
    {
      question:
        "What is the difference between in-house and outsourced accounting?",
      answer:
        "Yes, at Wisely Yours, we employ an experienced team of certified financial professionals who stay on top of industry regulations to ensure accuracy and compliance.",
    },
    {
      question: "Which software do you use?",
      answer:
        "We work with a wide range of accounting software, including QuickBooks, Sage, Xero, and more. Our team ensures seamless integration with your current tools.",
    },
    {
      question: "Why should we outsource to Wisely Yours?",
      answer:
        "Outsourcing with Wisely Yours means lower overhead, expert knowledge, and the flexibility to scale as your firm grows. We ensure compliance, reduce costs, and help you focus on your core business.",
    },
    {
      question:
        "What is the difference between in-house and outsourced accounting?",
      answer:
        "Yes, at Wisely Yours, we employ an experienced team of certified financial professionals who stay on top of industry regulations to ensure accuracy and compliance.",
    },
  ];

    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
      {/* image */}
      <LandingImage
        title="Get in Touch with Wisely Yours - Let's Talk Business!"
        link="Contact Us"
      />

      
      
      <div className="flex flex-col gap-6 bg-[#eceef6] pt-16">
        {/* FAQs */}
      <div className="bg-[#eceef6] px-5 py-5">
        <div className="grid grid-cols-2">
          <div className="items-left">
            <div>
              <p className="font-semibold text-[#2a4768]">FAQs</p>
              <h2 className="text-left text-3xl font-bold">
                Find answers to your most{" "}
                <span className="text-[#2a4768]">common questions</span>
              </h2>
              <p className="mx-auto mb-7 max-w-2xl text-left text-gray-500">
                {" "}
                We know you may have questions about our services, processes,
                and how we can support your firm. Here are some frequently asked
                questions:
              </p>
            </div>
            <div className="rounded-3xl bg-white px-5 py-10">
              <div className="mb-3 grid grid-cols-2">
                <div className="items-left items-top flex justify-center">
                  <FaQuestion className="rounded-full bg-[#eceef6] px-3 py-3 text-7xl text-[#2a4768]" />
                </div>
                <div className="items-right -ml-5">
                  <h3 className="text-left text-3xl font-bold">
                    Want to Know More?
                  </h3>
                  <p className="py-3 pr-8 text-justify text-gray-500">
                    Need additional inofrmation? Have questions? We're here to
                    help you take your firm to the next level. let us show you
                    how Wisely Yours can transform your accounting processes
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#2a4768] px-45 py-3 text-xl font-bold text-white transition-all hover:bg-[#1a3758]"
                >
                  We're Here To Help!
                </Link>
              </div>
            </div>
          </div>

          <div className="items-right">
            <div className="text-l ml-10 p-4">
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
      </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
          <div className="grid grid-cols-1 px-15 gap-7.5">
            <div>
              <p className="text-lg font-semibold">Reach Out To Us</p>
              <p className="text-3xl font-bold md:text-5xl">
                <span className="text-[#2a4768]">Get in Touch </span>with White Bull!
              </p>
              <p className="text-gray-400 pr-100">
                Reach out to our team and let’s get started. From bookkeeping to
                payroll and tax prep, we’ve got the solutions you need to help
                your firm grow and thrive.
              </p>
            </div>
            {/* call */}
            <div className="flex gap-10 px-6">
            <div className="items-left">img</div>

            <div className="items-right">
              <p className="text-lg font-bold">Contact:</p>
              <div className="flex flex-col">
                <p className="text-gray-400">Email:{" "}
                  <a href="mailto:partners@wiselyyours.com" className="text-decoration-line: none"> partners@wiselyyours.com
                  </a>
                </p>

                <p className="text-gray-400">Phone:{" "}
                  <a href="tel:+02249647976" className="text-decoration-line: none">+123456789
                  </a>
                </p>
              </div>
            </div>
            </div>
          </div>
          
          {/* section 2 */}
          <div className="my-8 flex flex-col gap-6 pr-10 -ml-100">
            <div className="flex flex-col gap-6 rounded-xl border-none bg-white p-6">
              <form
                action=""
                method="get"
                className="mx-auto flex max-w-4xl flex-col gap-4"
              >
                <p className="mb-4 text-gray-400">
                  Please fill out the form below, and a member of our team will
                  get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a Message"
                  className="h-24 w-full resize-none rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="h-12 rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
