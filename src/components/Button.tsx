import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  const baseClasses = "px-8 py-6 font-semibold text-base leading-5 rounded-[100px] shadow-xl";
  const variantClasses = {
    primary: "bg-yellow-900 text-white",
    secondary: "border border-solid border-yellow-950 text-stone-700",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;