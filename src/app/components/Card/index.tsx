import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = PropsWithChildren<{
  className?: string;
}>;
export function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge("bg-white shadow-sm", className)}>{children}</div>
  );
}
