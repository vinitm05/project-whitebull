import React, { useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imageCutout from "../../assets/image-cutout.svg";

const testimonials = [
  {
    id: 1,
    quote:
      "WiselyYours has exceeded our expectations with their professional approach and tailored solutions. Our clients have noticed the difference.",
    name: "Karen T.",
    position: "CMO",
  },
  {
    id: 2,
    quote:
      "Since partnering with WiselyYours, we've been able to take on 30% more clients without increasing our core team. Their accuracy and attention to detail is outstanding.",
    name: "David M.",
    position: "Managing Partner",
  },
  {
    id: 3,
    quote:
      "The team at WiselyYours understands the unique challenges faced by India accounting firms. Their support has been invaluable during our busiest tax seasons.",
    name: "Sarah J.",
    position: "Finance Director",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4 text-center">
          <span className="text-sm font-medium tracking-wider text-teal-600 uppercase">
            Our Success Story
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
            <img
              src={imageCutout}
              alt="Business professionals shaking hands"
              className="h-auto w-4/5 object-cover"
            />
          </div>

          

          <div data-aos="fade-left">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              What Our <span className="text-navy-800">Clients</span> Say About
              Us
            </h2>

            <p className="mb-8 text-gray-600">
              We take pride in the positive experiences and successful outcomes
              we've facilitated for our clients.
            </p>

            <div className="mb-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  isActive={index === activeIndex}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="bg-navy-100 rounded-full bg-[#2a4768] p-3 text-white hover:cursor-pointer hover:bg-black transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-navy-100 rounded-full bg-[#2a4768] p-3 text-white hover:cursor-pointer hover:bg-black transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
