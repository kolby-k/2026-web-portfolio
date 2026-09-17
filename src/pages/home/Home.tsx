import { getProjectListByType } from "../../lib/projects";
import CardFeatures from "./components/CardFeatures";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import styles from "./home.module.css";

function Home() {
  const workFeatures = getProjectListByType("work");
  const personalFeatures = getProjectListByType("hobby");

  return (
    <div className={`page ${styles.home}`}>
      <Hero />
      <hr className="quarter-width" />

      <div className={styles.projectFeatures} id="Projects">
        <CardFeatures
          heading={"Work Projects"}
          subHeading={"Projects I've contributed to at work."}
          list={workFeatures}
        />
        <br />
        <CardFeatures
          heading={"Hobby Projects"}
          subHeading={"Projects I've built in my free time."}
          list={personalFeatures}
        />
      </div>

      <br />
      <hr className="quarter-width" />

      <Timeline />
    </div>
  );
}

export default Home;
