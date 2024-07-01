import { useState } from "react";

import Header from "./Header/Header";
import TodoAddForm from "./TodoAddForm/TodoAddForm";
import Stats from "./Stats/Stats";
import TodoList from "./TodoList/TodoList";

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => setTasks((tasks) => [...tasks, newTask]);

  const handleDeleteTask = (id) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  const handleToggleTask = (id) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );

  return (
    <>
      <Header />
      <TodoAddForm onAddTask={handleAddTask} />
      <Stats tasks={tasks} />
      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </>
  );
}

export default TodoApp;
