import CustomLink from "./CustomLink";
import { RiGithubFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="site-footer">
      <CustomLink
        type="external"
        href="https://github.com/kolby-k"
        variant="icon"
        title="Github"
        size="sm"
      >
        <RiGithubFill className="footer-icon" />
      </CustomLink>
    </div>
  );
}

export default Footer;
