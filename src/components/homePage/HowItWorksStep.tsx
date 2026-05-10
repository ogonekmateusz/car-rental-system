import type React from "react";

interface HowItWorksStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HowItWorksStep({
  id,
  icon,
  title,
  description,
}: HowItWorksStep) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-medium md:font-semibold">
        {id}
        {". "}
        {title}
      </h3>
      <p className="text-gray-600 md:text-lg">{description}</p>
    </div>
  );
}
