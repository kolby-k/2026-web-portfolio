import { TIMELINE_ITEMS } from "../../../config/constants";
import type { TimelineItem } from "../../../config/types";
import styles from "../home.module.css";
import TimelineCard from "./TimelineCard";

function Timeline() {
  const timelineList = groupByYear(TIMELINE_ITEMS, false);

  return (
    <div id="Timeline" className={styles.timelineOutterWrapper}>
      <div className={styles.textContainer}>
        <h2 className="main-heading">Experience & Education</h2>
        <p className="info-label">My work history and education.</p>
      </div>
      <div className={styles.timelineContainer}>
        {timelineList.map(({ year, items }) => {
          return (
            <div key={`timeline-${year}`} className={styles.timelineGroup}>
              <h4 className={styles.timelineGroupHeading}>{year}</h4>
              {items &&
                items.map((item) => (
                  <TimelineCard key={`timeline-item-${item.id}`} item={item} />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;

function groupByYear(items: TimelineItem[], cutOffIsStartDate: boolean) {
  const yearMap = new Map<string, TimelineItem[]>();
  items.forEach((item) => {
    // use start date unless null, fallback to endate unless null, fallback to current date
    const date = cutOffIsStartDate
      ? item.startDate
      : (item.endDate ?? new Date());

    const year = new Date(date).getFullYear().toString();

    yearMap.set(year, [...(yearMap.get(year) ?? []), item]);
  });

  return Array.from(yearMap, ([year, items]) => ({
    year,
    items,
  })).sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime());
}
