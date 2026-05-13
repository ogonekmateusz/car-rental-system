import type { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm md:text-base font-semibold text-gray-700 tracking-wide">
        {title}
      </h4>

      {children}
    </div>
  );
}
