/* eslint-disable react/prop-types */
import styles from "./todolist.module.css";

import TodoItem from "../TodoItem/TodoItem";

function TodoList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <TodoItem
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          key={task.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;
