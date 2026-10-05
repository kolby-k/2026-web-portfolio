import type { ReactNode } from "react";
import styles from "../styles/buttons.module.css";

type ButtonProps = {
  handleClick?: () => void;
  title?: string;
  variant?: "Default" | "Ghost" | "Link" | "Icon" | "Brand";
  size?: "xs" | "sm" | "base" | "md" | "lg";
  baseStyle?: boolean;
  iconSide?: "left" | "right";
  children?: ReactNode;
  style?: string;
};

function Button({
  handleClick,
  title,
  variant = "Default",
  size = "base",
  baseStyle = true,
  iconSide,
  children,
  style,
}: ButtonProps) {
  const buttonStyle = "buttonVariant" + variant;
  const buttonSize = "button_" + size;
  return (
    <button
      className={`${styles[buttonStyle]} ${baseStyle && styles.buttonBase} ${styles[buttonSize]} ${style}`}
      onClick={handleClick}
    >
      {iconSide === "left" && children}
      {title}
      {iconSide === "right" || (children != null && !iconSide && children)}
    </button>
  );
}

export default Button;
