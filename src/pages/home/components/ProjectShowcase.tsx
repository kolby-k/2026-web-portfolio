import styles from "../home.module.css";

import ProjectTable from "../../../components/ProjectTable";

function ProjectShowcase() {
  return (
    <div id="projects" className={styles.projectShowcase}>
      <ProjectTable />
    </div>
  );
}

export default ProjectShowcase;
