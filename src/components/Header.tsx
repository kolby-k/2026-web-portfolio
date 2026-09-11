import useTheme from "../providers/theme/useTheme";
import Button from "./Button";

import styles from "../styles/header.module.css";

import { RiSunLine, RiMoonFill, RiMenuFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink";
import Logo from "./Logo";

function Header() {
  const { theme, toggleTheme, isDark } = useTheme();

  const nav = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerDesktop}>
          <Button handleClick={() => nav("/")} variant="Link">
            <Logo />
          </Button>

          <div className={styles.desktopLinkList}>
            <CustomLink
              type="internal"
              to="/#Projects"
              title="Projects"
              size="md"
            />

            <CustomLink
              type="internal"
              to="/#Timeline"
              title="Timeline"
              size="md"
            />

            <CustomLink type="internal" to="/vault" title="More" size="md" />
          </div>

          <Button
            handleClick={toggleTheme}
            title={theme === "dark" ? "Light" : "Dark"}
            variant="TextIcon"
            iconSide="left"
          >
            {isDark ? <RiSunLine /> : <RiMoonFill />}
          </Button>
        </div>

        <div className={styles.headerMobile}>
          <Button handleClick={() => nav("/")} variant="Link">
            <Logo />
          </Button>

          <Button handleClick={() => setExpanded(!expanded)} variant="Icon">
            <RiMenuFill />
          </Button>
        </div>
      </div>

      {expanded && (
        <div className={styles.mobileMenu}>
          <div className="flex-row">
            <h3 className="sub-heading">Theme</h3>

            <Button
              handleClick={toggleTheme}
              title={theme === "dark" ? "Light" : "Dark"}
              variant="TextIcon"
              iconSide="left"
            >
              {isDark ? <RiSunLine /> : <RiMoonFill />}
            </Button>
          </div>

          <div className={styles.mobileLinkList}>
            <CustomLink
              type="internal"
              to="/#Projects"
              title="Projects"
              size="md"
            />

            <CustomLink
              type="internal"
              to="/#Timeline"
              title="Timeline"
              size="md"
            />

            <CustomLink type="internal" to="/vault" title="More" size="md" />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
