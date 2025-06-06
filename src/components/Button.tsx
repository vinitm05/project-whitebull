import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void; // Add onClick prop
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick} // Pass onClick to button
      className="rounded-lg bg-gradient-to-r from-[#2e4c6c] to-[#7cb6bf] px-5 py-4 text-lg font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:from-[#7cb6bf] hover:to-[#2e4c6c] hover:shadow-2xl focus:outline-none"
    >
      {text}
    </button>
  );
};

export default Button;