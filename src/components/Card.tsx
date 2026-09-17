import styles from "../styles/card.module.css";

type CardProps = {
  title: string;
  description: string;
  image?: string;
};
function Card({ title, description, image }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <img src={image} className={styles.thumbnail} />
      </div>
    </div>
  );
}

export default Card;
