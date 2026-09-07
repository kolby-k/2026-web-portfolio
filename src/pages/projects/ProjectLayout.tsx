import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
}

export default ProjectLayout;
