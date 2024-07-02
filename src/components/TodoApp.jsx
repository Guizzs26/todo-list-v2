import { useState } from "react";

import Header from "./Header/Header";
import TodoAddForm from "./TodoAddForm/TodoAddForm";
import Stats from "./Stats/Stats";
import TodoList from "./TodoList/TodoList";

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const savedItems = localStorage.getItem("tasks");

    return savedItems ? JSON.parse(savedItems) : [];
  });

  const updateTasks = (newTasks) => {
    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleAddTask = (newTask) => {
    const addedTask = [...tasks, newTask];
    updateTasks(addedTask);
  };

  const handleDeleteTask = (id) => {
    const deletedTask = tasks.filter((task) => task.id !== id);
    updateTasks(deletedTask);
  };

  const handleToggleTask = (id) => {
    const toggledTask = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    updateTasks(toggledTask);
  };

  return (
    <>
      <Header />
      <div className="container">
        <TodoAddForm onAddTask={handleAddTask} />
        <Stats tasks={tasks} />
        <TodoList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleToggleTask}
        />
      </div>
    </>
  );
}

export default TodoApp;
