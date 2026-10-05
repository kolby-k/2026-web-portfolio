import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/customlink.module.css";
import { RxExternalLink } from "react-icons/rx";
import type { ReactNode } from "react";

type BaseLinkProps = {
  title?: string;
  showIcon?: boolean;
  size?: "sm" | "base" | "md" | "lg";
  variant?: "default" | "link" | "icon" | "wrapper" | "muted";
  children?: ReactNode;
  style?: string;
};
type InternalLinkProps = BaseLinkProps & {
  type: "internal";
  to: string;
};
type ExternalLinkProps = BaseLinkProps & {
  type: "external";
  href: string;
};

type CustomLinkProps = InternalLinkProps | ExternalLinkProps;

function CustomLink(props: CustomLinkProps) {
  const location = useLocation();

  if (props.type === "external") {
    const {
      href,
      title,
      size = "base",
      variant = "default",
      showIcon = false,
      children,
      style,
    } = props;
    return (
      <a
        className={`${styles.customLinkBase} 
            ${styles[`fontSize_${size}`]}
            ${styles[`customLink_${variant}`]}
            ${style}`}
        href={href}
        title={title}
        target="_blank"
      >
        {title}
        {children}
        {showIcon && <RxExternalLink className={styles.externalIcon} />}
      </a>
    );
  } else if (props.type === "internal") {
    const {
      to,
      title,
      size = "base",
      variant = "default",
      showIcon = false,
      children,
      style,
    } = props;

    return (
      <NavLink
        className={({ isActive }) => {
          const seg = location.pathname + location.hash;
          const active = isActive && seg === to;
          const minimalUI = variant === "wrapper";
          return `${styles.customLinkBase} 
            ${styles[`fontSize_${size}`]}
            ${styles[`customLink_${variant}`]}
            ${active && !minimalUI ? styles.customLink_active : ""}
            ${style}
            `;
        }}
        to={to}
        title={title}
        end
      >
        {title}
        {children}
        {showIcon && <RxExternalLink className={styles.externalIcon} />}
      </NavLink>
    );
  }

  return null;
}

export default CustomLink;
