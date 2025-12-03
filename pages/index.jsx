import Tabs from "../components/Tabs";
import TaskCard from "../components/TaskCard";
import AddTaskButton from "../components/AddTaskButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Tasks</h2>

      <Tabs />

      <h3 className={styles.sectionTitle}>TODAY</h3>

      <div className={styles.taskList}>
        <TaskCard
          title="RootsMultimedia"
          status="done"
          subtitle="Marked as Done"
        />

        <TaskCard title="Finalize Q3 Report" status="normal" important />

        <TaskCard title="Call with Mark" status="normal" />
      </div>

      <AddTaskButton />
    </div>
  );
}
