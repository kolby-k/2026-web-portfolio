import useTheme from "../providers/theme/useTheme";
import Button from "./Button";

import styles from "../styles/header.module.css";

import { RiSunLine, RiMoonFill, RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const { theme, toggleTheme, isDark } = useTheme();

  const nav = useNavigate();

  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const navigateTo = (path: string) => {
    setExpanded(false);
    nav(path);
  };

  const handleThemeChange = () => {
    setExpanded(false);
    toggleTheme();
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerDesktop}>
        <Button handleClick={() => navigateTo("/")} variant="Link">
          Logo Placeholder
        </Button>
        <div className={styles.desktopLinkList}>
          <Button handleClick={() => navigateTo("/#Projects")} variant="Link">
            Projects
          </Button>
          <Button handleClick={() => navigateTo("/#Timeline")} variant="Link">
            Timeline
          </Button>
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
        <Button handleClick={() => navigateTo("/")} variant="Link">
          Logo Placeholder
        </Button>

        <Button handleClick={toggleMenu} variant="Icon">
          <RiMenuFill />
        </Button>
        {expanded && (
          <div className={styles.mobileMenu}>
            <div className="flex-row">
              <h3 className="sub-heading">Theme</h3>
              <Button
                handleClick={handleThemeChange}
                title={theme === "dark" ? "Light" : "Dark"}
                variant="TextIcon"
                iconSide="left"
              >
                {isDark ? <RiSunLine /> : <RiMoonFill />}
              </Button>
            </div>
            <div className={styles.mobileLinkList}>
              <Button
                handleClick={() => navigateTo("/#Projects")}
                variant="Link"
              >
                Projects
              </Button>
              <Button
                handleClick={() => navigateTo("/#Timeline")}
                variant="Link"
              >
                Timeline
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
