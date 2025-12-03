import styles from "../styles/TaskCard.module.css";

export default function TaskCard({ title, subtitle, status, important }) {
  return (
    <div
      className={`${styles.card} ${status === "done" ? styles.doneCard : ""}`}
    >
      <div className={styles.left}>
        <div className={styles.circle}></div>

        <div>
          <p className={styles.title}>{title}</p>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.actions}>
        {important && <span className={styles.star}>!</span>}

        {status === "done" ? (
          <span className={styles.remove}>Remove</span>
        ) : (
          <span className={styles.delete}>Delete</span>
        )}
      </div>
    </div>
  );
}
