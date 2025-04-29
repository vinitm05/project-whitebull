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
  position,
  isActive = false,
}) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <blockquote className="mb-6 text-lg text-gray-700 md:text-xl">
        "{quote}"
      </blockquote>

      <div>
        <h4 className="text-navy-800 text-lg font-semibold">{name}</h4>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
