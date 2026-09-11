import Card from "../../../components/Card";
import type { ActivityItemSimple } from "../../../config/types";
import styles from "../home.module.css";

type CardFeaturesProps = {
  heading: string;
  subHeading: string;
  list: ActivityItemSimple[];
};
function CardFeatures({ heading, subHeading, list }: CardFeaturesProps) {
  return (
    <div className={styles.cardFeatureWrapper}>
      <div className={styles.cardTitleWrapper}>
        <h2>{heading}</h2>
        <p>{subHeading}</p>
      </div>
      <div className={styles.cardListWrapper}>
        {list.map((item) => {
          return (
            <Card
              key={`feature-${item.id}`}
              title={item.title}
              description={item.shortDescription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardFeatures;
