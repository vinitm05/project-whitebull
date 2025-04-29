import React, { ReactNode } from "react";

interface ProcessCardProps {
  number: string;
  title: string;
  content: string;
  icon: ReactNode;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  number,
  title,
  content,
  icon,
}) => {
  return (
    <div className="hover-lift group flex h-full flex-col overflow-hidden rounded-lg">
      <div className="flex-grow p-6">
        <div className="mb-4 flex items-center">
          <div className="mr-3 rounded-full bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-100">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
          {number}. {title}
        </h3>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
