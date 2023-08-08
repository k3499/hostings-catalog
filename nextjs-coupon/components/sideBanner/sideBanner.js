import styles from "./sideBanner.module.css";

export default function SideBanner() {
  return (
    <a
      href='https://zomro.com/virtual?from=35058'
      className={styles.wrapper}
      target='_blank'
    >
      <span className={styles.label}>Реклама</span>
      <div className={styles.icon}></div>
    </a>
  );
}
