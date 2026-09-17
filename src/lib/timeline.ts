import { TIMELINE_ITEMS } from "../config/constants";
import type {
  ActivityDeployed,
  ActivityItemSimple,
  ActivityWork,
  TimelineItem,
  TimelineItemEducation,
  TimelineItemWork,
} from "../config/types";
import { getProjectListByType } from "./projects";

export function getRelatedRole(
  project: ActivityItemSimple,
): TimelineItemWork | null {
  if (project.type !== "work") return null;
  const timelineItem = TIMELINE_ITEMS.find(
    (item) => item.id === project.timelineId,
  );
  if (timelineItem && timelineItem.type === "work") {
    return timelineItem;
  }
  return null;
}

export function getWorkProjects(timelineItemId: string): ActivityWork[] {
  return (getProjectListByType("work") as ActivityWork[]).filter(
    (item) => item.timelineId === timelineItemId,
  );
}
export function getDeployedProjects(
  timelineItemId: string,
): ActivityDeployed[] {
  return (getProjectListByType("deployed") as ActivityDeployed[]).filter(
    (item) => item.timelineId == timelineItemId,
  );
}

export function getTypeLabel(item: TimelineItem): string {
  if (item.type === "work") {
    return "Career";
  } else if (item.type === "project") {
    return "Deployed app";
  } else if (item.type === "education") {
    return item.outcome === "Certificate" || item.outcome === "Micro-Credential"
      ? item.outcome
      : "Education";
  }

  return "";
}

export function getProviderLabel(
  item: TimelineItemEducation | TimelineItemWork,
): string {
  if (item.type === "education") {
    return item.institution;
  }

  if (item.type === "work") {
    return item.company;
  }

  return "";
}
