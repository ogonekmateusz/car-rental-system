interface LogoProps {
  size?: string;
  className?: string;
}

export default function Logo({ className, size }: LogoProps) {
  return (
    <h2 className={`${size} font-extrabold tracking-tighter ${className}`}>
      DRIVE
    </h2>
  );
}
