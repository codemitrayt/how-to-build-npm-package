import React, { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
}>;

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "small",
}: ButtonProps) => {
  const variantStyles: Record<ButtonProps["variant"], CSSProperties> = {
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "gray",
    },
  };

  const sizeStyles: Record<ButtonProps["size"], CSSProperties> = {
    small: {
      padding: "0.5rem",
    },
    medium: {
      padding: "0.75rem",
    },
    large: {
      padding: "1rem",
    },
  };

  return (
    <button
      style={{
        outline: "none",
        border: "none",
        cursor: "pointer",
        borderRadius: 10,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
