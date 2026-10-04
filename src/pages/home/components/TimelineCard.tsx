import CustomLink from "../../../components/CustomLink";
import Tag from "../../../components/Tag";
import type {
  ActivityDeployed,
  ActivityWork,
  TimelineItem,
} from "../../../config/types";
import { getDeployedProjects, getWorkProjects } from "../../../lib/timeline";
import { getTypeLabel } from "../../../lib/timeline";
import styles from "../home.module.css";
import { RxArrowRight } from "react-icons/rx";

type TimelineCardProps = {
  item: TimelineItem;
};

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
    <div className={`${styles.timelineItem}`}>
      <div className={`${styles.timelineDot}`}></div>
      <div className={`${styles.timelineCard} card-ui`}>
        {showTag && (
          <span className={styles.timelineCardTag}>
            <Tag title="Current Role" variant="secondary" size="xs" />
          </span>
        )}{" "}
        <p
          className={`muted-text font-xs upper-text ${showTag ? styles.timelineTypeLabels : ""}`}
        >
          {getTypeLabel(item)}
        </p>
        <p className={`sub-heading`}>{item.title}</p>
        <div className={styles.timelineCardDateContainer}>
          <span>
            <p className="muted-text font-xs">Start</p>
            <p className="main-text">{timelineStartDate}</p>
          </span>
          <RxArrowRight />
          <span>
            <p className="muted-text font-xs">End</p>
            <p className="main-text">{timelineEndDate}</p>
          </span>
        </div>
        <p className={"secondary-text"}>{item.description}</p>
        {!!projects && !!projects.length ? (
          <div className={styles.timelineProjectFeatures}>
            <p className="muted-text font-sm">
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
                >
                  {isLast ? "" : ","}
                </CustomLink>
              );
            })}
          </div>
        ) : (
          <br />
        )}
      </div>
    </div>
  );
}

export default TimelineCard;
