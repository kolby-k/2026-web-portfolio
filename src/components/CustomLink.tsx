import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/customlink.module.css";

type BaseLinkProps = {
  title: string;
  size?: "sm" | "base" | "md" | "lg";
  variant?: "default" | "link";
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
    const { href, title, size = "base", variant = "default" } = props;
    return (
      <a
        className={`${styles.customLinkBase} 
            ${styles[`fontSize_${size}`]}
            ${styles[`customLink_${variant}`]}`}
        href={href}
        title={title}
      >
        {title}
      </a>
    );
  } else if (props.type === "internal") {
    const { to, title, size = "base", variant = "default" } = props;

    return (
      <NavLink
        className={({ isActive }) => {
          const seg = location.pathname + location.hash;
          const active = isActive && seg === to;
          return `${styles.customLinkBase} 
            ${styles[`fontSize_${size}`]}
            ${styles[`customLink_${variant}`]}
            ${active ? styles.customLink_active : ""}`;
        }}
        to={to}
        title={title}
        end
      >
        {title}
      </NavLink>
    );
  }

  return null;
}

export default CustomLink;
