import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  isActive?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  isActive = false,
}) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <blockquote className="mb-6 text-gray-600 md:text-xl">
        "{quote}"
      </blockquote>

      <div>
        <h5 className="text-[#2a4768] font-semibold">{name}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
