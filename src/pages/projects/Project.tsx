import styles from "./project.module.css";
import { Link, useParams } from "react-router-dom";
import { PROJECTS_DETAILED } from "../../config/constants";
import ArticleBannerImage from "./components/ArticleBannerImage";

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
      <div className={styles.header}>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
        <ArticleBannerImage projectId={project.id} />
        <p>{project.focus.join(", ")}</p>

        <p>{project.type}</p>
      </div>

      <div>
        intro to project section (description on left | tech on right)
        <div>{project.article.fullDescription}</div>
        <div>Tech section</div>
      </div>

      <div>
        {project.article.content.map((section, idx) => {
          const type = section.type;

          if (type === "text") {
            return (
              <div key={`${type}-${idx}`}>
                <h2>{section.heading} </h2>
                {section.paragraphs.map((text, idx) => {
                  return <p key={`${section.heading}-${idx}`}>{text}</p>;
                })}
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
