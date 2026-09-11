import { PROJECTS_SIMPLE } from "../config/constants";
import { getProjectRowType } from "../lib/projects";
import { getRelatedRole } from "../lib/timeline";
import styles from "../styles/project-table.module.css";
import { proper } from "../utils";
import CustomLink from "./CustomLink";

function ProjectTable() {
  const sortByYear = [...PROJECTS_SIMPLE].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  );

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Project</th>
            <th>Type</th>
            <th>Created at</th>
            <th>Technical skills</th>
          </tr>
        </thead>
        <tbody>
          {sortByYear.map((project) => {
            let relatedInfo = "";
            if (project.type === "work") {
              const roleInfo = getRelatedRole(project);
              relatedInfo = roleInfo ? roleInfo.company : "";
            }

            return (
              <tr key={`${project.id}`}>
                <td>{project.year}</td>
                <td>
                  <CustomLink
                    type="internal"
                    to={`/projects/${project.slug}`}
                    title={project.title}
                    variant="link"
                  />
                </td>
                <td>{getProjectRowType(project)}</td>
                <td>{relatedInfo}</td>
                <td className={styles.tableRowFocusCell}>
                  {proper(project.focus.join(", "))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
