import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.navBar}>
      <div>
        <img
          src="/headshot.jpg"
          height={50}
          width={50}
          className={styles.navLogo}
        ></img>
      </div>
      <div className={styles.navButtonContainer}>
        <button className={styles.navButton}>About</button>
        <button className={styles.navButton}>Projects</button>
        <button className={styles.navButton}>Contact</button>
      </div>
    </div>
  );
}
