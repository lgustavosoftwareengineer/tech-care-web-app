import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "text" | "default";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};
export function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-primary rounded-[41px] hover:bg-opacity-30",
    text: "hover:bg-gray-light",
  };

  return (
    <button
      {...props}
      className={twMerge(
        "gap-[9px] text-black px-4 py-[11px] w-full ml-auto mr-auto font-bold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
