import { Link, useParams } from "react-router-dom";
import { PROJECTS_DETAILED } from "../../config/constants";

function Project() {
  const { projectSlug } = useParams();

  const project = PROJECTS_DETAILED.find(
    (project) => project.slug === projectSlug,
  );

  if (!project) {
    return (
      <div className="project-content">
        <p className="info-label">Project "{projectSlug}" not found</p>
        <Link to={"/"}>Go Home</Link>
      </div>
    );
  }

  return (
    <div className="project-content">
      <div>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
        <span>
          {project.focus.map((focus) => {
            return <p>{focus}</p>;
          })}
        </span>
        <p>{project.type}</p>
      </div>

      <div>
        intro to project section (description on left | tech on right)
        <div>{project.fullDescription}</div>
        <div>Tech section</div>
      </div>

      <div>
        {project.content.map((section) => {
          const type = section.type;

          if (type === "text") {
            return (
              <div>
                <h2>{section.heading} </h2>
                {section.paragraphs.map((text) => {
                  return <p>{text}</p>;
                })}
              </div>
            );
          } else if (type === "image") {
            return (
              <div>
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
