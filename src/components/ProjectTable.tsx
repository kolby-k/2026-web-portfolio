import { PROJECTS_SIMPLE } from "../config/constants";
import styles from "../styles/project-table.module.css";
import CustomLink from "./CustomLink";

function ProjectTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Year</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS_SIMPLE.map((project) => {
            return (
              <tr key={`${project.id}`}>
                <td>
                  <CustomLink
                    type="internal"
                    to={`/projects/${project.slug}`}
                    title={project.title}
                    variant="link"
                  />
                </td>
                <td>{project.type}</td>
                <td>{project.year}</td>
                <td className={styles.tableRowFocusCell}>
                  {project.focus.join(", ")}
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
