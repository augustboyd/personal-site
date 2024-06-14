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
        {/* Add social media icons and links here */}
      </div>
      <p className={styles.about}>
        Quantitative economics graduate, enjoy working with business
        stakeholders to help support strategy based on quantitative insights and
        statistical models.
      </p>
      <div className={styles.skills}>
        <h3>Skills</h3>
        <div className={styles.skillTags}>
          <span>Test</span>
          <span>Test</span>
          <span>Test</span>
          <span>Test</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
