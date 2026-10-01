import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import styles from "../home.module.css";
import { RxArrowDown, RxArrowRight } from "react-icons/rx";
function Hero() {
  const nav = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={`brand-text font-sm p0.5`}>
          Kolby Klassen<span> / </span>Backend Developer
        </p>
        <h1 className={`hero-text`}>
          Behind every great application, a backend you can count on.
        </h1>
        <p className={styles.heroDescription}>
          I build backend systems and automate busywork so teams can focus on
          what matters.
        </p>
        <div className={styles.heroButtons}>
          <Button
            title="My Experience"
            variant="Brand"
            size="md"
            handleClick={() => nav("/#Timeline")}
          >
            <RxArrowDown />
          </Button>
          <Button
            title="All Projects"
            size="md"
            handleClick={() => nav("/vault")}
          >
            <RxArrowRight />
          </Button>
        </div>
        <p className={`muted-text font-xs ${styles.heroSkills}`}>
          APIs / INTEGRATIONS / AUTOMATION
        </p>
      </div>
    </section>
  );
}

export default Hero;
