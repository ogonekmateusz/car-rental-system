import type { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  className?: string;
  cols?: string;
  gap?: string;
};

export default function Grid({
  children,
  className = "",
  cols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  gap = "gap-4",
}: GridProps) {
  return <div className={`grid ${cols} ${gap} ${className}`}>{children}</div>;
}
