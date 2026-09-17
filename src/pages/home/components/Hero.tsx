import Button from "../../../components/Button";
import styles from "../home.module.css";
import { RxArrowDown } from "react-icons/rx";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>
          Backend Developer<span>/</span> Kolby Klassen
        </p>
        <h1 className={styles.heroHeading}>
          Behind every great application, a backend you can count on.
        </h1>
        <p className={styles.heroDescription}>
          I build backend systems and automate busywork so teams can focus on
          what matters.
        </p>
        <div className={styles.heroButtons}>
          <Button title="Explore my work" variant="Brand" size="md">
            <RxArrowDown />
          </Button>
          <Button title="Get in touch" size="md" />
        </div>
        <p className={styles.heroSkills}>APIs / INTEGRATIONS / AUTOMATION</p>
      </div>
    </section>
  );
}

export default Hero;
