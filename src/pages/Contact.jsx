import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { PiPhone } from "react-icons/pi";
import { RiMailSendLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import LandingImage from '../components/LandingImage';

const Contact = () => {
  return (
    <>
      {/* image */}
      <LandingImage title="Get in Touch with WHite Bull - Let's Talk Business!" link="Contact Us" />
      <div className="flex flex-col gap-6">
        {/* section 1 */}
        <div className="flex flex-col gap-7 px-6">
          {/* chat */}
          <div>
            <p className="text-lg font-semibold">Chat with Us</p>
            <p className="text-gray-400">
              Speak to our friendly team via live chat
            </p>
            <div className="mt-4 flex items-center gap-2">
              <RiMailSendLine />
              <p className="underline">Shoot Us An Email</p>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <FaLinkedinIn />
              <p className="underline">Message on Linkedin</p>
            </div>
          </div>
          {/* call */}
          <div>
            <p className="text-lg font-semibold">Call Us</p>
            <p className="text-gray-400">
              Call our team Mon-Fri from 8am to 5pm
            </p>
            <div className="mt-4 flex items-center gap-2">
              <PiPhone />
              <a href="tel:+123456789" className="underline">
                +123456789
              </a>
            </div>
          </div>
          {/* visit */}
          <div>
            <p className="text-lg font-semibold">Visit Us</p>
            <p className="text-gray-400">Meet use directly at our office</p>
            <div className="mt-4 flex items-center gap-2">
              <FiMapPin />
              <a
                href="https://maps.google.com/"
                target="_blank"
                className="underline"
              >
                Mumbai - India
              </a>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex flex-col gap-6 px-6 my-8">
          <p className="text-3xl font-semibold">
            Ready to get Started?{" "}
            <span className="text-[#2a4768]">let's chat.</span>
          </p>
          <div className="flex flex-col gap-6 rounded-xl border bg-white p-6">
            <p className="text-gray-400">
              Please fill out the form below, and a member of our team will get
              back to you as soon as possible
            </p>
            <form action="" method="get" className="flex flex-col gap-4">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="h-12 w-full rounded-md border-2 border-gray-300 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="h-12 w-full rounded-md border-2 border-gray-300 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="h-12 w-full rounded-md border-2 border-gray-300 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="h-12 w-full rounded-md border-2 border-gray-300 bg-[#eceef6] px-4 py-2 focus:outline-none"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write a Message"
                className="h-24 w-full resize-none rounded-md border-2 border-gray-300 bg-[#eceef6] px-4 py-2 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="rounded-md bg-linear-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* section 3 */}
        <div className="flex flex-col gap-6 bg-white px-6 py-2">
          <div className="flex flex-col gap-4">
            <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
              How can I get in touch with White Bull?
            </p>
            <p className="text-gray-500">
              You can contact us via our website’s contact form, email us at
              info@white-bull.uk, or call us at +44 (0) 20 458 60266.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
              Where is White Bull UK located?
            </p>
            <p className="text-gray-500">
              We provide outsourced accounting services to CA and accounting
              firms across the UK, with our operations center based in
              Ahmedabad, India.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
              How long does it take to receive a response?
            </p>
            <p className="text-gray-500">
              We typically respond within 24 business hours. For urgent queries,
              you can reach out via phone or live chat during working hours.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
              Who can I contact for sales inquiries?
            </p>
            <p className="text-gray-500">
              For business inquiries, you can reach our sales team at
              sales@white-bull.uk or fill out the contact form, and a
              representative will get back to you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
              Can I book a consultation before partnering with White Bull?
            </p>
            <p className="text-gray-500">
              Yes! We offer a free trial so you can experience our services
              firsthand. Visit our Book a Free Trial page to get started.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact