import { useParams } from "react-router-dom";
import { PROJECTS_DETAILED } from "../config/constants";

// Return a project matching the current urls /project/slug
// return project with next/prev projects slugs
function useProject() {
  const { projectSlug } = useParams();

  const projectIdx = PROJECTS_DETAILED.findIndex(
    (project) => project.slug === projectSlug,
  );
  const project = PROJECTS_DETAILED[projectIdx];

  return {
    current: project,
    previous: PROJECTS_DETAILED[projectIdx - 1] ?? null,
    next: PROJECTS_DETAILED[projectIdx + 1] ?? null,
  };
}

export default useProject;
