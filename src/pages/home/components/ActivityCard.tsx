import type { ActivityItemSimple } from "../../../config/types";
import { proper } from "../../../utils";
import styles from "../home.module.css";
import CustomLink from "../../../components/CustomLink";
import { RxArrowTopRight } from "react-icons/rx";
type ActivityCardProps = {
  activity: ActivityItemSimple;
};

function ActivityCard({ activity }: ActivityCardProps) {
  const { title, shortDescription, focus, slug } = activity;

  const mainFocus = focus[0];

  return (
    <div className={`card-ui`}>
      <CustomLink type="internal" to={`/projects/${slug}`} variant="wrapper">
        <div className={styles.cardContent}>
          <p className={`muted-text upper-text font-xs`}>{proper(mainFocus)}</p>

          <p className={`section-title ${styles.cardTitle}`}>
            {title} <RxArrowTopRight className={styles.cardIcon} />
          </p>

          <p className={`secondary-text`}>{shortDescription}</p>
        </div>
      </CustomLink>
    </div>
  );
}

export default ActivityCard;
