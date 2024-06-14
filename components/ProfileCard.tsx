import Image from "next/image";
import styles from "./ProfileCard.module.css";

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/headshot.jpg"
        alt="Your Name"
        width={100}
        height={100}
        className={styles.photo}
      />
      <h2>August Boyd</h2>
      <p className={styles.job}>Computer Science Graduate</p>
      <p className={styles.location}>Based in Charlottesville, VA</p>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/augustboyd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin_icon.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className={styles.icon}
          />
        </a>
        <a
          href="https://github.com/augustboyd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github_icon.png"
            alt="GitHub"
            width={20}
            height={20}
            className={styles.icon}
          />
        </a>
        <a href="mailto:augustb25@gmail.com">
          <Image
            src="/google_icon.png"
            alt="Gmail"
            width={20}
            height={20}
            className={styles.icon}
          />
        </a>
      </div>
      <p className={styles.about}>
        Quantitative economics graduate, enjoy working with business
        stakeholders to help support strategy based on quantitative insights and
        statistical models.
      </p>
      <div className={styles.skills}>
        <h3>Skills</h3>
        <div className={styles.skillTags}>
          <span>Java</span>
          <span>Python</span>
          <span>HTML/CSS</span>
          <span>Typescript</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
