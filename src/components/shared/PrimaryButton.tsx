interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-black font-light px-4 py-2 lg:px-6 lg:py-3 text-sm cursor-pointer hover:border-black hover:font-normal hover:bg-white hover:text-black border-2 border-transparent transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
