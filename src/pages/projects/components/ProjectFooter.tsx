import Button from "../../../components/Button";
import CustomLink from "../../../components/CustomLink";
import useProject from "../../../hooks/useProject";
import styles from "../project.module.css";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";

function ProjectFooter() {
  const { previous, next } = useProject();

  return (
    <div className={styles.projectFooter}>
      <div className={styles.projectFooterTitleWrapper}>
        <h4 className="section-title">Keep Exploring</h4>
      </div>
      <div className={styles.projectFooterButtons}>
        {previous && (
          <Button
            title="Previous Project"
            style={styles.footerButton}
            iconSide="left"
          >
            <CustomLink
              type="internal"
              to={`/projects/${previous.slug}`}
              variant="wrapper"
            />
            <RxArrowLeft />
          </Button>
        )}

        {next && (
          <Button title="Next Project" style={styles.footerButton}>
            <CustomLink
              type="internal"
              to={`/projects/${next.slug}`}
              variant="wrapper"
            />
            <RxArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectFooter;
