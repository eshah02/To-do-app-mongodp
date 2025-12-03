import styles from "../styles/Home.module.css";

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      <button className={`${styles.tab} ${styles.active}`}>All Tasks</button>
      <button className={styles.tab}>Completed</button>
      <button className={styles.tab}>Starred</button>
    </div>
  );
}
