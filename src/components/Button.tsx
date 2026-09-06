import type { ReactNode } from "react";
import styles from "../styles/buttons.module.css";

type ButtonProps = {
  handleClick?: () => void;
  title?: string;
  variant?: "Default" | "Ghost" | "Link" | "TextIcon" | "Icon";
  baseStyle?: boolean;
  iconSide?: "left" | "right";
  children?: ReactNode;
};

function Button({
  handleClick,
  title,
  variant = "Default",
  baseStyle = true,
  iconSide,
  children,
}: ButtonProps) {
  const buttonStyle = "buttonVariant" + variant;

  return (
    <button
      className={`${styles[buttonStyle]} ${baseStyle && styles.buttonBase}`}
      onClick={handleClick}
    >
      {iconSide === "left" && children}
      {title}
      {iconSide === "right" || (children != null && !iconSide && children)}
    </button>
  );
}

export default Button;
