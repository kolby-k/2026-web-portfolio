import type { ReactNode } from "react";
import styles from "../styles/buttons.module.css";

type ButtonProps = {
  handleClick?: () => void;
  title?: string;
  variant?: "Default" | "Ghost" | "Link" | "Icon" | "Brand";
  size?: "sm" | "base" | "md" | "lg";
  baseStyle?: boolean;
  iconSide?: "left" | "right";
  children?: ReactNode;
};

function Button({
  handleClick,
  title,
  variant = "Default",
  size = "base",
  baseStyle = true,
  iconSide,
  children,
}: ButtonProps) {
  const buttonStyle = "buttonVariant" + variant;
  const buttonSize = "button_" + size;
  return (
    <button
      className={`${styles[buttonStyle]} ${baseStyle && styles.buttonBase} ${styles[buttonSize]}`}
      onClick={handleClick}
    >
      {iconSide === "left" && children}
      {title}
      {iconSide === "right" || (children != null && !iconSide && children)}
    </button>
  );
}

export default Button;
