import { getProjectListByType } from "../../lib/projects";
import CardFeatures from "./components/CardFeatures";
import Hero from "./components/Hero";
import styles from "./home.module.css";

function Home() {
  const workFeatures = getProjectListByType("work");
  const personalFeatures = [
    ...getProjectListByType("deployed"),
    ...getProjectListByType("hobby"),
  ];

  return (
    <div className="page">
      <Hero />

      <div className={styles.projectFeatures}>
        <CardFeatures
          heading={"Case Studies"}
          subHeading={
            "A collection of projects I've helped bring to life at work."
          }
          list={workFeatures}
        />
        <br />
        <CardFeatures
          heading={"Personal Projects"}
          subHeading={"Some cool projects I have created in my free time."}
          list={personalFeatures}
        />
      </div>
    </div>
  );
}

export default Home;
