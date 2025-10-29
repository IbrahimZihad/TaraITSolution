import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable button component with variants and sizes.
 * Props:
 * - variant: "primary" | "secondary" | "outline"
 * - size: "sm" | "md" | "lg"
 * - onClick: function
 * - children: button label or icon
 */
const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark focus:ring-primary-dark",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-800",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
