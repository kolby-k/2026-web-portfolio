import { TIMELINE_ITEMS } from "../config/constants";
import type { ActivityItemSimple, TimelineItemWork } from "../config/types";

export function getRelatedRole(
  project: ActivityItemSimple,
): TimelineItemWork | null {
  if (project.type !== "work") return null;
  const timelineItem = TIMELINE_ITEMS.find(
    (item) => item.id === project.roleId,
  );
  if (timelineItem && timelineItem.type === "work") {
    return timelineItem;
  }
  return null;
}
