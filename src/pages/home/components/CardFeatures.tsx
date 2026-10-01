import type { ActivityItemSimple } from "../../../config/types";
import styles from "../home.module.css";
import ActivityCard from "./ActivityCard";

type CardFeaturesProps = {
  heading: string;
  subHeading: string;
  list: ActivityItemSimple[];
};
function CardFeatures({ heading, subHeading, list }: CardFeaturesProps) {
  return (
    <div className={styles.cardFeatureWrapper}>
      <div className={styles.textContainer}>
        <h2 className="main-heading">{heading}</h2>
        <p className="secondary-text">{subHeading}</p>
      </div>
      <div className={styles.cardListWrapper}>
        {list.map((item) => {
          return <ActivityCard key={`feature-${item.id}`} activity={item} />;
        })}
      </div>
    </div>
  );
}

export default CardFeatures;
