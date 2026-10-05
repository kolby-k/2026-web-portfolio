import { Outlet } from "react-router-dom";
import ProjectFooter from "./components/ProjectFooter";

function ProjectLayout() {
  return (
    <div className="page">
      <Outlet />
      <hr className="quarter-width" />
      <ProjectFooter />
    </div>
  );
}

export default ProjectLayout;
