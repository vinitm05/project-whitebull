import React from "react";
import { FiMapPin } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import LandingImage from "../components/LandingImage";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkzyrng");
  if (state.succeeded) {
    return (
      <p>Thanks for contacting! We will get back to you as soon as possible.</p>
    );
  }

  return (
    <>
      {/* image */}
      <LandingImage
        title="Get in Touch with Wisely Yours - Let's Talk Business!"
        link="Contact Us"
      />
      <div className="flex flex-col gap-6 bg-[#eceef6] pt-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
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
                <a className="underline" href="mailto:partners@wiselyyours.com">
                  Shoot Us An Email
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
          <div className="my-8 flex flex-col gap-6 px-6">
            <p className="text-3xl font-bold md:text-5xl">
              Ready to get Started?{" "}
              <span className="text-[#2a4768]">let's chat.</span>
            </p>
            <div className="flex flex-col gap-6 rounded-xl border bg-white p-6">
              <form
                onSubmit={handleSubmit}
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
                    required
                  />
                  <ValidationError
                    prefix="FirstName"
                    field="firstname"
                    errors={state.errors}
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                  />
                  <ValidationError
                    prefix="LastName"
                    field="lastname"
                    errors={state.errors}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className="h-12 w-full rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                    required
                  />
                  <ValidationError
                    prefix="PhoneNumber"
                    field="phone"
                    errors={state.errors}
                  />
                </div>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a Message"
                  className="h-24 w-full resize-none rounded-md border-0 bg-[#eceef6] px-4 py-2 focus:outline-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="h-12 rounded-md bg-gradient-to-r from-[#2b4969] to-[#7cb5be] px-4 py-2 font-semibold text-white hover:cursor-pointer disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="mt-16 flex flex-col place-items-center gap-6 bg-white px-6 py-4">
          <div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
                How can I get in touch with Wisely Yours?
              </p>
              <p className="mt-4 mb-6 text-gray-500">
                You can contact us via our website's contact form, email us at
                partners@wiselyyours.com.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
                Where is Wisely Yours India located?
              </p>
              <p className="mt-4 mb-6 text-gray-500">
                We provide outsourced accounting services to start-ups, CA's and
                accounting firms across the India, with our operations center
                based in Ahmedabad, India.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
                How long does it take to receive a response?
              </p>
              <p className="mt-4 mb-6 text-gray-500">
                We typically respond within 24 business hours. For urgent
                queries, you can reach out via phone or live chat during working
                hours.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
                Who can I contact for sales inquiries?
              </p>
              <p className="mt-4 mb-6 text-gray-500">
                For business inquiries, you can reach our sales team at
                sales@white-bull.India or fill out the contact form, and a
                representative will get back to you.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="rounded-md bg-[#f5f5f5] px-5 py-4 font-bold">
                Can I book a consultation before partnering with Wisely Yours?
              </p>
              <p className="mt-4 mb-8 text-gray-500">
                Yes! We offer a free trial so you can experience our services
                firsthand. Visit our Book a Free Trial page to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
