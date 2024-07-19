import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};
export function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge("bg-white shadow-sm", className)}>{children}</div>
  );
}
