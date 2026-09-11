import styles from "../home.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Kolby Klassen</p>
        <h1 className={styles.heroHeading}>Backend Developer</h1>
        <p className={styles.heroDescription}>
          I build APIs, integrations, and automations that make business
          workflows more reliable.
        </p>
      </div>
    </section>
  );
}

export default Hero;
