import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#4f6ef7] to-[#6b7ff7] text-white shadow-sm hover:from-[#4563e8] hover:to-[#5f72ee]",
  secondary: "bg-[#e8edf5] text-[#475569] hover:bg-[#dde4ef]",
  ghost: "bg-transparent text-[#64748b] hover:bg-[#f1f5f9]",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
