import { PROJECTS_SIMPLE } from "../config/constants";
import type { ActivityItemSimple, ActivityType } from "../config/types";

export function getProjectRowType(project: ActivityItemSimple): string {
  if (project.type === "work") {
    return "Case Study";
  } else if (project.type === "deployed") {
    return "Deployed App";
  } else if (project.type === "hobby") {
    return "Hobby Project";
  }

  return " - ";
}

export function getProjectListByType(type: ActivityType): ActivityItemSimple[] {
  return [...PROJECTS_SIMPLE].filter((project) => project.type === type);
}
