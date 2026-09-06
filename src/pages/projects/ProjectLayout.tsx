import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <div className="project-layout">
      <Outlet />
    </div>
  );
}

export default ProjectLayout;
