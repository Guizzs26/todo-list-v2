/* eslint-disable react/prop-types */

import styles from "./stats.module.css";

function Stats({ tasks }) {
  const createdTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.stats}>
      <div className={styles.totalTasksBox}>
        <span className={styles.totalTasksLabel}>Created tasks</span>
        <span className={styles.totalTasksCount}>{createdTasks}</span>
      </div>

      <div className={styles.completedTasksBox}>
        <span className={styles.completedTasksLabel}>Completed</span>
        <span className={styles.completedTasksCount}>
          {completedTasks} of {createdTasks}
        </span>
      </div>
    </section>
  );
}

export default Stats;
