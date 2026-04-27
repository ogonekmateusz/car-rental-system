interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div className={`container mx-auto px-4 lg:px-8 ${className || ""}`}>
      {children}
    </div>
  );
}
