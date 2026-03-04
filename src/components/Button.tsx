import React from "react";
import type { ButtonVariant, ButtonSize } from "../types";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-200",
  secondary: "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50",
  outline: "bg-transparent text-red-600 border border-red-600 hover:bg-red-50",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center
        font-semibold rounded-2xl
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
