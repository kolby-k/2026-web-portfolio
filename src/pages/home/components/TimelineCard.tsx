import CustomLink from "../../../components/CustomLink";
import Tag from "../../../components/Tag";
import type {
  ActivityDeployed,
  ActivityWork,
  TimelineItem,
  TimelineItemEducation,
  TimelineItemWork,
} from "../../../config/types";
import {
  getDeployedProjects,
  getProviderLabel,
  getWorkProjects,
} from "../../../lib/timeline";
import { getTypeLabel } from "../../../lib/timeline";
import styles from "../home.module.css";
import { RxArrowRight } from "react-icons/rx";

type TimelineCardProps = {
  item: TimelineItem;
};

// TODO REMINDER:
// - move evolve into timeline as project instead of
// showing it in the hobby projects; treat more as a career item.
function TimelineCard({ item }: TimelineCardProps) {
  let projects: ActivityWork[] | ActivityDeployed[] | undefined;
  if (item.type === "work") {
    projects = getWorkProjects(item.id);
  } else if (item.type === "project") {
    projects = getDeployedProjects(item.id);
  }

  const timelineStartDate = new Date(item.startDate).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
  });

  const timelineEndDate = item.endDate
    ? new Date(item.endDate).toLocaleDateString("en", {
        year: "numeric",
        month: "short",
      })
    : "Present";

  const showTag = timelineEndDate === "Present";

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineDot}></div>
      <div className={styles.timelineCard}>
        {showTag && (
          <span className={styles.timelineCardTag}>
            <Tag title="Current Role" variant="secondary" size="sm" />
          </span>
        )}

        <p className={styles.timelineTypeLabel}>{getTypeLabel(item)}</p>
        <p className={styles.timelineCardTitle}>{item.title}</p>

        <div className={styles.timelineCardDateContainer}>
          <span className={styles.timelineCardDateCol}>
            <p>Start</p>
            <p>{timelineStartDate}</p>
          </span>
          <RxArrowRight />
          <span className={styles.timelineCardDateCol}>
            <p>End</p>
            <p>{timelineEndDate}</p>
          </span>
        </div>
        <p className={styles.timelineCardDescription}>{item.description}</p>
        {!!projects && !!projects.length ? (
          <div className={styles.timelineProjectFeatures}>
            <p className="info-label">
              {item.type === "work" ? "Related work" : "View project"}
            </p>
            {projects.map((project, idx) => {
              const isLast = idx === projects.length - 1;
              return (
                <CustomLink
                  key={`project-${project.id}`}
                  title={project.title}
                  type="internal"
                  to={`/projects/${project.slug}`}
                  variant="link"
                  showIcon
                >
                  {isLast ? "" : ","}
                </CustomLink>
              );
            })}
          </div>
        ) : (
          <p className={styles.timelineProviderText}>
            {getProviderLabel(item as TimelineItemWork | TimelineItemEducation)}
          </p>
        )}
      </div>
    </div>
  );
}

export default TimelineCard;
