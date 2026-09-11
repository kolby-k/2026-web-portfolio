import styles from "../styles/card.module.css";

type CardProps = {
  title: string;
  description: string;
};
function Card({ title, description }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
