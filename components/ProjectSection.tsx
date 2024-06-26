import Image from "next/image";
import styles from "./ProjectSection.module.css";

const ProjectSection: React.FC = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projectItem}>
        <Image
          src="/airbnb.png"
          alt="AirBnB"
          className={styles.projectImage}
          width={400}
          height={200}
        />
        <div className={styles.projectContent}>
          <h3>AirBnB listings price prediction</h3>
          <div className={styles.projectTags}>
            <span>Python</span>
            <span>SQL</span>
            <span>Matlab</span>
          </div>
          <p>
            Prediction of AirBnB prices growth Milan (Italy) to provide insights
            on the areas that might soon get more opportunities to monetise with
            short stays. The algorithm takes into account seasonality, home
            characteristics, economic factors and stats on existing properties.
          </p>
          <a href="#">Read more →</a>
        </div>
      </div>
      <div className={styles.projectItem}>
        <Image
          src="/spotify.png"
          alt="Spotify"
          className={styles.projectImage}
          width={500}
          height={200}
        />
        <div className={styles.projectContent}>
          <h3>Spotify visual data art</h3>
          <div className={styles.projectTags}>
            <span>Python</span>
            <span>JavaScript</span>
            <span>SQL</span>
          </div>
          <p>
            Inspired by Windows Music Player animations, this algorithm creates
            cool animations for every music track on earth. The animations are
            tailored to the melody as well as the text, with the aim to create
            engaging experiences for users.
          </p>
          <a href="#">Read more →</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
