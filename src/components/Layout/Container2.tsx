import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container2: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto grid max-w-7xl auto-cols-auto gap-8 grid-flow-col px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container2;
