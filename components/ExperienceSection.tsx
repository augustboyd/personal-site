// components/ExperienceSection.tsx
import styles from "./ExperienceSection.module.css";

const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.job}>
        <h3>Mar 2022 - now</h3>
        <h4>Data Analyst at Amazon</h4>
        <p>
          Leading the development and implementation of data analytics
          strategies that support business goals. Managing a team of data
          analysts to ensure data accuracy, completeness, and integrity.
          Providing insights and recommendations to senior management based on
          analysis of customer behaviour, product performance, and other key
          metrics.
        </p>
        <div className={styles.skillTags}>
          <span>SQL</span>
          <span>Python</span>
          <span>R</span>
          <span>Excel</span>
          <span>Tableau</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
