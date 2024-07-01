import { useState } from "react";
import Header from "./Header/Header";
import TodoAddForm from "./TodoAddForm/TodoAddForm";
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
      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </>
  );
}

export default TodoApp;
