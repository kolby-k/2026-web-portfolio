import { Link } from "react-router-dom";
import { PROJECTS_SIMPLE } from "../config/constants";
import styles from "../styles/project-table.module.css";

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
                  <Link
                    to={`/projects/${project.slug}`}
                    className={styles.tableRow}
                  >
                    {project.title}
                  </Link>
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
