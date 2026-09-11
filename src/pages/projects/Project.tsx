import styles from "./project.module.css";
import { Link, useParams } from "react-router-dom";
import { PROJECTS_DETAILED } from "../../config/constants";
import Tag from "../../components/Tag";

function Project() {
  const { projectSlug } = useParams();

  const project = PROJECTS_DETAILED.find(
    (project) => project.slug === projectSlug,
  );

  if (!project) {
    return (
      <div className={styles.content}>
        <p className="info-label">Project "{projectSlug}" not found</p>
        <Link to={"/"}>Go Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <div className={`${styles.header}`}>
        <span className={`${styles.headerProjectTypeTag}`}>
          <Tag title={project.type} variant="primary" size="sm" />
        </span>
        <h1>{project.title}</h1>
        <div className={styles.projectHeaderDescription}>
          <p>About</p>
          <p>{project.shortDescription}</p>
          <span>
            {project.focus.map((f) => (
              <Tag key={`${project.id}-${f}`} title={f} size="sm" />
            ))}
          </span>
        </div>
      </div>

      <div className={styles.introAndTechSection}>
        <div className={styles.introSection}>
          <h2>Introduction</h2>
          {project.article.fullDescription}
        </div>
        <div className={styles.techSection}>
          <h2>Technology</h2>
          <p className="main-text">
            Environment: {project.technology?.environment}
          </p>
          <p className="main-text">
            API: {project.technology?.apis?.join(", ")}
          </p>
          <p className="main-text">Database: {project.technology?.database}</p>
          <p className="main-text">
            Languages: {project.technology?.languages?.join(", ")}
          </p>
          <p className="main-text">
            Libraries: {project.technology?.libraries?.join(", ")}
          </p>
          <p className="main-text">
            Tools: {project.technology?.tools?.join(", ")}
          </p>
        </div>
      </div>

      <div>
        {project.article.content.map((section, idx) => {
          const type = section.type;

          if (type === "text") {
            return (
              <div key={`${type}-${idx}`} className={styles.contentBlock}>
                <h2 className={styles.textHeading}>{section.heading} </h2>
                <div className={styles.paragraph}>
                  {section.paragraphs.map((text, idx) => {
                    return (
                      <p
                        key={`${section.heading}-${idx}`}
                        className={"main-text"}
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
