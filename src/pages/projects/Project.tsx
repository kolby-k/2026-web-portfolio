import styles from "./project.module.css";
import { Link, useParams } from "react-router-dom";
import { PROJECTS_DETAILED } from "../../config/constants";
import Tag from "../../components/Tag";
import CustomLink from "../../components/CustomLink";
import { RxArrowLeft } from "react-icons/rx";
import BannerImage from "../../components/BannerImage";

function Project() {
  const { projectSlug } = useParams();

  const project = PROJECTS_DETAILED.find(
    (project) => project.slug === projectSlug,
  );

  if (!project) {
    return (
      <div className={styles.content}>
        <p className="muted-text">Project "{projectSlug}" not found</p>
        <Link to={"/"}>Go Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <span className={styles.homeButton}>
        <CustomLink type="internal" to="/" variant="muted" size="base">
          <RxArrowLeft /> Home
        </CustomLink>
      </span>
      <div className={`${styles.header}`}>
        <span className={`${styles.headerTitleSection}`}>
          <h1 className="page-heading">{project.title}</h1>
          <Tag title={`${project.type} Project`} variant="primary" size="sm" />
        </span>
        <span className={styles.projectHeaderTagContainer}>
          {project.focus.map((f) => (
            <Tag key={`${project.id}-${f}`} title={f} size="xs" />
          ))}
        </span>
        <BannerImage
          src={project.article.bannerImage}
          title="Design Overview"
          description={project.shortDescription}
        />
      </div>
      <hr className="quarter-width" />
      <div className={styles.introAndTechSection}>
        <div className={styles.introSection}>
          <h3 className="main-heading font-xl">Overview</h3>
          <p className="secondary-text">{project.article.fullDescription}</p>
        </div>
        <div className={styles.techSection}>
          <h3 className="main-heading font-xl">Technologies</h3>
          <span className={styles.techTable}>
            <p className="main-text strong-text">Languages</p>
            <p className="secondary-text">
              {project.technology?.languages?.join(", ")}
            </p>

            <p className="main-text strong-text">APIs</p>
            <p className="secondary-text">
              {project.technology?.apis?.join(", ")}
            </p>

            <p className="main-text strong-text">Libraries</p>
            <p className="secondary-text">
              {project.technology?.libraries?.join(", ")}
            </p>

            <p className="main-text strong-text">Integrations</p>
            <p className="secondary-text">
              {project.technology?.integrations?.join(", ")}
            </p>

            <p className="main-text strong-text">Database</p>
            <p className="secondary-text">{project.technology?.database}</p>

            <p className="main-text strong-text">Environment</p>
            <p className="secondary-text">{project.technology?.environment}</p>
          </span>
        </div>
      </div>

      <div>
        {project.article.content.map((section, idx) => {
          const type = section.type;

          if (type === "text") {
            return (
              <div key={`${type}-${idx}`} className={styles.contentBlock}>
                <h3 className={`${styles.textHeading} font-xl`}>
                  {section.heading}
                </h3>
                <div className={styles.paragraph}>
                  {section.paragraphs.map((text, idx) => {
                    return (
                      <p
                        key={`${section.heading}-${idx}`}
                        className={"article-text"}
                      >
                        {text}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          } else if (type === "image") {
            return (
              <div key={`${type}-${idx}`}>
                image here
                {section.imageDescription && <p>{section.imageDescription}</p>}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Project;
