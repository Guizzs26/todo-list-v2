/* eslint-disable react/prop-types */

import styles from "./todoaddform.module.css";

import { useState } from "react";

function TodoAddForm({ onAddTask }) {
  const [taskDescription, setTaskDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!taskDescription.trim()) return;

    const newTask = { id: Date.now(), taskDescription, isCompleted: false };

    onAddTask(newTask);

    setTaskDescription("");
  };

  const handleInputChange = (e) => setTaskDescription(e.target.value);

  return (
    <form onSubmit={handleFormSubmit} className={styles.addForm}>
      <input
        type="text"
        placeholder="Add new tasks"
        value={taskDescription}
        onChange={handleInputChange}
        className={styles.addTaskInput}
      />

      <button type="submit" className={styles.addBtn}>
        Create
      </button>
    </form>
  );
}

export default TodoAddForm;
