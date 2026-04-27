interface RowBetweenProps {
  children: React.ReactNode;
  className?: string;
}

export default function RowBetween({ children, className }: RowBetweenProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}
