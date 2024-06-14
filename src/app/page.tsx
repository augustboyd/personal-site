import ExperienceSection from "../../components/ExperienceSection";
import ProfileCard from "../../components/ProfileCard";
import ProjectSection from "../../components/ProjectSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* <div className={styles.navBar}>
        <div>
          <div className={styles.navButtonContainer}>
            <button className={styles.navButton}>About</button>
            <button className={styles.navButton}>Projects</button>
            <button className={styles.navButton}>Contact</button>
          </div>
        </div>
      </div> */}

      <div className={styles.spacer}></div>

      <div className={styles.mainGrid}>
        <div className={styles.sidebar}>
          <ProfileCard />
        </div>
        <div className={styles.content}>
          <ProjectSection />
          <ExperienceSection />
        </div>
      </div>
    </>
  );
}
