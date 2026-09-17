import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import type { ActivityItemSimple } from "../../../config/types";
import { proper } from "../../../utils";
import styles from "../home.module.css";

type ActivityCardProps = {
  activity: ActivityItemSimple;
};

function ActivityCard({ activity }: ActivityCardProps) {
  const { title, shortDescription, focus, slug } = activity;

  const mainFocus = focus[0];

  const nav = useNavigate();

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <p className={styles.cardEyebrow}>{proper(mainFocus)}</p>

        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{shortDescription}</p>
        <Button
          variant="Ghost"
          size="sm"
          title={"View Project"}
          handleClick={() => nav(`/projects/${slug}`)}
        />
      </div>
    </div>
  );
}

export default ActivityCard;
